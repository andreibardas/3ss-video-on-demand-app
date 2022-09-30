import React, { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { useGetMoviesByCategory } from "../hooks/useGetMoviesByCategory";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

const MoviesByCategory = () => {
  let { category_id } = useParams();

  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, error, data }: any = useGetMoviesByCategory(
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
    [loading, hasMore]
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
    <div>
      <h1>Movies By Category Page</h1>
      <p>{currentCategory?.name} Movies</p>

      <button onClick={() => console.log(data)}>
        console log movies by category
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((asset: any, index: any) => {
          if (data.length === index + 1) {
            return (
              <Link key={asset.id} to={`/asset/${asset.id}`}>
                <div ref={lastMovieElementRef}>
                  <img
                    style={{ width: "200px" }}
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${asset.poster_path}`}
                  />
                  <p>{asset.original_title}</p>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={asset.id} to={`/asset/${asset.id}`}>
                <div>
                  <img
                    style={{ width: "200px" }}
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${asset.poster_path}`}
                  />
                  <p>{asset.original_title}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MoviesByCategory;
