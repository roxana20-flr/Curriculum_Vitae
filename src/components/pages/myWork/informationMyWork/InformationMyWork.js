import "./InformationMyWork.css";
import { Link } from 'react-router-dom';
import { DataInformationMyWork } from './DataInformationMyWork';


    
          
function InformationMyWork() {
    return(
        <div >
            {DataInformationMyWork.map((item, index) => {
                return (
                    <div className="InformationMyWorkText  InformationMyWork" key={index}  >
                       <div> 
                            <p>{item.title}</p>
                            <p className="InformationMyWorkPCode">{item.subtitle}</p>
                        </div>
                        <br/>
                        <br/>
                        <Link className="InformationMyWorkLinkCode" to={item.path}>
                            {item.code}
                        </Link>
                    </div>  
                );
            })}
        </div>  
     );
 };
    
  
  
  export default InformationMyWork;