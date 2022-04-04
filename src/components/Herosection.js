import React  from "react";
import "./Herosection.css";
import ImageSlide from "./ImageSlide";
import 'bootstrap/dist/css/bootstrap.min.css';



function  HeroSection () {
  
   
    return (
      <div className="hero-container" id="hero">
      
     
          <div>
          <ImageSlide/>
          <h1 className="hero-title"> WELCOME TO YOGA SALON
          </h1>
          
            </div>   
      
         
      </div>
    );
  }

  export default HeroSection;

