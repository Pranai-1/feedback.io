
"use client";
import Image from "next/image";
import projectOfTheWeek from "../../Images/projectOfTheWeek.png"
import { MdArrowRightAlt } from "react-icons/md";
import { AvatarCircles } from "@/components/avatar-circles";
import avatarUrl from "../../Images/AvatarImages/avatarUrl.jpg"
import avatarUrl1 from "../../Images/AvatarImages/avatarUrl1.png"
import avatarUrl2 from "../../Images/AvatarImages/avatarUrl2.jpg"
import avatarUrl3 from "../../Images/AvatarImages/avatarUrl3.png"
import avatarUrl4 from "../../Images/AvatarImages/avatarUrl4.png"
import avatarUrl5 from "../../Images/AvatarImages/avatarUrl5.jpg"
import { BlurFade } from "@/components/magicui/blur-fade";

// import { useEffect, useState } from "react";



export default function Header(){
  //  const[scrollY,setScrollY]=useState(0)
  //   useEffect(()=>{
  //     const handleScroll=()=>{
  //       setScrollY(window.scrollY)
  //     }
  //    window.addEventListener("scroll",handleScroll)

  //     return ()=>window.removeEventListener("scroll",handleScroll)
  //   },[])
// console.log(scrollY)
    return(
       <div className="flex flex-col justify-center items-center absolute top-0 right-0 left-0 ">
        <BlurFade  delay={0.25} inView>
        <Image src={projectOfTheWeek.src} width={200} height={200} alt="Project" className={`mt-6`}/>
        </BlurFade>
        <BlurFade  delay={0.25*2} inView>
        <div className="lg:text-6xl md:w-[70vw] text-2xl text-center md:text-5xl w-[80vw] shrink-0 text-white mb-8 ">
            Your Go-To Platform for Instant Testimonials
            <span className="text-black ml-3">🚀</span>
        </div>
        </BlurFade>
        <BlurFade  delay={0.25*3} inView>
        <p className="text-[#D5D5D5] md:w-[50vw] w-[80vw] text-sm md:text-base text-center mb-8">Easily embed testimonial widgets on your website and showcase authentic feedback,
             while gaining real-time insights through our <span className="font-bold text-gray-50">Feedback.io dashboard.</span> </p>
             </BlurFade> 
             <BlurFade  delay={0.25*4} inView>
             <button className="flex  font-medium gap-2 justify-center items-center text-black p-2 px-4 bg-[#E1E1E1] rounded-md" >Get Started for free 
                <span><MdArrowRightAlt className="text-2xl text-black"/></span></button>
                </BlurFade> 
                <div className="flex flex-col justify-center items-center w-full">
                <BlurFade  delay={0.25*5} inView>
                <AvatarCircles className="mt-6 mb-2 w-full flex justify-center items-center" avatarUrls={[
                    {imageUrl:avatarUrl.src,profileUrl:"https://github.com/Pranai-1"},
                    {imageUrl:avatarUrl1.src,profileUrl:"https://github.com/Pranai-1"},
                    {imageUrl:avatarUrl2.src,profileUrl:"https://github.com/Pranai-1"},
                    {imageUrl:avatarUrl3.src,profileUrl:"https://github.com/Pranai-1"},
                    {imageUrl:avatarUrl4.src,profileUrl:"https://github.com/Pranai-1"},
                    {imageUrl:avatarUrl5.src,profileUrl:"https://github.com/Pranai-1"},
                    ]}/>

                    <p className=" w-[70vw] mt-4 text-center sm:w-[25vw]  font-medium text-[#92A0B5]">More than 12 trusted partners using <span className="text-gray-50">Feedback.io</span></p>
                    </BlurFade>
                  </div>
       </div>
    )
}