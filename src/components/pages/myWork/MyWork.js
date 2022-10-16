import HeaderMyWork from "./headerMyWork/HeaderMyWork";
import ProjectsMyWork from "../myWork/projectsMyWork/ProjectsMyWork";
import DescriptionsMyWork from "../myWork/descriptionMyWork/DescriptionMyWork";
import InformationMyWork from "./informationMyWork/InformationMyWork";
import FinalMyWork from "./finalMyWork/FinalMyWork";
import Footer from "../../footer/Footer";
import "./MyWork.css";


    
          
function MyWork() {
    return(
        <div className="MyWork">
            <HeaderMyWork />
            <ProjectsMyWork/>
            <InformationMyWork/>
            <DescriptionsMyWork/>
            <FinalMyWork/>
            <Footer/>
        </div>
     );
 };
    
  
  
  export default MyWork;