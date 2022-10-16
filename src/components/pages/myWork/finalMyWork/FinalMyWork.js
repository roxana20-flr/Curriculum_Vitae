import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./FinalMyWork.css";

function FinalMyWork() {
    return (
      <ParallaxProvider>
      <Parallax className='FinalMyWork' >
        <div className="layerFinalMyWork">
            <div className="finalmywork">
                <h1 className="titluFinalMyWork">Thoughts</h1>
                <div>
                <p className="textFinalMyWork">Thomas Edison: “Opportunity is missed by most people because it is dressed in overalls and looks like work.” </p>
                <p className="textFinalMyWork">Steve Jobs: “The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.”</p>
                <p className="textFinalMyWork">Roxana Florina Savu: “...”</p>
                </div>
            </div>
        </div>
  </Parallax>
  </ParallaxProvider>
    );
  }
  
  export default FinalMyWork;