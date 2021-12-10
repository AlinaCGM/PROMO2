import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageSlide.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,  
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="slider-container ">
  
      <div className="image-slider ">
         
        <Slider {...settings}>
          <div>
          <img className=" img-y" src="../images/hero1_adobespark.jpeg"  path="/about" alt=""/>
          </div>
          <div>
          <img className=" img-y" src="../images/hero2_adobespark.jpeg"  path="/about" alt=""/>
          </div>
          <div>
          <img className=" img-y" src="../images/hero3_adobespark.jpeg"  path="/about" alt=""/>
          </div>
          <div>
          <img className=" img-y" src="../images/hero4_adobespark.jpeg"  path="/about" alt=""/>
          </div>
          <div>
          <img className=" img-y" src="../images/hero7_adobespark.jpeg"  path="/about" alt=""/>
          </div>
          <div>
          <img className=" img-y" src="../images/hero6.jpeg"  path="/about" alt=""/>
          </div>
        
        </Slider>
      </div>
      </div>
    );
  }
}