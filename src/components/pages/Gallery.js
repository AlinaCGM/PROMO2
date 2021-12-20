import React from 'react';
import '../../App.css';
import MyGallery from "../MyGallery";
import Massage from "../Massage";
import HeroSection from '../Herosection.js';
import Footer from "../Footer";

 function Services() {
  return (
  <div>
   <HeroSection/>
  <div className='gallery' id="gallery"></div>
  <MyGallery/>
  <Massage/>
  <Footer/>
  </div> 
  );
}

export default Services; 