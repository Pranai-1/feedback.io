

import { auth } from "@/auth"
import SignupButton from "../components/SignupButton"
import SignoutButton from "../components/SignOutButton"
import DashboardButton from "./DashboardButton"
import SideBarSmallScreen from "./SideBar/SideBarSmallScreen"



export default async function Navbar(){
    
const session=await auth()

  
    return(
        <>
        <nav className="relative flex justify-between p-2  sm:p-4 bg-black border-b-2 border-zinc-800">
            <div className="flex justify-center items-center">
                <SideBarSmallScreen/>
                <h1 className="text-white font-medium sm:text-xl p-3">Feedback.io</h1>
            </div>
           
           <div className="flex justify-center items-center gap-5 m-2 text-white">
           {!session ?(<SignupButton/>):(
            <>
          
           <DashboardButton/>
             <SignoutButton/>
            </>
           
            )}
           </div>
        </nav>
        </>
    )
}