import React from "react";
import { Link } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const Watchlist = ({ title, paragraph }: NotFoundProps) => {
  return (
    <div>
      <h1>Watchlist Page</h1>
    </div>
  );
};

export default Watchlist;
