import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import Contact from "./ContactUsForm";



function Footer() {
  return (
 
    <div className="footer-container" id="contact">

    {/* <div className='upper-line '>
    <img className="logo-brands" src="/images/11.png" path="/about" alt=""/> 
    <img className="logo-brands" src="/images/22.png" path="/about" alt=""/>
    <img className="logo-brands" src="/images/33.png" path="/about" alt=""/>
    <img className="logo-brands" src="/images/44.png" path="/about" alt=""/>
    </div> */}


{/* first row */}
    <div className="container">
  <div className="row ">

{/* col1 */}

    <div className="col footer-col ">
      <div className="footer-link-items">
            <h2 className="followUs">Följ oss</h2>
           <div> <a href="/" target="_blank" rel="noreferrer" >Facebook</a> </div>
           <div><a href="/" target="_blank" rel="noreferrer" >LinkedIn</a> </div>
           <div> <a href="/" target="_blank" rel="noreferrer" >Instagram</a> </div>
           <span className="social-icons">
             <a href="/" className="social-icon-link facebook" target="_blank" rel="noreferrer" ><i class="fab fa-facebook-square"></i></a>
             <a href="/" className="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin" /></a>
            <a href="/" className="social-icon-link linkedin" target="_blank" rel="noreferrer" ><i className="fab fa-instagram"></i></a> 
  </span>
    </div> 
    </div>


{/* col2 */}
    <div className="col footer-col d-flex justify-content-center">
     <div><img className="img_logo " src="../images/yogalogo.png" path="/about" alt=""/></div> 
    </div>





{/* col3 */}
    <div className="col footer-col text-center">
    <div>Adress :<br/>Vällingby 162 65 <br/>Vällingby Torg 1 </div> 
    <div><i className="fas fa-mobile-alt"> +46 000 000 000  </i> </div>
    <div><i className="far fa-envelope"> info@yogasalon.se</i>
    </div> 
    </div>
  </div>
</div>
  
{/* second row with 1 column */}
<div className="row second-row">
  <div className="col-12 d-flex justify-content-center ">
  <div className="website-rights ">
  <span className="span-lastRow "> © 2022.<a href="https://www.nextek.se/" class="nextek" target="_blank" rel="noreferrer" > Digital Magic by NexTek</a>
  
 </span> 
 </div>
</div>
</div>
  

    </div>
  
  );
};

export default Footer;
