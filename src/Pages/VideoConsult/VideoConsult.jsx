import Navbar from "../Home/Navbar"
import FirstFile from "./FirstFile"
import HealthCard from "./HealthCard"
import SpecialitiesCard from "./SpecialitiesCard"
import OurDr from "./OurDr"
import WorkContent from "./WorkContent"




export default function VideoConsult() {
  return (
    <div>
      
      <Navbar/>
      <FirstFile/>
   
      <SpecialitiesCard/>
      <HealthCard/>
      <OurDr/>
      <WorkContent/>
    
    </div>
  )
}
