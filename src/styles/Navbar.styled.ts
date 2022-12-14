import styled from "styled-components";
import { Link } from "react-router-dom";

import { NavbarProps } from "../components/Navbar";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props: NavbarProps) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #212121;
  display: flex;
  position: fixed;
  z-index: 30;

  flex-direction: column;
  @media (min-width: 800px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 800px) {
    display: none;
  }

  :hover {
    color: #dd0211;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 120px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    display: none;
  }
`;
