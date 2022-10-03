import React, { useRef } from "react";

import {
  Background,
  ModalWrapper,
  ModalImg,
  CloseModalButton,
  ModalContent,
} from "../../styles/Modal.styled";

export interface ShowModalProps {
  showModal?: Boolean;
  setShowModal?: any;
}

const Modal = (props: ShowModalProps) => {
  const modalRef = useRef<any>();

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  };

  return (
    <div>
      {props.showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={props.showModal}>
            <ModalImg src={require("../../assets/modal.jpg")} />
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => props.setShowModal((prev: any) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default Modal;
