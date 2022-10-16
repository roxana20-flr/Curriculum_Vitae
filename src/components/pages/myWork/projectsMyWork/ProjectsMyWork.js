import "./ProjectsMyWork.css";
import { Link } from 'react-router-dom';
import { ProjectsMyWorkData } from './ProjectsMyWorkDate';


    
          
function ProjectsMyWork() {
    return(
        <div >
            {ProjectsMyWorkData.map((item, index) => {
                return (
                    <div className="ProjectsMyWorkText  ProjectsMyWork" key={index}  >
                       <div> 
                            <p>{item.title}</p>
                            <p className="ProjectsMyWorkPCode">{item.subtitle}</p>
                        </div>
                        <br/>
                        <br/>
                        <a className="ProjectsMyWorkLinkCode" href={item.path}>
                            {item.code}
                        </a>
                    </div>  
                );
            })}
            <div className="ProjectsMyWorktext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
        </div>  
     );
 };
    
  
  
  export default ProjectsMyWork;