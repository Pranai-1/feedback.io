"use client";

import { FeedbackPropType } from "@/app/api/types";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import SliderCard from "./SliderCard";


export default function ManualSliderHome({wallOfLove}:{wallOfLove:FeedbackPropType[]}){
    const[reviews]=useState<FeedbackPropType[]>(wallOfLove)
    const[reviewstoDisplay,setReviewstoDisplay]=useState<FeedbackPropType[]>([])
    const[index,setIndex]=useState(0)
    const[isSmallScreen,setIsSmallScreen]=useState(false)
    const[hover,setHover]=useState<number>(-1)

    useEffect(()=>{
       const handleResize=()=>{
        setIsSmallScreen(window.innerWidth<768)
       }
       handleResize()
       window.addEventListener("resize",handleResize)
       return ()=>window.removeEventListener("resize",handleResize)
    },[])
console.log(isSmallScreen,reviewstoDisplay)


    useEffect(()=>{
   
       if(isSmallScreen && reviews.length>index){
        console.log("fvfrkjncrkjn")
        setReviewstoDisplay([reviews[index]])
        return
       }
    
       if(!isSmallScreen && reviews.length>index){
        if(reviews.length>index+1)
        setReviewstoDisplay([reviews[index],reviews[index+1]])
       else
       setReviewstoDisplay([reviews[index]])
       }else
       setReviewstoDisplay([])
    },[index,isSmallScreen])
    
function handeClick(type:string){
    const incrementIndex=isSmallScreen ? 1 :2
    if(type=="right")
        setIndex((prev)=>prev+incrementIndex)
    else
    setIndex((prev)=>prev-incrementIndex)
}
    return(
        <div className={`w-[100%] h-max mt-4 bg-black flex  justify-center items-center relative`}>
            <div className="w-[100%] xl:w-[70%] flex  justify-center items-center gap-[2px] sm:gap-4 lg:gap-[2px]">

              {index>0 ?
            <div className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2 cursor-pointer"
            onClick={()=>handeClick("left")}>
            
             <FaArrowCircleLeft className="text-xl md:text-2xl"/> 
           
             </div>
               :null}
            {reviewstoDisplay.length>0 ?
            <div className="w-[80%] md:w-[60%] md:m-2 p-2 flex justify-center items-center gap-8">
             {reviewstoDisplay.map((review,i)=>{
                     return(
                         <SliderCard
                            key={i}
                             i={i}
                             review={review}
                            hover={hover}
                            setHover={setHover}
                            hoverDisable={false}
                        />
            )
          })}
            </div> : 
            <p className="text-white text-center">No feedbacks to display</p>}

        {index<reviews.length-2 ?
            <div className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2 cursor-pointer"
            onClick={()=>handeClick("right")}>
            
              <FaArrowCircleRight className=" text-xl md:text-2xl"/> 
             </div>
             :
            null}
        
        </div>
        
        </div>
    )
}