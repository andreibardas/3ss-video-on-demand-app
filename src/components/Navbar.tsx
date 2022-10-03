import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    if (extendNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [extendNavbar]);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/categories">Categories</NavbarLink>
            <NavbarLink to="/popular">Popular</NavbarLink>
            <NavbarLink to="/watchlist">Watchlist</NavbarLink>
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
            Watchlist
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
