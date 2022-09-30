import React, { useState } from "react";
import WatchlistContext from "./WatchlistContext";

type WatchlistProviderProps = {
  children: React.ReactNode;
};

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
