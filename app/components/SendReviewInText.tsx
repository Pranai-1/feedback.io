import { SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { SpacePropType } from "../api/types";

export default function SendReviewInText({setSendInText,space}:{setSendInText:React.Dispatch<SetStateAction<boolean>>,space:SpacePropType}){
    return(
        <div className="w-[30%] h-max bg-[#FFFFFF] p-2 pt-4 absolute top-10 z-50 left-[35%] rounded-md border border-gray-500">
              <div className="relative w-full">
                    <RxCross2 className="absolute top-2 right-2 text-xl cursor-pointer" onClick={()=>setSendInText(false)}/>
             </div>
        <p className="text-black font-bold text-lg">{`Write text testimonial to ${space.spaceName}`}</p>
        </div>
    )
}