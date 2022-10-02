import React, { useContext, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import WatchlistContext from "../contexts/WatchlistContext/WatchlistContext";

import { Container, Button } from "../styles/AssetDetails.styled";
import Modal from "../components/Utility/Modal";

type AssetDetailsProps = {
  title?: string;
  paragraph?: string;
};

const AssetDetails = ({ title, paragraph }: AssetDetailsProps) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [notFound, setNotFound] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const assetDetails: ApiResponse = useGetApi(
    `https://video-proxy.3rdy.tv/api/vod/asset/${id}`
  );

  const assetVideos: ApiResponse = useGetApi(
    `https://video-proxy.3rdy.tv/api/vod/asset/${id}/videos`
  );

  const openModal = () => {
    setShowModal((prev: boolean) => !prev);
    console.log(showModal);
  };

  const { addToWatchlist } = useContext(WatchlistContext);

  return (
    <div style={{ overflowY: "hidden" }}>
      <h1>Asset Details Page</h1>

      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>

      <p>Asset ID: {id}</p>
      <button onClick={() => console.log(assetVideos.data?.data.results)}>
        log videos
      </button>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${assetDetails.data?.data.poster_path}`}
      />
      <p>Asset Title: {assetDetails.data?.data.original_title}</p>
      <button
        onClick={() =>
          addToWatchlist(assetDetails.data?.data.original_title, 32)
        }
      >
        add to watchlist
      </button>
      <p>Asset Overview: {assetDetails.data?.data.overview}</p>
      <p>Asset Release Date: {assetDetails.data?.data.release_date}</p>

      <button>Watch Trailers</button>

      {assetVideos.data?.data.results.map((result: any) => {
        return (
          <div key={result.key}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${result.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              onError={() => console.log("error")}
            />
          </div>
        );
      })}

      <button onClick={() => console.log(assetDetails.data.data.videos)}>
        log asset details
      </button>

      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default AssetDetails;
