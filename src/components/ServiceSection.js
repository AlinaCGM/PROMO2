import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceSection.css';
import './Button.css';
import Button from './Button';
// import FadeInSection from "./FadeInSection";



const ServiceSection = () => {
  return ( 
    // <FadeInSection>
    <div class="cont-services icon-box" >
    
    <div class="row align-items-center ">
    <div className="col-12  col-md-6 col-lg-3  d-flex justify-content-between "> 
<Card className="first col "  > 
     <img className="img_first one" src="../images/11.png" path="/about" alt=""/>
  <Card.Body >
    <h2 className="title_services">SERVICE 1</h2>
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button/> 
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first two" src="../images/22.png" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">SERVICE 2</h2>
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first three" src="../images/33.png" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">SERVICE 3</h2> 
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

     <div className="col-12  col-md-6 col-lg-3 d-flex justify-content-between"> 
<Card className="first col"  >
<img className="img_first four" src="../images/44.png" path="/about" alt=""/>
  <Card.Body>
    <h2 className="title_services">SERVICE 4</h2>
    <p className="title_content">Lorem ipsum dolor sit amet,</p>
  </Card.Body>
  <Button/>
</Card>
     </div>

       </div>
       </div>
    //   {/* </FadeInSection>   */}
  );
};

export default ServiceSection;
 