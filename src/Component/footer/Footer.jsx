import React from 'react'
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import linkden  from "../../assets/linden.svg"
import p from "../../assets/p.svg"
import "./footer.css"
const Footer = () => {
  return (
    <>
    <footer className='main-footer'>
    <div className='contact'>
        <div className='us'>
            <h3>Contact Us!</h3>
            <p>There are many variation of passages of Lorem Ipsum but the majority have suffered alteration</p>
        </div>
        <div className='email'>
            <input type="text" placeholder='Email'/>
            <div className='send'>
                <button>Send</button>
            </div>
        </div>
    </div> 
        <div className="footer">
            <div>
                <div className=' flex'>
                <img src={logo} alt="" />
                <h1>Learning Exp.</h1>
                </div>
                <div className='midea'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkden} alt="" />
                    <img src={p} alt="" />
                </div>
            </div>
            <ul>
                <p>LIkes</p>
                <li>Home</li>
                <li>Pricing</li>
                <li>Download</li>
                <li>About</li>
                <li>Service</li>
            </ul>
            <ul>
                <p>Support </p>
                <li> FAQ</li>
                <li>How it</li>
                <li>Features</li>
                <li>Contact </li>
                
            </ul>
            <ul>
                <p>contact Us </p>
                <li>+88012345678</li>
                <li>youremail@gmail.co pune city</li>
            </ul>
        </div>
        <div className='last'>
            <p>Copyright & Design by @Learning Exp.</p>
            <p>Terms of Use | Privacy Policy</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;