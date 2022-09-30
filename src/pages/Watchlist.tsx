import React, { useContext } from "react";
import AssetDetailsContext from "../contexts/AssetContext/AssetDetailsContext";
import { Link } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const Watchlist = ({ title, paragraph }: NotFoundProps) => {
  const items = useContext(AssetDetailsContext);

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
