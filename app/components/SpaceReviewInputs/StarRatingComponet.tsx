import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function StarRating({ starRating, handleInputs }:
    {starRating:number,handleInputs:(key: string, value: string | number | boolean)=> void}) {

        
    function onHover(idx:number) {
        handleInputs("starRating",idx + 1); 
    }


    return (
        <div className="flex justify-start items-center gap-2 w-full">
            {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx}>
                {idx <starRating ?(
                     <FaStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer text-red-600"
                     onClick={()=>handleInputs("starRating",idx + 1) }
                 />
                ):(
                    <CiStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer"
                     onClick={()=>handleInputs("starRating",idx + 1)}
                 /> 
                )}
                </div>
               
            ))}
        </div>
    );
}
