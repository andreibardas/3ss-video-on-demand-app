import React from "react";
import { Link } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

import { PageContainer } from "../styles/PageContainer.styled";

type NotFoundProps = {
  title?: string;
  paragraph?: string;
};

const NotFound = ({ title, paragraph }: NotFoundProps) => {
  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <h1>Not Found Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {popularAssets.data?.data.slice(0, 3).map((popularAsset: any) => (
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
    </PageContainer>
  );
};

export default NotFound;
