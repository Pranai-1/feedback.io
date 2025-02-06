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
      <>
        <nav className=" fixed top-0 left-0 right-0 z-10 flex justify-between p-2 sm:p-4 bg-black border-b-2 border-zinc-800">
          <div className="flex justify-center items-center">
            <SideBarSmallScreen />
            <Image
              src={feedbackLogo.src}
              width={50}
              height={20}
              alt="Logo"
              className="bg-black"
            />
            <h1 className="text-white font-medium sm:text-xl p-3">Feedback.io</h1>
          </div>
  
          <div className="flex justify-center items-center gap-5 m-2 text-white">
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
        {/* Add padding to the content to avoid overlap */}
        <div className="pt-[72px] md:pt-20"></div> {/* Adjust the pt-20 value based on navbar height */}
      </>
    )
  }
  