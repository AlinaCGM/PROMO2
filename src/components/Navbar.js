
  
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
//  import Button from "./Button";



function Navbar() {

  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  

  useEffect(() => {
    if (window.innerWidth < 1100) {
      setMobile(true);
    }
  }, []);
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100
        ) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };
    const changeBackground = () => { 
      if (window.scrollY >= 600) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    window.addEventListener("scroll", changeBackground);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div className="navbar-container">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaPiedPiper />
          LOGO
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {/* {!mobile && <Button />} */}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button onClick={() => setSidebar(false)} /> */}
      </div>
      </div>
    </>
  );
}

export default Navbar;









// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);
  
//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">
//           Ayurvilla
//           <Icons.FaTree />
//         </Link>
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;