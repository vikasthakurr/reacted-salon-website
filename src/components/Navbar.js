import React from "react";
import "../Styling/Navbar.css";
import { Link } from "react-router-dom";

export default function Nav() {

   return (
      <div className="navbar">
         {/* <div className="logo">Barber</div> */}
         <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/feature">Feature</Link>
            <Link to="/service">Service</Link>
            <Link to="/review">Testimonials</Link>
            <Link to="/meet">Meet Us</Link>
            {/* <Link to="/signup">Signup</Link> */}
         </ul>
      </div>
   );

}