import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Tag = styled.div`
  list-style: none;
  overflow: hidden;
  font-size: 16px;
  cursor: pointer;

  background: #eee;
  border-radius: 0px 0 0 0px;
  color: #181818;
  display: inline-block;
  height: 39px;
  width: 200px;
  line-height: 39px;
  padding: 0 10px 0 11.5px;
  position: relative;
  margin: 5px 10px 10px 5px;
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
    position: absolute;
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
