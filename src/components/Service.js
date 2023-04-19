import React from 'react'
import "../Styling/Service.css";
import { Link } from "react-router-dom";
import photos1 from "../images/pic-1.jpg";
import photos2 from "../images/pic-2.jpg";
import photos3 from "../images/pic-3.jpg";
import photos4 from "../images/pic-4.jpg";

const Service = () => {
    return (
        <div className="main-box">
            <div className="title-text">
                <p>SERVICES</p>
                <h1>We Provide Best In Town</h1>
            </div>
            <div className="service-box">
                <div className="single-service">
                    <img src={photos1} alt=''></img>
                    <div className="ovrelay"></div>
                    <div className="services-desc">
                        <h3>Hair Styling</h3>
                        <hr></hr>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas aspernatur unde quidem. Consectetur facere eveniet quo, at aperiam sit ipsa assumenda asperiores earum placeat repellendus? Et ipsam sapiente molestiae!</p>
                        <Link to="/booking">Book Us</Link>

                    </div>
                </div>
                <div className="single-service">
                    <img src={photos2} alt=''></img>
                    <div className="ovrelay"></div>
                    <div className="services-desc">
                        <h3>Beard trimming</h3>
                        <hr></hr>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas aspernatur unde quidem. Consectetur facere eveniet quo, at aperiam sit ipsa assumenda asperiores earum placeat repellendus? Et ipsam sapiente molestiae!</p>
                        <Link to="/booking">Book Us</Link>
                    </div>
                </div>

                <div className="single-service">
                    <img src={photos3} alt=''></img>
                    <div className="ovrelay"></div>
                    <div className="services-desc">
                        <h3>Hair Cut</h3>
                        <hr></hr>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas aspernatur unde quidem. Consectetur facere eveniet quo, at aperiam sit ipsa assumenda asperiores earum placeat repellendus? Et ipsam sapiente molestiae!</p>

                        <Link to="/booking">Book Us</Link>
                    </div>

                </div>

                <div className="single-service">
                    <img src={photos4} alt=''></img>
                    <div className="ovrelay"></div>
                    <div className="services-desc">
                        <h3>Dry Shampoo</h3>
                        <hr></hr>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas aspernatur unde quidem. Consectetur facere eveniet quo, at aperiam sit ipsa assumenda asperiores earum placeat repellendus? Et ipsam sapiente molestiae!</p>

                        <Link to="/booking">Book Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;