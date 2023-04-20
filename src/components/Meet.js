import React, { useState } from 'react';
import "../Styling/Meet.css";
import footer from "../images/footer-img.png";

const Meet = () => {
  const [query, setQuery] = useState(""); // State to store the user's query

  // Function to handle query submission
  const handleQuerySubmit = async () => {
    try {
      // Send query data to backend server for saving in MongoDB Atlas
      const response = await fetch('http://localhost:4000/app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      if (response.ok) {
        console.log('Query saved successfully:', query);
        // Reset the input field after successful submission
        setQuery("");
      } else {
        console.error('Failed to save query:', query);
      }
    } catch (error) {
      console.error('Failed to save query:', error);
    }
  }

  return (
    <div id="footer">
        <div class="title-text">
          <p>CONTACT</p>
          <h1>Visit Shop Today</h1>
        </div>
        <div class="footer-row">
          <div class="footer-left">
            <h1>Opening Hours</h1>
            <p><i class="far fa-clock"></i> Monday to Friday - 9am to 9pm</p>
            <p><i class="far fa-clock"></i> Saturday to Sunday - 8am to 11am</p>
          </div>
          {/* <div class="footer-right">
            <h1>Get in Touch</h1>
            <p>abc colony, abc city IN <i class="fas fa-map-signs"></i></p>
            <p>abcexample@gmail.com <i class="fas fa-paper-plane"></i></p>
            <p>+91 9068003323 <i class="fas fa-mobile"></i></p>
          </div> */}
        </div>

      <div className="query-form">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          className="query-input"
        />
        <button onClick={handleQuerySubmit} className="submit-btn">Submit Query</button>
      </div>
    </div>
  )
}

export default Meet;
