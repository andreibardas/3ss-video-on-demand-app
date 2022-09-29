import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import {
  CategoriesApiResponse,
  useGetMoviesByCategory,
} from "../hooks/useGetMoviesByCategory";

type Category = {
  id: number;
  name: string;
};

const MoviesByCategory = () => {
  let navigate = useNavigate();
  let { category_id } = useParams();

  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, error, data }: any = useGetMoviesByCategory(
    category_id,
    pageNumber
  );

  const [myData, setMyData] = useState<any[]>([]);

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

  // const moviesByCategory: ApiResponse = useGetApi(
  //   `https://video-proxy.3rdy.tv/api/vod/category/${category_id}/assets/?page=1&size=20`
  // );

  const currentCategory = categories.data?.data.genres.find(
    (item: Category) => {
      return item.id.toString() === category_id ? item?.name : null;
    }
  );

  // useEffect(() => {
  //   if (data) {
  //     // setMyData(data);
  //     const filteredMovies = [...new Set(data)];
  //     setMyData(filteredMovies);
  //   }
  //   console.log("my Data useeffect: ", myData);
  // }, [data]);

  // if (myData === undefined)
  //   return (
  //     <div>
  //       {" "}
  //       <button onClick={() => console.log(myData)}>
  //         console log movies by category
  //       </button>
  //       <h1>Loading...</h1>
  //     </div>
  //   );

  return (
    <div>
      <h1>Movies By Category Page</h1>
      {/*<p>{currentCategory?.name} Movies</p>*/}

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
        {data.map((popularAsset: any, index: any) => {
          if (data.length === index + 1) {
            return (
              <div ref={lastMovieElementRef} key={popularAsset.id}>
                <img
                  style={{ width: "200px" }}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.poster_path}`}
                />
                <p>{popularAsset.original_title}</p>
              </div>
            );
          } else {
            return (
              <div key={popularAsset.id}>
                <img
                  style={{ width: "200px" }}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.poster_path}`}
                />
                <p>{popularAsset.original_title}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MoviesByCategory;
