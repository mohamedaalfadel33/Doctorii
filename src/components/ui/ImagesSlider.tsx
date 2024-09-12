"use client";
import Image from "next/image";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const CardDetails = [
  {
    image: "/dental.png",
    title: "Teeth Cleaning",
    oldPrice: 30000,
    newPrice: 15000,
    discount: 50,
  },
  {
    image: "/dental.png",
    title: "Ear Cleaning",
    oldPrice: 30000,
    newPrice: 17500,
    discount: 40,
  },
  {
    image: "/dental.png",
    title: "Facial Cleaning",
    oldPrice: 30000,
    newPrice: 19000,
    discount: 50,
  },
  {
    image: "/dental.png",
    title: "Vision Correction",
    oldPrice: 20000,
    newPrice: 11000,
    discount: 50,
  },
];

const ImagesSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
  };
  return (
    <Slider {...settings}>
      {CardDetails.map((card) => (
        <div className="rounded-md bg-zinc-50 p-2" key={card.title}>
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-md"
              width={500}
              height={50}
              src={card.image}
              alt={card.title}
            />
            <p>{card.title}</p>
            <div className="flex gap-2 font-sans">
              <p className="text-zinc-400 line-through">{card.oldPrice} SDG</p>
              <p className="text-blue-400">{card.newPrice} SDG</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
