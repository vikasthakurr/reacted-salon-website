import React from 'react';
import "../Styling/Feature.css";
import barber from "../images/barber-man.jpg"

const Feature = () => {
  return (
    <div className="Feature-box">
      <div className="title-text">
        {/* <p>FEATURES</p> */}
        <h1>Why you choose Us</h1>
      </div>
      <div className="feature-box">
        <div className="features">
          <h1>Experienced Staff</h1>
          <div className="features-desc">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-text">
              <p>We got the best staff in the town to take care of your beautifull hair. We have vast Experienced hair stylist.</p>
            </div>
          </div>

          <h1>Pre Booking Online</h1>
          <div className="features-desc">
            <div className="feature-icon">
              <i className="fas fa-check-square"></i>
            </div>
            <div className="feature-text">
              <p>You can pre book your appoitment from home according to your convineance.</p>
            </div>
          </div>

          <h1>Affordable Cost</h1>
          <div className="features-desc">
            <div className="feature-icon">
              <i className="fas fa-rupee-sign"></i>
            </div>
            <div className="feature-text">
              <p>We provide our service at very reasonable price so you can give a treat to your hair without thinking twice.</p>
            </div>
          </div>
        </div>
        <div className="features-img">
          <img src={barber} alt=""></img>
        </div>
      </div>
    
    </div>
  )
}

export default Feature;