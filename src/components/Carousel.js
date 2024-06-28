import React from 'react'
// import { Slide } from '@mui/material'
import Slider from 'react-slick'
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const slides = [
"https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/33b18a7f89c9e0fa.jpeg?q=20",
"https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/735a1bcdc59fef62.jpeg?q=20",
"https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/37ecb61b2e6e4020.jpeg?q=20",
"https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/e3937758c5b115b7.png?q=20",
"https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/735a1bcdc59fef62.jpeg?q=20"
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 100,
    autoplaySpeed: 2000,
    cssEase: "ease-out"
  };

  return (
    <>
      <Slider
        {...settings}
        className='slider'
      >
        {slides.map((slide, index) => (
          // <div key={index}>{slide}</div>
          <img className='carousel-image' src={slide} />
        ))}
      </Slider>
    </>
  )
}

export default Carousel