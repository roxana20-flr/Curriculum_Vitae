import "./DescriptionMyWork.css";
import img7 from "./img7.jpg";


    
          
function DescriptionMyWork() {
    return(
        <div>
        <div className="DescriptionMyWork">
            <div className="DescriptionMyWork1 col-6">
            <img src={img7} />
        </div> 
        <div className="DescriptionMyWork1 col-6">
            <p className="DescriptionMyWorkText">Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.</p>
        </div> 
        </div>  
        </div>
     );
 };
    
  
  
  export default DescriptionMyWork;