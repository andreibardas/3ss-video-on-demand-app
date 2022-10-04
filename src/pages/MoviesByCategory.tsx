import React, { useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { useGetMoviesByCategory } from "../hooks/useGetMoviesByCategory";

import { PageContainer } from "../styles/PageContainer.styled";
import {
  CardContainer,
  CardContent,
  CardDateAndVote,
  CardTitle,
  CardsPageContainer,
} from "../styles/Cards.styled";

type Category = {
  id: number;
  name: string;
};

const MoviesByCategory = () => {
  let { category_id } = useParams();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(1);

  const { loading, data }: any = useGetMoviesByCategory(
    category_id,
    pageNumber
  );

  const observer = useRef<any>();

  const lastMovieElementRef = useCallback<any>(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("visible");
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading]
  );

  const categories: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/category"
  );

  const currentCategory = categories.data?.data.genres.find(
    (item: Category) => {
      return item.id.toString() === category_id ? item?.name : null;
    }
  );

  return (
    <PageContainer>
      <h1>{currentCategory?.name} Movies</h1>

      <CardsPageContainer>
        {data.map((asset: any, index: any) => {
          if (data.length === index + 1) {
            return (
              <CardContainer
                key={asset.id}
                onClick={() => navigate(`/asset/${asset.id}`)}
                ref={lastMovieElementRef}
              >
                <img
                  alt={asset.original_title}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${asset.backdrop_path}`}
                />
                <CardContent>
                  <CardTitle>
                    <p>{asset.original_title}</p>
                  </CardTitle>
                  <CardDateAndVote>
                    <p>{new Date(asset.release_date).toLocaleDateString()}</p>
                    <p>{asset.vote_average}</p>
                  </CardDateAndVote>
                </CardContent>
              </CardContainer>
            );
          } else {
            return (
              <CardContainer
                key={asset.id}
                onClick={() => navigate(`/asset/${asset.id}`)}
              >
                <img
                  alt={asset.original_title}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${asset.backdrop_path}`}
                />
                <CardContent>
                  <CardTitle>
                    <p>{asset.original_title}</p>
                  </CardTitle>
                  <CardDateAndVote>
                    <p>{new Date(asset.release_date).toLocaleDateString()}</p>
                    <p>{asset.vote_average}</p>
                  </CardDateAndVote>
                </CardContent>
              </CardContainer>
            );
          }
        })}
      </CardsPageContainer>
    </PageContainer>
  );
};

export default MoviesByCategory;
