import React, { useContext } from "react";
import WatchlistContext from "../contexts/WatchlistContext/WatchlistContext";
import { Link } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

import { PageContainer } from "../styles/PageContainer.styled";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const Watchlist = ({ title, paragraph }: NotFoundProps) => {
  const items = useContext(WatchlistContext);

  console.log(items.items);

  return (
    <PageContainer>
      <h1>Watchlist Page</h1>

      {items.items?.map((item: any) => {
        return <p>{item?.name}</p>;
      })}
    </PageContainer>
  );
};

export default Watchlist;
