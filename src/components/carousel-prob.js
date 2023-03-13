import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function carouselProb() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="mx-2 lg:mx-4">
          <div className="photo my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>Collected Plastic: Burnt, Buried, or Floating?</h3>
            <p className='mb-4'>Most collected plastic ends up being burnt, buried, or floating, releasing toxins, leaching chemicals, and posing a threat to marine life.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-2 lg:mx-4">
          <div className="photo my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>The Ecological Impact of Building a House</h3>
            <p className='mb-4'>Building a single house can lead to the depletion of natural resources such as wood, sand, stone, steel, and water, with devastating environmental consequences.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-2 lg:mx-4">
          <div className="photo my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>Glass and Concrete Buildings - Inefficient Human Habitats</h3>
            <p className='mb-4'>Most collected plastic ends up being burnt, buried, or floating, releasing toxins, leaching chemicals, and posing a threat to marine life.</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
