import React, { useContext } from "react";
import WatchlistContext from "../contexts/WatchlistContext";

import { PageContainer } from "../styles/PageContainer.styled";
import {
  CardContainer,
  CardContent,
  CardDateAndVote,
  CardsPageContainer,
  CardTitle,
} from "../styles/Cards.styled";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const navigate = useNavigate();

  const items = useContext(WatchlistContext);

  return (
    <PageContainer>
      <h1>Your Movie Watchlist</h1>

      {items.items.length === 0 ? (
        <p>Your Watchlist is empty :(</p>
      ) : (
        <CardsPageContainer>
          {items?.items?.map((popularAsset: any) => (
            <CardContainer
              key={popularAsset.id}
              onClick={() => navigate(`/asset/${popularAsset.id}`)}
            >
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${popularAsset.backdrop_path}`}
              />
              <CardContent>
                <CardTitle>
                  <p>{popularAsset.original_title}</p>
                </CardTitle>
                <CardDateAndVote>
                  <p>
                    {new Date(popularAsset.release_date).toLocaleDateString()}
                  </p>
                  <p>{popularAsset.vote_average}</p>
                </CardDateAndVote>
              </CardContent>
            </CardContainer>
          ))}
        </CardsPageContainer>
      )}
    </PageContainer>
  );
};

export default Watchlist;
