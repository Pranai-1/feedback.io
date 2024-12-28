import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function StarRating({ starRating, setStarRating }) {
    function onHover(idx) {
        setStarRating(idx + 1); 
    }
    console.log(starRating)

    return (
        <div className="flex justify-start items-center gap-2 w-full">
            {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx}>
                {idx <starRating ?(
                     <FaStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer text-red-600"
                     onClick={()=>setStarRating(idx+1)}
                 />
                ):(
                    <CiStar
                     key={idx}
                     onMouseEnter={() => onHover(idx)} 
                     className="text-xl cursor-pointer"
                     onClick={()=>setStarRating(idx+1)}
                 /> 
                )}
                </div>
               
            ))}
        </div>
    );
}
