import React, { useRef } from "react";

import { Background, ModalWrapper } from "../../styles/Modal.styled";
import { ApiResponse, useGetApi } from "../../hooks/useGetApiHook";

export interface ShowModalProps {
  showModal?: Boolean;
  setShowModal?: any;
  id?: string | undefined;
}

const Modal = (props: ShowModalProps) => {
  const modalRef = useRef<any>();

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  };

  const assetVideos: ApiResponse = useGetApi(
    `https://video-proxy.3rdy.tv/api/vod/asset/${props.id}/videos`
  );

  return (
    <div>
      {props.showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={props.showModal}>
            <iframe
              style={{
                width: "80vw",
                height: "45.02vw",
              }}
              src={`https://www.youtube.com/embed/${assetVideos.data?.data.results[0].key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default Modal;
