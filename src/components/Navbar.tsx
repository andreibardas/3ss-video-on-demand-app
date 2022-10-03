import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WatchlistContext from "../contexts/WatchlistContext";
import LogoImg from "../assets/logo.png";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.styled";

export interface NavbarProps {
  extendNavbar?: Boolean;
}

const Navbar = (props: NavbarProps) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const items = useContext(WatchlistContext);

  console.log(items);

  useEffect(() => {
    if (extendNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [extendNavbar]);

  return (
    // <div>
    //   <nav
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <div>
    //       <Link to="/">Home</Link>
    //     </div>
    //     <div>
    //       <Link to="/categories">Categories</Link>
    //     </div>
    //     <div>
    //       <Link to="/popular">Popular</Link>
    //     </div>
    //     <div>
    //       <Link to="/watchlist">
    //         Watchlist: <span>{items.items.length}</span>
    //       </Link>
    //     </div>
    //   </nav>
    //   <hr />
    // </div>

    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/categories">Categories</NavbarLink>
            <NavbarLink to="/popular">Popular</NavbarLink>
            <NavbarLink to="/watchlist">
              Watchlist: <span>{items.items.length}</span>
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Link to="/" onClick={() => setExtendNavbar(false)}>
            <Logo src={LogoImg}></Logo>
          </Link>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer style={{ overflowY: "hidden" }}>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to="/categories"
          >
            Categories
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to="/popular"
          >
            Popular
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setExtendNavbar(false)}
            to="/watchlist"
          >
            Watchlist: <span>{items.items.length}</span>
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
