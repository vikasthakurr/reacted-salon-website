import React from 'react';
import "../Styling/Review.css";
import photo from "../images/main.png";

const Review = () => {
  return (
   <div className="main-review">
     <div id="testimonial">
        <div className="title-text">
           <p>TESTIMONIAL</p>
           <h1>What Client Says</h1>
        </div>
        <div className="testimonial-row">
           <div className="testimonial-col">
              <div className="user">
                 <img src={photo}></img>
                    <div className="user-info">
                       <h4>Abc <i className="fab fa-twitter"></i></h4>
                       <small>@abc</small>
                    </div>
              </div>
                 <p>As someone who recently visited a hair salon, I am thrilled to share my positive experience! From the moment I walked in, I was impressed by the warm and inviting atmosphere. The salon was clean, well-organized, and had a trendy vibe.</p>
           </div>
           <div className="testimonial-col">
              <div className="user">
                 <img src={photo}></img>
                    <div className="user-info">
                       <h4>abcd<i className="fab fa-twitter"></i></h4>
                       <small>@abcd</small>
                    </div>
              </div>
                 <p>As someone who recently visited a hair salon, I am thrilled to share my positive experience! From the moment I walked in, I was impressed by the warm and inviting atmosphere. The salon was clean, well-organized, and had a trendy vibe.</p>
           </div>
           <div className="testimonial-col">
              <div className="user">
                 <img src={photo}></img>
                    <div className="user-info">
                       <h4>abcde<i className="fab fa-twitter"></i></h4>
                       <small>@abcde</small>
                    </div>
              </div>
                 <p>As someone who recently visited a hair salon, I am thrilled to share my positive experience! From the moment I walked in, I was impressed by the warm and inviting atmosphere. The salon was clean, well-organized, and had a trendy vibe.</p>
           </div>
        </div>
     </div>
     </div>
  )
}

export default Review;