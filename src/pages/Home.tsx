import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";

import ImageSlider from "../components/AssetSlider";

import { PageContainer } from "../styles/PageContainer.styled";
import Banner from "../components/Banner";

const Home = () => {
  const popularAssets: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/popular"
  );

  return (
    <PageContainer>
      <ImageSlider slides={popularAssets.data?.data} />
      <Banner />
    </PageContainer>
  );
};

export default Home;
