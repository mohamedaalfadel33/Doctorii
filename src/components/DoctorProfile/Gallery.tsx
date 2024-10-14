"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    // customPaging: function () {
    //   return (
    //     <a>
    //       <img alt="photo" src="/11d3429c7da31739097794d01edecca4.jpg" />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rounded-3xl bg-[#DADADB] p-6">
      <h2 className="mb-4 text-xl font-bold">Doctor Clinic</h2>
      <div className="slider-container px-10">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-3xl"
              src="/11d3429c7da31739097794d01edecca4.jpg"
              alt="Photo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/11d3429c7da31739097794d01edecca4.jpg"
              alt="Photo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/11d3429c7da31739097794d01edecca4.jpg"
              alt="Photo"
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="/11d3429c7da31739097794d01edecca4.jpg"
              alt="Photo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
