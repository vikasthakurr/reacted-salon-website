import React from 'react';
import "../Styling/Meet.css";
import footer from "../images/footer-img.png"

const Meet = () => {
  return (
    <div id="footer">
      <img src={footer} className="footer-img"></img>
        <div className="title-text">
          <p>CONTACT</p>
          <h1>Visit Shop Today</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Hours</h1>
            <p><i className="far fa-clock"></i> Monday to Friday - 9am to 9pm</p>
            <p><i className="far fa-clock"></i> Saturday to Sunday - 8am to 11am</p>
          </div>
          <div className="footer-right">
            <h1>Get in Touch</h1>
            <p>abc colony, abc city IN <i className="fas fa-map-signs"></i></p>
            <p>abcexample@gmail.com <i className="fas fa-paper-plane"></i></p>
            <p>+91 9068003323 <i className="fas fa-mobile"></i></p>
          </div>
        </div>

        <div className="social-links">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-telegram"></i>
          <p><i className="far fa-copyright"></i> Made By Vikas thakur for front-End CA</p>
        </div>

    </div>
  )
}

export default Meet;