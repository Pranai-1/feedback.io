"use client";

import { FeedbackPropType } from "@/app/api/types";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { useEffect, useState } from "react";
import { AiFillTruck } from "react-icons/ai";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import FeedbackStarsDisplay from "../Feedback/FeedbackStarsDisplay";
import Image from "next/image";
import { reviewData } from "@/app/static/reviewData";

export default function ManualSliderHome({wallOfLove}:{wallOfLove:FeedbackPropType[]}){
    const[reviews]=useState<FeedbackPropType[]>(reviewData as FeedbackPropType[])
    const[reviewstoDisplay,setReviewstoDisplay]=useState<FeedbackPropType[]>([])
    const[index,setIndex]=useState(0)
    const[isSmallScreen,setIsSmallScreen]=useState(false)

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
        console.log("debnckdnxek")
       if(isSmallScreen && reviews.length>index){
        console.log("fvfrkjncrkjn")
        setReviewstoDisplay([reviews[index]])
        return
       }
       console.log("cfcfcrecr4")
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
        <div className={`w-[100%] h-max mt-4 bg-black flex  justify-center items-center relative gap-[2px]`}>
              {index>0 ?
            <div className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2"
            onClick={()=>handeClick("left")}>
            
             <FaArrowCircleLeft className="text-xl md:text-2xl"/> 
           
             </div>
               :null}
            {reviewstoDisplay.length>0 ?
            <div className="w-[80%] md:w-[60%] md:m-2 p-2 flex justify-center items-center gap-8">
             {reviewstoDisplay.map((review,i)=>{
                     return(
                    <div className="w-[300px] md:w-[350px] h-[350px]" key={i}>
                              <NeonGradientCard >
                                              <div className={`flex flex-col  justify-center items-start gap-2 w-[100%] overflow-hidden `}>
                                              <div className={`flex ${review.images.length>1 ?'justify-start' : 'justify-center'} items-center  w-[100%] my-2  overflow-x-auto`}>
                                                  {review.images.length > 0 ? (
                                                      <div className="flex justify-center items-center w-[100%] overflow-x-auto">
                                                      {review.images.map((image, index) => (
                                                          <Image key={index} src={image} alt="Images" width={100} height={50} className="bg-gray-200 rounded-md mr-2 h-20"/>
                                                      ))}
                                                      </div>
                                                  ) : (
                                                      <div className="h-20 w-32 bg-gray-200 rounded-md flex justify-center items-center">
                                                      <p className="text-black text-xs">No Images Available</p>
                                                      </div>
                                                  )}
                                              </div>
              
                                                  <div className="flex justify-start items-start gap-4 mt-4 mb-2">
                                                      {review.photo ? 
                                                      <Image src={review.photo} alt="Profile Photo" width={40} height={40} className="bg-gray-200 rounded-full"/>  :
                                                       <AiFillTruck  className="h-10 w-10 bg-gray-200 rounded-full"/>}
                                                     <p className="text-gray-800 pt-2 font-medium">{review.name}</p>
                                                     
                                                  </div>
                                                  <div className="w-[100%] ml-8 flex flex-col justify-center items-center">
                                                  <FeedbackStarsDisplay starRating={review.starRating}/>
                                                  </div>
                                                  <div className="w-full mt-4 mb-6 max-h-[80px] overflow-y-auto border border-gray-300 p-2 rounded-lg">
                                                  <p 
                                                   className="text-sm text-orange-600 whitespace-pre-wrap break-words text-center">
              
                                                      {review.reviewText || "No review provided."}
                                                      </p>
                                                  </div>
                                                  
                                              </div>
                                 </NeonGradientCard>
                        </div>
            )
          })}
            </div> : 
            <p className="text-white text-center">No feedbacks to display</p>}

        {index<=reviews.length-2 ?
            <div className="w-max h-max bg-gray-200 rounded-xl p-1 md:p-2"
            onClick={()=>handeClick("right")}>
            
              <FaArrowCircleRight className=" text-xl md:text-2xl"/> 
             </div>
             :
            null}
        
        </div>
    )
}