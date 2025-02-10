import { auth } from "@/auth"
import DashboardButton from "./DashboardButton"
import SideBarSmallScreen from "./SideBar/SideBarSmallScreen"
import SignoutButton from "./SignOutButton"
import SignupButton from "./SignupButton"
import Image from "next/image"
import feedbackLogo from "../Images/feedbackLogo.webp"

export default async function Navbar() {
    const session = await auth()
  
    return (

        <nav className="flex h-full bg-zinc-900 mx-auto bg-clip-padding  z-[100] backdrop-blur-sm  items-center md:px-16 px-4 justify-between py-4 border-b-2 border-zinc-800 sticky  top-0">
          <div className="flex justify-center items-center">
            <SideBarSmallScreen />
            <Image
              src={feedbackLogo.src}
              width={50}
              height={20}
              alt="Logo"
              className="bg-black text-sm w-12 h-10 text-balck "
            />
            <h1 className="text-white font-medium text-base sm:text-xl p-3">Feedback.io</h1>
          </div>
  
          <div className="flex justify-center items-center gap-3 sm:gap-5 m-2 text-white">
            {!session ? (
              <SignupButton />
            ) : (
              <>
                <DashboardButton />
                <SignoutButton />
              </>
            )}
          </div>
        </nav>
    )
  }
  