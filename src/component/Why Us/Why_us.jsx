import React from 'react'
import "./Why_us.css";
const Why_us = () => {
  return (
    <>
        <div className=" m-5">
      <div className="row box">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
           <img src="./images/pic2.jpg" alt="" className='img-fluid img1 m-2' />
           <img src="./images/pic3.jpg" alt="" className='img-fluid img2 m-2'/>
          
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <h1 className='text-center text-light'><span className='text-info'>WHY</span> CHOOSE US? </h1>
        <ul className="text-center text-light list-style-none list-unstyled py-2 m-2">
          <li>OVER 140+ EXPERT COACHS</li>
          <li>TRAIN SMARTER AND FASTER THAN BEFORE</li>
          <li>1 FREE PROGRAMS FOR NEW MEMEBER</li>
          <li>RELIABLE PARTNERS</li>
        </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default Why_us
