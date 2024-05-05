import React from 'react'
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <>
     <div className=" m-5">
      <div className="row m-3">
        <div className="col-md-6 col-lg-6 col-sm-12 col-12 text-center text-light">
        <h1><span>WHAT THEY</span> SAY ABOUT US</h1>
        <p>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved
          my ideal body!
        </p>
        <p>MATHEW HENDRICKSON- <span>ENTREPRENEUR</span></p>
      </div>
       <div className="col-md-6 col-lg-6 col-sm-12 col-12">
           <img src="./images/img2.jpg" alt=""  className='img-fluid img2'/>
       </div>
     </div>
     </div>
     <div className="row  bg-secondary p-3">
      <div className="col-md-6 col-lg-6 col-sm-12 col-12">
      <h1 className='text-light heading'><span className='text-info'>READY TO</span> LEVEL UP YOUR BODY<span className='text-info'> WITH US?</span></h1>
     </div>
    
    <div className="col-sm-12 col-lg-6 col-md-6 col-12">
     
      <input type="email" name="email" placeholder='Enter your Email Address her'  className='mx-2 px-3 py-0.5'  /><a href="" className='btn btn-danger px-3 py-1 mb-1.2'>Join Now</a>
    </div>
     <div className="row container link">
      <ul>
        <li> <i class="fa-brands fa-github fs-4"></i></li>
        <li><i class="fa-brands fa-instagram fs-4"></i></li>
        <li><i class="fa-brands fa-linkedin fs-4"></i></li>
    </ul>
    </div>
    </div>
   
</>
  )
}

export default Testimonials;
