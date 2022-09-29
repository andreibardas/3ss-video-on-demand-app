import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

type HomeProps = {
  title?: string;
  paragraph?: string;
};

const Home = ({ title, paragraph }: HomeProps) => {
  const popular: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <div>
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
        {popular.data?.data.map((popularAsset: any) => (
          <div key={popularAsset.id}>
            <img
              style={{ width: "200px" }}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.poster_path}`}
            />
            <p>{popularAsset.original_title}</p>
          </div>
        ))}
      </div>

      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Home;
