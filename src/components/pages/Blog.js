import React from 'react';
import '../../App.css';
import BlogPage from '../BlogPage';
import HeroSection from '../Herosection.js';
import Footer from "../Footer";

 function Blog() {
  return (
  <div>
   <HeroSection/>
  <div className='blog' id="blog"></div>
  <BlogPage/>
  <Footer/>
  </div> 
  );
}

export default  Blog;