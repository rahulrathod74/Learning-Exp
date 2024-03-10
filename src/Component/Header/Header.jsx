import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import video from "../../assets/video.png"
import next from "../../assets/next.svg"
import Hero from "../Hero/Hero";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <div>
              <img src={logo} alt="site-logo" />
            </div>
            <h1>Learning Exp.</h1>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services Us</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Our Goals</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="mean">
            <div className="card1">
                <h2>We Creact Experice with excellent Technology</h2>
                <p>Unlimited Acces To 100+ World-Class Courses,Hands-On Projects,And Job-Ready Certificate Programs-
                    All Included Your Subscription
                </p>
                <div className="demo">
                <button>Book Demo Class</button>
                <a href="#"> Explore More &#8594;</a>
                </div>
            
            </div>
            <div className="card2">
                <img src={video} alt="" />
                <div className="next">
                <img  src={next} alt="" />
                </div>
            </div>
        </div> 
      </header>
     <Hero/>
     
    </>
  );
};

export default Header;
