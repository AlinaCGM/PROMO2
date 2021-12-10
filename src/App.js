import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
// import {Switch} from "react-router"
import Navbar from "./components/Navbar";
// import Logo from "./components/Logo";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Gallery from "./components/pages/Gallery";
// import Booking from "./components/pages/Booking";
import Services from "./components/pages/Services.js";


function App() {
  return (
    <>
      <Router>
       {/* <Logo/> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Routes>

      </Router>
    </>
  );
}

export default App;
