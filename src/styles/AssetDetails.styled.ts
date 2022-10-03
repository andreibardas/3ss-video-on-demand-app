import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 1000px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AssetDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const OverviewText = styled.p`
  overflow-wrap: break-word;
  inline-size: 60vw;
  @media (max-width: 800px) {
    inline-size: 300px;
  }
`;
