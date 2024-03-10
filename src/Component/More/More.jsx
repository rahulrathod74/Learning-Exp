import React from 'react'
import "./more.css"
import video from "../../assets/video.png"
import next from "../../assets/next.svg"
import Program from '../Program/program'
const More = () => {
  return (
    <>
    <div className=' learn'>
        <h2>Why Us</h2>
        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals Join Us Today and  Embark On A Journey Of Discovery,Grouth, And Success</p>
    </div>
    <div className='deatils'>
        <div className='deatils1'>
        <img src={video} alt="" />
                <div className="next">
                <img  src={next} alt="" />
                </div>

        </div>
        <div className='deatils2'>
            <h2>Crafting Your Dream Career: Building a Path You Love with us</h2>
            <p>At Learning Exp.We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals.Join Us Today And Embark On A Journey Of Discovery,Growth And Success.
            </p>
            <p className='para'>Our Platfrom Is Designed To Empower Learners Like You TO Excel in Today's Dynamic World</p>
            <a href="#">Get More</a>
        </div>
    </div>
    <Program/>
    </>
  )
}

export default More