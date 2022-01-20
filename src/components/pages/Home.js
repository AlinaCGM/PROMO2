 import React from "react";
 import '../../App.css';
import HeroSection from '../Herosection.js';
import ServiceSection from '../ServiceSection.js';
import Massage from "../Massage";
import AboutSectionHome from "../AboutSectionHome";
import Footer from "../Footer";
import CardServicesYoga from "../CardServicesYoga";



function Home() {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <CardServicesYoga/>
    <AboutSectionHome/>
    <Massage/>
    <Footer/>
    </>
  );
}

export default Home;