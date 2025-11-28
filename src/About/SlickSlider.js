import React from "react";
import Slider from "react-slick";
import img1 from '../images/kitchen.png';
import img2 from '../images/chair.png';
import img3 from '../images/cupboard.png';
import img4 from '../images/workspace.png';
import img5 from '../images/sofa.png';
import img6 from '../images/furniture.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        <div><img src={img1} alt="1" /></div>
        <div><img src={img2} alt="2" /></div>
        <div><img src={img3} alt="3" /></div>
        <div><img src={img4} alt="4" /></div>
        <div><img src={img5} alt="4" /></div>
        <div><img src={img6} alt="4" /></div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
