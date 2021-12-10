import React from 'react';
import '../../App.css';
import MyGallery from "../MyGallery";
import Massage from "../Massage";


 function Services() {
  return (
  <div>
  <h1 className='gallery' id="gallery">GALLERY</h1>
  <MyGallery/>
  <Massage/>
  
  </div> 
  );
}

export default Services; 