import React, { useContext, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import WatchlistContext from "../contexts/WatchlistContext";

import {
  ModalContainer,
  AssetDetailsContainer,
  OverviewText,
} from "../styles/AssetDetails.styled";
import { PrimaryButton, SecondaryButton } from "../styles/Button.styled";
import { PageContainer } from "../styles/PageContainer.styled";
import Modal from "../components/utility/Modal";
import { Tag } from "../styles/Slider.styled";

type AssetDetailsProps = {
  title?: string;
  paragraph?: string;
};

type Category = {
  id: number;
  name: string;
};

const AssetDetails = ({ title, paragraph }: AssetDetailsProps) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const assetDetails: ApiResponse = useGetApi(
    `https://video-proxy.3rdy.tv/api/vod/asset/${id}`
  );

  const openModal = () => {
    setShowModal((prev: boolean) => !prev);
  };

  const { addToWatchlist } = useContext(WatchlistContext);

  return (
    <PageContainer style={{ overflowY: "hidden" }}>
      <AssetDetailsContainer>
        <img
          alt={assetDetails.data?.data.original_title}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${assetDetails?.data?.data.backdrop_path}`}
        />
        <div>
          <h1>
            {assetDetails.data?.data.original_title}{" "}
            <span style={{ fontWeight: "normal" }}>
              {" "}
              ({new Date(
                assetDetails.data?.data.release_date
              ).getFullYear()}){" "}
            </span>
          </h1>
          <div>
            {assetDetails.data?.data.genres.map((genre: Category) => {
              return (
                <Tag
                  key={genre.id}
                  onClick={() => navigate(`/movies/${genre.id}`)}
                >
                  {genre.name}
                </Tag>
              );
            })}
          </div>
          <p>
            {new Date(
              assetDetails.data?.data.release_date
            ).toLocaleDateString()}{" "}
            <span>&#8226;</span>{" "}
            {assetDetails.data?.data?.original_language.toUpperCase()}{" "}
            <span>&#8226;</span>{" "}
            {parseInt(
              String(Number(assetDetails.data?.data?.runtime.toString()) / 60),
              10
            )}{" "}
            hours {assetDetails.data?.data?.runtime % 60} minutes
          </p>

          <p style={{ marginTop: "40px" }}>{assetDetails.data?.data.tagline}</p>
          <h3>Overview</h3>
          <OverviewText>{assetDetails.data?.data.overview}</OverviewText>
          <div style={{ marginTop: "40px" }}>
            <PrimaryButton
              onClick={() =>
                addToWatchlist(
                  assetDetails.data?.data.id,
                  assetDetails.data?.data.original_title,
                  assetDetails.data?.data.backdrop_path,
                  assetDetails.data?.data.release_date,
                  assetDetails.data?.data.vote_average
                )
              }
            >
              Add to Watchlist
            </PrimaryButton>{" "}
            <SecondaryButton onClick={openModal}>Watch Trailer</SecondaryButton>
          </div>
        </div>
      </AssetDetailsContainer>
      {showModal ? (
        <ModalContainer>
          <Modal id={id} showModal={showModal} setShowModal={setShowModal} />
        </ModalContainer>
      ) : null}
    </PageContainer>
  );
};

export default AssetDetails;
