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
            <p className="DescriptionMyWorkText">Programming is the process of creating a set of instructions that tell a computer how to perform a task. So you have to be careful what are the instructions given to a computer.</p>
        </div> 
        </div>  
        </div>
     );
 };
    
  
  
  export default DescriptionMyWork;