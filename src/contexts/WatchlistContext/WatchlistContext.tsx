import React, { createContext, useState } from "react";

type AssetDetailsContextInterface = {
  id: number;
  name: string;
};

const WatchlistContext = createContext<any | null>([]);

export default WatchlistContext;

//

// type WatchlistProviderProps = {
//   children: React.ReactNode;
// };
//
// export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
//   const [items, setItems] = useState<any>([]);
//
//   const addToWatchlist = (name: string, id: number) => {
//     setItems((prevState: any) => [...prevState, { name, id }]);
//   };
//
//   return (
//     <AssetDetailsContext.Provider value={{ items, addToWatchlist }}>
//       {children}
//     </AssetDetailsContext.Provider>
//   );
// };

//
