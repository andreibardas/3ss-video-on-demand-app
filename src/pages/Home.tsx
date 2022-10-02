import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { Link } from "react-router-dom";

import { PageContainer } from "../styles/PageContainer.styled";

type HomeProps = {
  title?: string;
  paragraph?: string;
};

const Home = ({ title, paragraph }: HomeProps) => {
  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <h1>Home Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {popularAssets.data?.data.map((popularAsset: any) => (
          <Link key={popularAsset.id} to={`/asset/${popularAsset.id}`}>
            <div>
              <img
                style={{ width: "200px" }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.poster_path}`}
              />
              <p>{popularAsset.original_title}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2>{title}</h2>
      <p>{paragraph}</p>
    </PageContainer>
  );
};

export default Home;
