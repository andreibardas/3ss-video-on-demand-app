import React from "react";
import {
  BannerContainer,
  BannerContentContainer,
} from "../styles/Banner.styled";

import { PrimaryButton } from "../styles/Button.styled";

const Banner = () => {
  return (
    <div>
      <BannerContainer>
        <h1>Join Today</h1>
        <BannerContentContainer>
          <p style={{ width: "60%" }}>
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like Netflix, Amazon Prime Video, Mubi, and Curiosity
            Stream.
          </p>
          <ul style={{ width: "40%" }}>
            <li> Enjoy 3SS ad free</li>
            <li>Maintain a personal watchlist</li>
            <li>
              Filter by your subscribed streaming services and find something to
              watch
            </li>
            <li>Log the movies and TV shows you've seen</li>
            <li>Build custom lists</li>
          </ul>
        </BannerContentContainer>
        <PrimaryButton>Go to Watchlist</PrimaryButton>
      </BannerContainer>
    </div>
  );
};

export default Banner;
