import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import AssetDetailsContext from "../contexts/AssetContext/AssetDetailsContext";

type AssetDetailsProps = {
  title?: string;
  paragraph?: string;
};

const AssetDetails = ({ title, paragraph }: AssetDetailsProps) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const assetDetails: ApiResponse = useGetApi(
    `https://video-proxy.3rdy.tv/api/vod/asset/${id}`
  );

  const [notFound, setNotFound] = useState(false);

  const { addToWatchlist } = useContext(AssetDetailsContext);

  // useEffect(() => {
  //   if (notFound) {
  //     navigate("/404", { replace: true });
  //   }
  // }, []);

  return (
    <div>
      <h1>Asset Details Page</h1>
      <p>Asset ID: {id}</p>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${assetDetails.data?.data.poster_path}`}
      />
      <p>Asset Title: {assetDetails.data?.data.original_title}</p>
      <button
        onClick={() =>
          addToWatchlist(assetDetails.data?.data.original_title, 32)
        }
      >
        add to watchlist
      </button>
      <p>Asset Overview: {assetDetails.data?.data.overview}</p>
      <p>Asset Release Date: {assetDetails.data?.data.release_date}</p>

      <button>Watch Trailers</button>

      {assetDetails.data?.data.videos.results.map((result: any) => {
        return (
          <div key={result.key}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${result.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              onError={() => console.log("error")}
            />
          </div>
        );
      })}

      <button onClick={() => console.log(assetDetails.data.data.videos)}>
        log asset details
      </button>

      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default AssetDetails;
