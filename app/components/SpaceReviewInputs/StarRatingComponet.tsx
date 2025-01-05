import { Action } from "@/app/api/types";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { handleInputs } from "./Functions/ReducerFunctions";

export default function StarRating({ starRating, dispatch }:
    {starRating:number,dispatch:React.Dispatch<Action>}) {
        const[hoverIndex,setHoverIndex]=useState(5)
        const[clicked,setClicked]=useState(false)
    function onHover(idx:number) {
      
      setClicked(false)
      setHoverIndex(idx+1 > 5 ? 5:idx+1  )
      
    }


    return (
        <div className="flex justify-start items-center gap-2 w-full">
            {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx}>
                {idx <hoverIndex ?(
                     <FaStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     onMouseLeave={()=>{
                        if(!clicked){
                            onHover(starRating-1)
                        }
                        
                    }}
                     className="text-xl cursor-pointer text-[#FFB621]"
                     onClick={()=>{
                        setClicked(true)
                        handleInputs("starRating",idx + 1,dispatch)
                    } }
                 />
                ):(
                    <CiStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer text-black"
                     onClick={()=>{
                        setClicked(true)
                        handleInputs("starRating",idx + 1,dispatch)
                    } }
                 /> 
                )}
                </div>
               
            ))}
        </div>
    );
}
