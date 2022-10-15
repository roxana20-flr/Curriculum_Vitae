import HeaderMyWork from "./headerMyWork/HeaderMyWork";
import ProjectsMyWork from "../myWork/projectsMyWork/ProjectsMyWork";
import "./MyWork.css";


    
          
function MyWork() {
    return(
        <div className="MyWork">
            <HeaderMyWork />
            <ProjectsMyWork/>
        </div>
     );
 };
    
  
  
  export default MyWork;