
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
     <div className="relative flex h-max py-2 mt-4 w-full  flex-col items-center justify-center overflow-hidden rounded-lg  border md:shadow-xl">
          <Marquee pauseOnHover vertical={isSmallScreen}  className="[--duration:40s]">
            {reviews.map((review, index) => (
              <SliderCard key={index} i={index} review={review} />
            ))}
          </Marquee>
          
         
          
        </div>
  
  );
}
