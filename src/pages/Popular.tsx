import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { Link } from "react-router-dom";

type PopularProps = {
  title?: string;
  paragraph?: string;
};

const Popular = ({ title, paragraph }: PopularProps) => {
  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <div>
      <h1>Popular Page</h1>

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
          <Link to={`/asset/${popularAsset.id}`}>
            <div key={popularAsset.id}>
              <img
                style={{ width: "200px" }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.poster_path}`}
              />
              <p>{popularAsset.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
