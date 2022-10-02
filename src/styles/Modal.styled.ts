import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { ShowModalProps } from "../components/Utility/Modal";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  //background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<ShowModalProps>`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000000;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
