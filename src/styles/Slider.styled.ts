import styled from "styled-components";

export const SliderContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    //height: 80vh;
    align-items: center;
    margin-top: 0px;
  }
`;

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 60vw;
  //min-height: 600px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  color: white;
  cursor: pointer;
  font-size: 40px;
  @media (max-width: 800px) {
    font-size: 26px;
  }
  :hover {
    color: #dd0211;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  img {
    height: 330px;
    @media (max-width: 800px) {
      height: 240px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
  max-width: 70%;
  height: 330px;
  @media (max-width: 800px) {
    min-height: fit-content;
    max-width: 90%;
  }
`;

export const ArrowContainer = styled.div`
  color: #ffffff;
  cursor: pointer;
  height: 330px;
  :hover {
    color: #dd0211;
  }
`;

export const Tag = styled.div`
  list-style: none;
  overflow: hidden;
  font-size: 12px;
  cursor: pointer;

  background: #eee;
  border-radius: 0px 0 0 0px;
  color: #181818;
  display: inline-block;
  height: 13px;
  line-height: 13px;
  padding: 0 10px 0 11.5px;
  position: relative;
  margin: 0 5px 5px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;

  ::before {
    background: #fff;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    height: 3px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  ::after {
    background: #fff;
    content: "";
    //position: absolute;
    right: 0;
    top: 0;
  }

  :hover {
    background-color: #dd0211;
    color: white;
  }

  :hover::after {
    border-left-color: #dd0211;
  }
`;
