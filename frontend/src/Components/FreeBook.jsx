import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookList from "../../public/BookList.json";
import { BookCard } from "./BookCard";
export const FreeBook = () => {
  // for a responsive slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const freeBooks = BookList.filter((book) => book.category === "free");
  // console.log(freeBooks);
  return (
    <>
      <div className="max-w-screen-2xl containner mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-2xl font-bold pb-2 ">Free Books </h1>
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            modi assumenda corrupti rem maiores tempore itaque ipsum, sunt
            blanditiis ipsa sit amet consectetur adipisicing elit. Consectetur
            modi assumenda corrupti ?
          </p>
        </div>
        {/* react-slick for slider */}
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {freeBooks.map((item) => (
                // Passing free book data to BookCard through  props
                <BookCard item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
