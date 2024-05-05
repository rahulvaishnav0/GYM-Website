import React from 'react'
import "./Programs.css";
const Programs = () => {
  return (
    <>
       <h1 className='text-center m-3 text-light'><span className='text-info'>EXPLORE OUT</span> PROGRAMS <span className='text-info'>TO SHAPE YOU</span> </h1>
        <div className="row  my-3 text-light mt-5">
       
  <div class="col-mb-4 mb-sm-12 col-lg-3 col-12 ">
    <div class="card m-2 text-light box1">
      <div class="card-body">
      <i class="fa-solid fa-dumbbell m-2 fs-2"></i>
        <h5 class="card-title m-2">Strength Training</h5>
        <p class="card-text m-2">In this program, you are trained to improve your strength through many exercises.</p>
        <a href="#" class="btn btn-primary m-1 ">Join Now <i class="bi bi-arrow-right"></i> </a>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-mb-4 col-lg-3 col-12">
    <div class="card m-2 text-light box1">
      <div class="card-body">
      <i class="fa-solid fa-person-running m-2 fs-2"></i>
        <h5 class="card-title ">Cardio Training</h5>
        <p class="card-text ">In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
        <a href="#" class="btn btn-primary m-1">Join Now <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>

  <div class="col-sm-12 col-mb-4 col-lg-3 col-12">
    <div class="card  m-2 text-light box1">
      <div class="card-body">
      <i class="fa-solid fa-fire m-2 fs-2"></i>
        <h5 class="card-title">Fat Burning</h5>
        <p class="card-text">This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
        <a href="#" class="btn btn-primary">Join Now <i class="bi bi-arrow-right"></i> </a>
      </div>
    </div>
  </div>

  <div class="col-sm-12 col-mb-4 col-lg-3 col-12">
    <div class="card m-2 text-light box1">
      <div class="card-body">
      <i class="fa-solid fa-heart-pulse m-2 fs-2"></i>
        <h5 class="card-title">Health Fitness</h5>
        <p class="card-text ">This Program is designed for those who exercises only for their body fitness not body builiding.</p>
        <a href="#" class="btn btn-primary m-1">Join Now <i class="bi bi-arrow-right"></i> </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Programs;
