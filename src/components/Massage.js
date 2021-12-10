import React, { Component } from "react";
import Slider from "react-slick";
import "./Massage.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Massage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (  
      <div className="massage-container"> 
  
        <Slider {...settings}>
        <div> <img className="img-m" src="../images/m1.jpg" path="/about"alt=""/> </div>
          <div> <img className="img-m" src="../images/m2.jpg" path="/about" alt=""/>  </div>
          <div><img className="img-m" src="../images/m3.jpg" path="/about" alt=""/> </div>
          <div><img className="img-m" src="../images/m4.jpg" path="/about" alt=""/> </div>
          <div><img className="img-m" src="../images/m5.jpg" path="/about" alt=""/></div>
          <div><img className="img-m" src="../images/m6.jpg" path="/about" alt=""/></div>
        </Slider>
      </div>
    );
  }
}