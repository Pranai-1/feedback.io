import { FeedbackPropType } from "@/app/api/types";
import NoFeedback from "./NoFeedback";
import { CiCircleCheck } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";


export default function FeedbackTextDisplay({feedbacks,spaceName}:{feedbacks:FeedbackPropType[],spaceName:string}){
   const[addToWallOfLove,setAddToWallOfLove]=useState<number[]>([])
   const[showConsentMessage,setShowConsentMessage]=useState(-1)
   function handleWallOfLove(index: number) {
    console.log(index);
    setAddToWallOfLove((prevArr) => {
      if (prevArr.includes(index)) {
        return prevArr.filter((ele) => ele !== index);
      } else {
        return [...prevArr, index]; 
      }
    });
  }
  
console.log(addToWallOfLove)
    return(
       <div className="w-full h-full">
             {feedbacks.length === 0 ? (
               <NoFeedback spaceName={spaceName} />
             ) : (
              <div className="flex flex-col gap-4 justify-center items-center w-full">
                {feedbacks.map((feedback,idx)=>
                <div className="bg-[#FFFFFF] p-2 rounded-md w-[90%] h-max flex flex-col justify-start items-center gap-2 py-4" key={idx}>
                   <div className="flex justify-between items-center relative w-full px-4">
                      <p className="p-1 px-6 rounded-xl bg-[#DBEAFE] text-blue-600 font-bold">Text</p>
                      {feedback.consent ? (
                        <>
                          {showConsentMessage ==idx ? (
                            <p className="text-white bg-gray-500 px-4 p-1 rounded-lg text-xs absolute -top-6  left-4">User gave the permission</p>
                          ):null}
                        <CiCircleCheck className="absolute top-0 left-4 text-green-600 font-bold text-xl"
                        onMouseEnter={()=>{
                          setShowConsentMessage(idx)
                          }}
                          onMouseLeave={()=>{
                            setShowConsentMessage(-1)
                          }}
                          />
                        </>
                      ):null}
                     
                      {addToWallOfLove.includes(idx) ? (
                     <FaHeart className={`text-2xl text-red-600 cursor-pointer w-max`}
                     onClick={()=>{
                       handleWallOfLove(idx)
                     }}/>
                      ):(
                        <CiHeart className={`text-3xl text-red-600 cursor-pointer w-max`}
                        onClick={()=>{
                          handleWallOfLove(idx)
                        }}/>
                      )}
                      
                   </div>
                </div>
                )}
              </div>
            
             )}
           </div>
    )
}