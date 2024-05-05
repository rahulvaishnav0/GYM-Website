import React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./component/Home/Home.jsx";
import Navbar from './component/Navbar/Navbar.jsx';
import Why_us from './component/Why Us/Why_us.jsx';
import Programs from './component/Programs/Programs.jsx';
import Testimonials from './component/Testimonials/Testimonials.jsx';
import Plans from './component/Plans/Plans.jsx';

function App () {
  return (
    <>
      <Navbar />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/programs" element={<Programs/>} />
      <Route path="/whyus" element={<Why_us/>} />
      <Route path="/plans" element={<Plans/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
     </Routes>
     
     </BrowserRouter> 
    </>
  )
}

export default App;
