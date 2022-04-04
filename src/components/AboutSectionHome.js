import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AboutSectionHome.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutSectionHome() {
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

<div id="" className=" extrapage-container flex ">

 <div className='row com-row mx-auto'>
                                 <div className='col-12 col-md-6 colum-img-aboutSection mx-auto'> 
                                {/* <div> <img className="picture-about-section" src="../images/AP.jpg"  path="/about" alt=""/> </div> */}
                                 </div>


            <div className='col-12 col-md-6 colum-about-section'> 
             <p className="information-about-section ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
               Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
               Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.
             </p>  
           </div>
 </div>


{/* <div class="row pictures justify-content-center ">
            <div class="col-12  colum-img-aboutSection mx-auto">
            <img className="image-about-section" src="../images/AP.jpg"  path="/about" alt=""/> 
           </div> 
           <div class="col-12 colum-about-section  ">
           <p className="information-about-section ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Sed malesuada molestie nulla, vel hendrerit nulla suscipit sed.
            Donec diam leo, efficitur sit amet finibus ac, laoreet in est. 
            Maecenas at velit in diam eleifend iaculis. Vivamus sit amet justo commodo,
             rutrum ante et, suscipit magna. Ut ullamcorper eu augue a tempor. Phasellus 
             aliquet ex odio, eu ullamcorper enim molestie rhoncus. Donec et consequat velit.</p>  
       
           </div> 
</div> */}



</div>
     
     
    );
  }
 
   
  export default AboutSectionHome;
