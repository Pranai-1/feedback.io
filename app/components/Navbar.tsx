

import { auth } from "@/auth"
import SignupButton from "../components/SignupButton"
import SignoutButton from "../components/SignOutButton"


export default async function Navbar(){
    
const session=await auth()

    return(
        <>
        <nav className="flex justify-between m-2 p-2 bg-black">
            <h1 className="text-white font-medium text-xl p-3">Feedback.io</h1>
           <div className="flex justify-center items-center gap-5 m-2 text-white">
           {!session ?(<SignupButton/>):(<SignoutButton/>)}
           </div>
        </nav>
        </>
    )
}