import React from "react";
import "./Plans.css";
const Plans = () => {
  return (
    <>
      <h1 className="text-center text-light m-3">
        <span className="text-info">READY TO START</span> YOUR JOURNEY
        <span className="text-info">NOW WITHUS</span>
      </h1>
      <div className=" py-2">
        <div className="row m-2">
          <div className="col-sm-12 col-md-6 col-lg-4 col-12">
          <div class="card box-card">
            <div class="card-body text-light">
            <i class="fa-solid fa-heart-circle-check py-2 fs-1"></i>
              <h5 className="card-title fs-3 ">BASIC PLAN</h5>
              <h4 className="py-2 fs-2">$ 25</h4>
              <ul class="list-unstyled m-2 py-2 fs-5">
              <i class="fa-solid fa-circle-check"></i> <li className="">2 hours of excercies</li>
              <i class="fa-solid fa-circle-check"></i> <li className="">Free consultaion to coaches</li>
              <i class="fa-solid fa-circle-check"></i>   <li>Access to The Community</li>
                </ul>
              <p class="text-center ">See more benefits <i class="bi bi-arrow-right"></i> </p>
              <a href="#" class="btn btn-danger">
                Join Now
              </a>
            </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 col-12">
          <div class="card box-card">
            <div class="card-body text-light">
            <i class="fa-solid fa-crown py-2 fs-1"></i>
              <h5 className="card-title fs-3">BASIC PLAN</h5>
              <h4 className="py-2 fs-2">$ 25</h4>
              <ul class="list-unstyled m-2 py-2 fs-5">
              <i class="fa-solid fa-circle-check"></i> <li className="">2 hours of excercies</li>
              <i class="fa-solid fa-circle-check"></i> <li className="">Free consultaion to coaches</li>
              <i class="fa-solid fa-circle-check"></i>   <li>Access to The Community</li>
                </ul>
              <p class="text-center ">See more benefits <i class="bi bi-arrow-right"></i> </p>
              <a href="#" class="btn btn-danger">
                Join Now
              </a>
            </div>
            </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-12">
          <div class="card box-card">
            <div class="card-body text-light">
            <i class="fa-solid fa-dumbbell py-2 fs-1"></i>
              <h5 className="card-title fs-3">BASIC PLAN</h5>
              <h4 className="py-2 fs-2">$ 25</h4>
              <ul class="list-unstyled m-2 py-2 fs-5">
              <i class="fa-solid fa-circle-check"></i> <li className="">2 hours of excercies</li>
              <i class="fa-solid fa-circle-check"></i> <li className="">Free consultaion to coaches</li>
              <i class="fa-solid fa-circle-check"></i>   <li>Access to The Community</li>
                </ul>
              <p class="text-center ">See more benefits <i class="bi bi-arrow-right"></i> </p>
              <a href="#" class="btn btn-danger">
                Join Now
              </a>
            </div>
       </div>
      </div>
      </div>
      </div>
   </>
  );
};

export default Plans;
