import React, { useState, createContext } from "react";

type WatchlistProviderProps = {
  children: React.ReactNode;
};

const WatchlistContext = createContext<any>([]);

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [items, setItems] = useState<any>([]);

  const uniqueItems = items;

  function checkAndAdd(obj: any) {
    for (let i = 0; i < uniqueItems.length; i++) {
      if (uniqueItems[i].id === obj.id) {
        return;
      }
    }
    uniqueItems.push(obj);
  }

  const addToWatchlist = (
    id: number,
    original_title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
  ) => {
    checkAndAdd({
      id,
      original_title,
      backdrop_path,
      release_date,
      vote_average,
    });

    setItems(uniqueItems);
  };

  return (
    <WatchlistContext.Provider value={{ items, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;
