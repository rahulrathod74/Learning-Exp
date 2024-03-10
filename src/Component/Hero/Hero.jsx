import React from 'react'
import "./Hero.css"
import phone from "../../assets/phone.svg"
import dash from "../../assets/dash.svg"
import layout from "../../assets/layout.svg"
import More from '../More/More'
const Hero = () => {
  return (
    <>
    <div className=' learning'>
        <h2>We provide various kind of learning modules for you</h2>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A page When Looking At its Layout . the Point Of Using Lorem</p>
    </div>
    <div className='mean-card'>
        <div className='card1'>
            <img src={phone} alt="" />
            <h3>Learn Anything</h3>
            <p> It Is Long Establish Fast That A Reader Will Be Distracted By The Readable</p>
        </div>
        <div className=' midel'>
        <img src={dash} alt="" />
            <h3>Flexible Learning</h3>
            <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
        </div>
        <div className='card1'>
        <img src={layout} alt="" />
            <h3>Expert Connect</h3>
            <p>It Is Long Established Fast That A Reader Will Be Distracred By The Readable</p>
        </div>
    </div>
    <More/>
    </>
  )
}

export default Hero