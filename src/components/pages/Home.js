 import React from "react";
 import '../../App.css';
import HeroSection from '../Herosection.js';
import ServiceSection from '../ServiceSection.js';
import Massage from "../Massage";
// import BlogPage from '../BlogPage.js';
import AboutOks from "../AboutOks";
import Footer from "../Footer";
// import ImageSlide from "../ImageSlide";
import CardServicesYoga from "../CardServicesYoga";



function Home() {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <CardServicesYoga/>
    <AboutOks/>
    <Massage/>
    {/* <ImageSlide/> */}
    {/* <BlogPage/>   */}
    <Footer/>
    </>
  );
}

export default Home;