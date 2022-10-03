import styled from "styled-components";

export const CardsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 460px;
  margin: 20px 20px 40px 20px;
  cursor: pointer;

  img {
    height: 330px;
    border-radius: 10px;
  }
`;

export const CardContent = styled.div`
  height: 130px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  font-size: 18px;
`;

export const CardDateAndVote = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
