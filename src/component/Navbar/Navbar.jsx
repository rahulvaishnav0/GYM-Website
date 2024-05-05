import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid text-light">
    <img src="./images/logo.png" alt=""id="img" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#programs">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#whyus">Why Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#plans">Plans</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#tasimonials">Tastimonials</a>
        </li>
       
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </header>
      
    </>
  )
}

export default Navbar;