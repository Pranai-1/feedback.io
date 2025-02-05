
"use client";

import { Marquee } from "@/components/ui/marquee";
import SliderCard from "./SliderCard";
import { FeedbackPropType } from "@/app/api/types";
import { useEffect, useMemo, useState } from "react";


export default  function MagicSlider({wallOfLove}:{wallOfLove:FeedbackPropType[]}) {
    
  const reviews:FeedbackPropType[] = useMemo(() => {
        return wallOfLove.length < 8 
            ? Array.from({ length: Math.ceil(8 / wallOfLove.length) }, () => wallOfLove).flat()
            : wallOfLove;
    }, [wallOfLove]);

    const[isSmallScreen,setIsSmallScreen]=useState(false)

    const handleResize=()=>{
        setIsSmallScreen(window.innerWidth<768)
    }
    
   useEffect(()=>{
       
   handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)

   },[])


  return (
    <div className="relative flex h-max mt-6 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 p-4 md:shadow-xl">
    <Marquee pauseOnHover={true} vertical={isSmallScreen} className="[--duration:40s]">
      {reviews.map((review, index) => (
        <SliderCard key={index} i={index} review={review} />
      ))}
    </Marquee>
  
    {/* Optional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
  </div>
  
  );
}
