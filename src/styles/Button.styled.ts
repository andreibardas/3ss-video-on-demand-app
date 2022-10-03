import styled from "styled-components";

export const PrimaryButton = styled.div`
  height: 28px;
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #dd0211;
  border-color: #dd0211;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: red;
    border-color: red;
  }
`;

export const SecondaryButton = styled.div`
  height: 28px;
  cursor: pointer;
  outline: 0;
  color: black;
  background-color: #ededed;
  border-color: #ededed;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: black;
    background-color: white;
    border-color: white;
  }
`;
