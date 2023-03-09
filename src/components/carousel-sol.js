import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function carouselSol() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    dots: true
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="mx-4">
          <div className="images my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>Solving the Plastic Problem with Comprehensive Tracking</h3>
            <p className='mb-4'>A comprehensive approach to tracking plastic waste at every stage of its journey using advanced technology like RFID and blockchain can prevent plastic from ending up in landfills or oceans, solving the plastic problem and promoting a cleaner environment.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-4">
          <div className="images my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>TNext-Generation Construction Panel for Modular, Sustainable Homes</h3>
            <p className='mb-4'>Our innovative construction panel enables modular, sustainable homes with easy dismantling and reassembly, reducing waste and promoting circular economy practices. It also allows for waterless construction and improves indoor air quality through data collection.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-4">
          <div className="images my-8">
            <div className="h-60 bg-gray-400 rounded"></div>
          </div>
          <div className="text-box">
            <h3 className='text-xl font-semibold mb-4'>Air Jacket for Energy-Efficient Home Temperature Control</h3>
            <p className='mb-4'>The air jacket uses conduction, convection, and radiation to transfer heat and maintain a consistent indoor temperature, reducing the need for energy-consuming heating and cooling systems. This innovative technology saves energy, lowers energy bills, and reduces the carbon footprint of the house.</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
