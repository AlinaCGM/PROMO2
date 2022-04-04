import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CardServicesYoga.css";
import 'bootstrap/dist/css/bootstrap.min.css';


 
function CardServicesYoga() {
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

<div id="" className=" cardservices2-box">
<div className="wrapper">
  <h1 className="yoga-title">SOME TITLE</h1>
  <div className="row">
			<div className="col-10  col-md-6 col-lg-4  d-flex justify-content-between mb-5 " ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > 
					<img className="services-2" src="../images/cs1.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Classic</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum dolor sit amet, consectetur </p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-10 col-md-6 col-lg-4  d-flex justify-content-between  mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" ><img className="services-2" src="../images/cs2.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-10 col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > <img className="services-2" src="../images/cs3.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-10  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" ><img className="services-2" src="../images/cs4.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-10  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front"> <img className="services-2" src="../images/cs5.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Rendann</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-10  col-md-6 col-lg-4  d-flex justify-content-between mb-5" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" > <img className="services-2" src="../images/cs6.jpg"  path="/about" alt=""/>
						<div className="inner">
							<p>Reflupper</p>
              <span>Lorem ipsum</span>
						</div>
					</div>

               

					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>



</div>
     
     
    );
  }
 
   
  export default CardServicesYoga;