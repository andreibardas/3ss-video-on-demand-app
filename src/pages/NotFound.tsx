import React from "react";
import { useNavigate } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

import { PageContainer } from "../styles/PageContainer.styled";
import {
  CardContainer,
  CardContent,
  CardDateAndVote,
  CardTitle,
} from "../styles/Cards.styled";

const NotFound = () => {
  const navigate = useNavigate();

  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <h1>Not Found :(</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {popularAssets.data?.data.slice(0, 3).map((popularAsset: any) => (
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
      </div>
    </PageContainer>
  );
};

export default NotFound;
