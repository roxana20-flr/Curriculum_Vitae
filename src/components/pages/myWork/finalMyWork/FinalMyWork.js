import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./FinalMyWork.css";

function FinalMyWork() {
    return (
      <ParallaxProvider>
      <Parallax className='FinalMyWork' >
        <div className="layerFinalMyWork">
            <div className="finalmywork">
                <h1 className="titluFinalMyWork">Final My Work</h1>
                <p className="textFinalMyWork">To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting the IMAGE_INLINE_SIZE_LIMIT environment variable as documented in our advanced configuration.
                </p>
            </div>
        </div>
  </Parallax>
  </ParallaxProvider>
    );
  }
  
  export default FinalMyWork;