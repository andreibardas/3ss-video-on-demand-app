import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { Link } from "react-router-dom";

import ImageSlider from "../components/AssetSlider";

import { PageContainer } from "../styles/PageContainer.styled";

type HomeProps = {
  title?: string;
  paragraph?: string;
};

const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Home = ({ title, paragraph }: HomeProps) => {
  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <h1>Home Page</h1>

      <ImageSlider slides={SliderData} />

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
