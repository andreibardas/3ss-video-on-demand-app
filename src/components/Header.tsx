import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AssetDetailsContext from "../contexts/AssetContext/AssetDetailsContext";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const items = useContext(AssetDetailsContext);

  console.log(items);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/categories">Categories</Link>
        </div>
        <div>
          <Link to="/popular">Popular</Link>
        </div>
        <div>
          <Link to="/watchlist">
            Watchlist: <span>{items.items.length}</span>
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
