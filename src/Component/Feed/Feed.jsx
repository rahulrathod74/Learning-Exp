import React from 'react'
import "./feed.css"
import arrow from "../../assets/arrow.svg"
import guy from "../../assets/guy.png"
import star from "../../assets/star.svg"
const Feed = () => {
  return (
   <>
   <div className=' main-feed'>
        <div className='feed'>
            <h2>our Students Feedback</h2>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals Join Us Today and  Embark On A Journey Of Discovery,Grouth, And Success</p>
            
        </div>
        <div className='btn'>
            <button>Read More</button>
            <span><img src={arrow} alt="right-arrow" /></span>
        </div>
    </div> 
    <div className='main-container'>
        <div className='guy'>
            <img src={guy} alt="" />
        </div>
        <div>
            <div className='star'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p>sed Ut Perspiciatis Unde Omnis Natus Error Sit Voluptatem Accusantium Doloremque Laudantium,</p>
                <p>Totam Rem Aperiam,Eaque Ipsa Quae Illo</p>
                <h3>Raid Islam</h3>
                <h4>Product Manager <a href="#">Learning.com</a></h4>
            </div>
        </div>
    </div> 
   
   </>
  )
}

export default Feed