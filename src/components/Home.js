import React from 'react'
import "../Styling/Home.css";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="banner">
      <img src={logo} className="logo"></img>

        <div className="banner-text">
          <h1>Hair Studio</h1>
          <p>We are here to provide you the best treatment and caring for your lovely hair.</p>
          <div className="banner-btn">
          <Link to="/booking">Book Us</Link>
          <Link to="">Read More</Link>
          </div>
        </div>
    </div>
  )
}

export default Home;