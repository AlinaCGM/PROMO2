import React from 'react';
import '../App.css';
import './MyGallery.css'
import Card from 'react-bootstrap/Card';
// import FadeInSection from "./FadeInSection";
import 'bootstrap/dist/css/bootstrap.css';


export default function MyGallery() {
  return (
        // <FadeInSection>
    <div className="mygallery" id="mygallery">
    <div className="text-center fs-1 pb-5">GALLERY</div>
       <div className="row  m-5 "> 
       
       
            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g1.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g2.jpg" alt="image1" />
              </Card>
               </div>

               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g3.jpg" alt="image1" />
              </Card>
            </div>
         
            <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g4.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g5.jpg" alt="image1" />
            </Card>
               </div>


               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g6.jpg" alt="image1" />
              </Card>
            </div>
            

            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g7.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g8.jpg" alt="image1" />
              </Card>
               </div>

               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g9.jpg" alt="image1" />
              </Card>
            </div>
         
            <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g10.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g11.jpg" alt="image1" />
            </Card>
               </div>


               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g12.jpg" alt="image1" />
              </Card>
            </div>
            
            </div>
        </div> 
        // {/* </FadeInSection> */}
        
  
    );
  }

