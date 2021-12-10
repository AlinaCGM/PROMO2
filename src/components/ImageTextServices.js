import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './ImageTextServices.css';
import 'bootstrap/dist/css/bootstrap.css';

// import FadeInSection from './FadeInSection';

function ImageTextServices() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <div id="" className=" AboutP-container flex ">


    <div class="row pictures justify-content-center ">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img1  ">  </div> 
                          <div class="col-12 col-md-6 col-lg-6 colum-about  ">
                                           <p className="informationServices-about text-center">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                           Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                                            Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
                                            Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
                                             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
                                             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.
                                             </p>  
           
                          </div>  
                          <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img2  ">  </div> 
                          <div class="col-12 col-md-6 col-lg-6 colum-about  ">
                                           <p className="informationServices-about text-center">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                           Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                                            Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
                                            Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
                                             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
                                             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.
                                             </p>  
           
                          </div>  
                          <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img3  ">  </div> 
                          <div class="col-12 col-md-6 col-lg-6 colum-about  ">
                                           <p className="informationServices-about text-center">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                           Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                                            Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
                                            Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
                                             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
                                             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.
                                             </p>  
           
                          </div>  
                          <div class="col-12 col-md-6 col-lg-6 col-xl-6 colum-about colum-img4  ">  </div> 
                          <div class="col-12 col-md-6 col-lg-6 colum-about  ">
                                           <p className="informationServices-about text-center">
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                           Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
                                            Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
                                            Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
                                             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
                                             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.
                                             </p>  
           
                          </div>  








                </div>
       
    </div>
         
         
        );
      }
     
       
 
  
export default ImageTextServices;
