import React, { useContext } from "react";
import WatchlistContext from "../contexts/WatchlistContext/WatchlistContext";
import { Link } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const Watchlist = ({ title, paragraph }: NotFoundProps) => {
  const items = useContext(WatchlistContext);

  console.log(items.items);

  return (
    <div>
      <h1>Watchlist Page</h1>

      {items.items?.map((item: any) => {
        return <p>{item?.name}</p>;
      })}
    </div>
  );
};

export default Watchlist;
