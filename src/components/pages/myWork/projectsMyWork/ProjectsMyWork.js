import "./ProjectsMyWork.css";
import { Link } from 'react-router-dom';
import { ProjectsMyWorkData } from './ProjectsMyWorkDate';


    
          
function ProjectsMyWork() {
    return(
        <div >
            {ProjectsMyWorkData.map((item, index) => {
                return (
                    <div className="ProjectsMyWork-text col-4 ProjectsMyWork" key={index}  >
                       <div> 
                            <p>{item.title}</p>
                            <p className="ProjectsMyWork-p-code">{item.subtitle}</p>
                        </div>
                        <br/>
                        <br/>
                        <Link className="ProjectsMyWork-link-code" to={item.path}>
                            {item.code}
                        </Link>

                    </div>  
                );
            })}
        </div>  
     );
 };
    
  
  
  export default ProjectsMyWork;