import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./HeaderMyWork.css";

function HeaderMyWork() {
    return (
      <ParallaxProvider>
      <Parallax className='HeaderMyWork' >
      <div className="line"></div>
        <h1 className="headermywork">My Work</h1>
  </Parallax>
  </ParallaxProvider>
    );
  }
  
  export default HeaderMyWork;