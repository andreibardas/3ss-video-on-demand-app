import React, { useState, createContext } from "react";

type WatchlistProviderProps = {
  children: React.ReactNode;
};

const WatchlistContext = createContext<any>([]);

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [items, setItems] = useState<any>([]);

  const addToWatchlist = (name: string, id: number) => {
    setItems((prevState: any) => [...prevState, { name, id }]);
  };

  return (
    <WatchlistContext.Provider value={{ items, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;
