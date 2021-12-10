import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CardServices.scss";
import 'bootstrap/dist/css/bootstrap.min.css';



function CardServices() {
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

<div id="" className=" cardservices-box">

  <div className="blog-card ">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/k1.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li> 
        <li className="date">Aug. 24, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Lorem ipsum</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.

</p>
      <p className="read-more">
       
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/k2.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">July. 15, 2015</li>
       
      </ul>
    </div>
    <div className="description">
    <h1>Lorem ipsum</h1>
      {/* <h2>Opening a door to the future</h2> */}
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
</p>
    </div>
  </div>

  <div className="blog-card">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/k3.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">Aug. 24, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Lorem ipsum</h1>
      {/* <h2>Opening a door to the future</h2> */}
     
      <p className="read-more">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo">
      <img className="img-cs" src="../images/k4.jpg"  path="/about" alt=""/>
      </div>
      <ul className="details">
        <li className="author"></li>
        <li className="date">July. 15, 2015</li>
       
      </ul>
    </div>
    <div className="description">
      <h1>Lorem ipsum</h1>
      <h2>Java is not the same as JavaScript</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum 
      architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
      
      </p>
    </div>
  </div>



</div>
     
     
    );
  }
 
   
  export default CardServices;
