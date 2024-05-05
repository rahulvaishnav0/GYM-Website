import React from 'react'
import './Home.css';
import Programs from '../Programs/Programs';
import Whyus from '../Why Us/Why_us';
import Plans from '../Plans/Plans';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 text-light">
        <h1><span className='text-info'>SHAPE</span> YOUR IDEAL BODY</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis?</p> 
      <button className='btn mx-2 btn-info'>Get Started</button> 
      
      <button className='btn btn-outline-light  mx-2'>Learn More</button>

        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
          <img src="../images/img2.png" alt="" className='img' />
        </div>
        </div>
      </div>
      <Programs/>
      <Whyus/>
      <Plans/>
      <Testimonials/>
    </>
  )
}

export default Home;
