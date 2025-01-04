import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function FeedbackStarsDisplay({starRating}:{starRating:number}){
    return(
        <div className="w-full flex justify-start items-center gap-2 px-4">
            {Array.from({length:5}).map(( _, idx)=>(
                <div key={idx}>
                  {idx<starRating ? (
                    <FaStar
                    className="text-xl cursor-pointer text-[#FFB621]"
                    />
                  ):(
                   <CiStar
                   className="text-xl cursor-pointer text-black"
                   />
                  )}
                </div>
            ))}
        </div>
    )
}