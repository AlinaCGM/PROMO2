import React from 'react';
import '../../App.css';
import AboutP from "../AboutP";
import HeroSection from '../Herosection.js';
import Footer from "../Footer";

export default function About() {
  return (
  <div>
   <HeroSection/>
  <div className='about' id="about"></div>
  <AboutP/>
  <Footer/>
  </div> 
  );
}


// export default About;