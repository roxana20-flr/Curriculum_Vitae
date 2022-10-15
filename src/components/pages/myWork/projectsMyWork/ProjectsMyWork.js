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
                        <Link className="ProjectsMyWorkLinkCode" to={item.path}>
                            {item.code}
                        </Link>
                    </div>  
                );
            })}
            <div className="ProjectsMyWorktext">
                Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.
            </div>
        </div>  
     );
 };
    
  
  
  export default ProjectsMyWork;