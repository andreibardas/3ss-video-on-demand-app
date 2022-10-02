import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { Link } from "react-router-dom";

import { PageContainer } from "../styles/PageContainer.styled";

type CategoriesProps = {
  title?: string;
  paragraph?: string;
};

const Categories = ({ title, paragraph }: CategoriesProps) => {
  const categories: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/category"
  );

  return (
    <PageContainer>
      <h1>Categories Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {categories.data?.data.genres.map((category: any) => (
          <div key={category.id}>
            <Link to={`/movies/${category.id}`}>{category.name}</Link>
          </div>
        ))}
      </div>

      <h2>{title}</h2>
      <p>{paragraph}</p>
    </PageContainer>
  );
};

export default Categories;
