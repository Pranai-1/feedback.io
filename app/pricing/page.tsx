import MemberShip from "../components/Sections/Membership"
import SideBarLarge from "../components/SideBar/SideBarLargeScreen"


export default function Pricing(){
    return(
    
         <div className="relative h-max  min-h-[87.5vh] bg-[#09090B] flex  py-4 items-start md:justify-start justify-center">
              <SideBarLarge />
          
              <div className=" w-[95%] sm:w-full  md:ml-72  bg-[#09090B]">
              <MemberShip/>
              </div>
            </div>
       
       
      
    )
}