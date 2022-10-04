import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { useNavigate } from "react-router-dom";

import {
  CardContainer,
  CardContent,
  CardTitle,
  CardDateAndVote,
} from "../styles/Cards.styled";

import { PageContainer } from "../styles/PageContainer.styled";
import { CardsPageContainer } from "../styles/Cards.styled";

const Popular = () => {
  const navigate = useNavigate();

  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <h1>Popular Movies</h1>

      <CardsPageContainer>
        {popularAssets.data?.data.map((popularAsset: any) => (
          <CardContainer
            key={popularAsset.id}
            onClick={() => navigate(`/asset/${popularAsset.id}`)}
          >
            <img
              alt={popularAsset.original_title}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.backdrop_path}`}
            />
            <CardContent>
              <CardTitle>
                <p>{popularAsset.original_title}</p>
              </CardTitle>
              <CardDateAndVote>
                <p>
                  {new Date(popularAsset.release_date).toLocaleDateString()}
                </p>
                <p>{popularAsset.vote_average}</p>
              </CardDateAndVote>
            </CardContent>
          </CardContainer>
        ))}
      </CardsPageContainer>
    </PageContainer>
  );
};

export default Popular;
