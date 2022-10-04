import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  SliderContainer,
  CarouselCard,
  ImageContainer,
  ContentContainer,
  Tag,
  Title,
  ArrowContainer,
} from "../styles/Slider.styled";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

const ImageSlider = ({ slides }: any) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const categories: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/vod/category"
  );

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <ArrowContainer>
        <MdKeyboardArrowLeft
          style={{ height: "330px" }}
          size={60}
          onClick={prevSlide}
        />
      </ArrowContainer>

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <CarouselCard>
                <ImageContainer onClick={() => navigate(`/asset/${slide.id}`)}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${slide.backdrop_path}`}
                    alt="cover"
                  />
                </ImageContainer>
                <ContentContainer>
                  <div>
                    <Title onClick={() => navigate(`/asset/${slide.id}`)}>
                      {slide.original_title}
                    </Title>
                    {slide.genre_ids.map((genre: string) => {
                      return categories.data?.data.genres.map(
                        (category: Category) => {
                          if (category.id.toString() === genre.toString()) {
                            return (
                              <Tag
                                key={category.id}
                                onClick={() =>
                                  navigate(`/movies/${category.id}`)
                                }
                              >
                                {category.name}{" "}
                              </Tag>
                            );
                          } else {
                            return null;
                          }
                        }
                      );
                    })}
                  </div>
                  <p>{slide.overview.slice(0, 100)}...</p>
                  <p>
                    Rating: {slide.vote_average} ({slide.vote_count} votes)
                  </p>
                </ContentContainer>
              </CarouselCard>
            )}
          </div>
        );
      })}
      <ArrowContainer>
        <MdKeyboardArrowRight
          style={{ height: "330px" }}
          size={60}
          onClick={nextSlide}
        />
      </ArrowContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
