import React from 'react';
import "../Styling/Review.css";
import photo from "../images/main.png";

const Review = () => {
  return (
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic exercitationem omnis eum a ab officiis, quisquam dolorum saepe ratione dolorem tempore! Repudiandae accusantium porro est eaque maiores neque atque maxime?</p>
           </div>
           <div className="testimonial-col">
              <div className="user">
                 <img src={photo}></img>
                    <div className="user-info">
                       <h4>abcd<i className="fab fa-twitter"></i></h4>
                       <small>@abcd</small>
                    </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio esse, numquam at dolorum architecto fuga illum.quisquam dolorum saepe ratione dolorem tempore! Repudiandae accusantium porro est eaque maiores neque atque maxime?</p>
           </div>
           <div className="testimonial-col">
              <div className="user">
                 <img src={photo}></img>
                    <div className="user-info">
                       <h4>abcde<i className="fab fa-twitter"></i></h4>
                       <small>@abcde</small>
                    </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum sit dolore quia, illo voluptate saepe aliquid quibusdam earum modi similique totam non consectetur et officiis porro ipsum labore cupiditate.</p>
           </div>
        </div>
     </div>
  )
}

export default Review;