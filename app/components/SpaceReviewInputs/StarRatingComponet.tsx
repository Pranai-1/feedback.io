import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function StarRating({ starRating, handleInputs }:
    {starRating:number,handleInputs:(key: string, value: string | number | boolean)=> void}) {
        const[hoverIndex,setHoverIndex]=useState(5)
        const[clicked,setClicked]=useState(false)
    function onHover(idx:number) {
        console.log(idx)
      setClicked(false)
      setHoverIndex(idx+1 > 5 ? 5:idx+1  )
      
    }
console.log(starRating)

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
                        handleInputs("starRating",idx + 1)
                    } }
                 />
                ):(
                    <CiStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer text-black"
                     onClick={()=>{
                        setClicked(true)
                        handleInputs("starRating",idx + 1)
                    } }
                 /> 
                )}
                </div>
               
            ))}
        </div>
    );
}
