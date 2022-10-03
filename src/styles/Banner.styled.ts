import styled from "styled-components";

import Banner from "../assets/banner.png";

export const BannerContainer = styled.div`
  height: auto;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 40px;
  margin: 40px;
`;

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
