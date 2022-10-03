import React from "react";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { useNavigate } from "react-router-dom";

import { PageContainer } from "../styles/PageContainer.styled";
import { CategoryContainer, Tag } from "../styles/Category.styled";

const Categories = () => {
  const navigate = useNavigate();

  const categories: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/category"
  );

  return (
    <PageContainer>
      <h1>Browse Categories</h1>

      <CategoryContainer>
        {categories.data?.data.genres.map((category: any) => (
          <div key={category.id}>
            <Tag onClick={() => navigate(`/movies/${category.id}`)}>
              {category.name}
            </Tag>
          </div>
        ))}
      </CategoryContainer>
    </PageContainer>
  );
};

export default Categories;
