import React from "react";
import { Link } from "react-router-dom";

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
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
        <Link to="/popular">Watchlist: 0</Link>
      </div>
    </nav>
    <hr />
  </div>
);

export default Header;
