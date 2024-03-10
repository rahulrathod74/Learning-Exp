import React from 'react'
import "./Program.css"
import batch from "../../assets/batch.svg"
import superide from "../../assets/superised.svg"
const program = () => {
  return (
    <>
    <div className='program-heading'>
    <h2>We Completed 1200+ Certification program Successfull & Counting</h2>
        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals Join Us Today and  Embark On A Journey Of Discovery,Grouth, And Success</p>
    </div>
    <div className=' batch'>
        <div className='batch1'>
            <i class="fa-solid fa-circle-check"></i>
            <div className='tick take'>
            <h3>100+</h3>
            <p>Batch Complete</p>
            </div>
        </div>
        <div className='batch2'>
            <img src={batch} alt="" />
            <div className='tick'>
            <h3>50+</h3>
            <p>Batch Complete</p>
            </div>
        </div>
        <div className='batch3'>
            <img src={superide} alt="" />
            <div className='tick'>
            <h3>10,000+</h3>
            <p>Batch Complete</p>
            </div>
        </div>
        <div className='batch4'>
            <img src={superide} alt="" />
            <div className='tick'>
            <h3>10+</h3>
            <p>Batch Complete</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default program;