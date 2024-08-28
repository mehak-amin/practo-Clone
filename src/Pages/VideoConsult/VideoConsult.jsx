import Navbar from "../Home/Navbar"
import FirstFile from "./FirstFile"
import HealthCard from "./HealthCard"
 import SpecialitiesCard from "./SpecialitiesCard"
import OurDr from "./OurDr"
import WorkContent from "./WorkContent"
import UsersSay from "./UsersSay"
import Faq from "./Faq"





export default function VideoConsult() {
  return (
    <div>
      
      <Navbar/>
      <FirstFile/>
   
       <SpecialitiesCard/> 
      <HealthCard/>
      <OurDr/>
      <WorkContent/>
      <UsersSay/>
      <Faq/>
    
     
    
    </div>
  )
}
