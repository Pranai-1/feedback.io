import { SetStateAction, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SpacePropType } from "../api/types";
import Image from "next/image";
import cheersImage from "@/public/cheers.webp"
import QuestionCard from "./QuestionCardComponent";
import StarRating from "./StarRatingComponet";
import { IoIosInformationCircle } from "react-icons/io";


export default function SendReviewInText({setSendInText,space}:{setSendInText:React.Dispatch<SetStateAction<boolean>>,space:SpacePropType}){
   
    const[starRating,setStarRating]=useState(5)
    const[showTooltip,setShowTooltip]=useState(false)
   
    return(
        <div className="w-[40%] h-max bg-[#FFFFFF] p-2 py-4 absolute top-10 z-50 left-[35%] rounded-md border border-gray-500">
              <div className="relative w-full">
                    <RxCross2 className="absolute top-2 right-2 text-xl cursor-pointer" onClick={()=>setSendInText(false)}/>
             </div>
        <p className="text-black font-bold text-lg flex justify-center items-center gap-2">Write text testimonial to 
            <span className="text-orange-600 font-bold">{space.spaceName}</span></p>
            <div className="flex flex-col justify-center items-start gap-4 mt-5 pl-4 relative">
            <Image src={cheersImage.src} height={60} width={120} alt="Cheers Images" 
            className="rounded-md"/>
            <p className="mt-4"></p>
            <QuestionCard 
            questions={space.questions}
            margin={"1"}
            font="medium"
            textSize="12"
            questionSize="10"
            />

            <StarRating
            setStarRating={setStarRating}
            starRating={starRating}
            />
            <textarea className="h-[100px] w-full border border-gray-700 rounded-md">

            </textarea>

            <label htmlFor="name" className="flex justify-start items-center gap-1">
                Your Name 
                <span className="text-red-600">*</span>
                </label>
                <input className="rounded-md w-full p-2 border" placeholder="Enter your name here..." type="text"/>

                <label htmlFor="email" className="flex justify-start items-center gap-1">
                Your Email 
                <span className="text-red-600">*</span>
                <IoIosInformationCircle
                    className="cursor-pointer text-xl"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    />

      {/* Tooltip */}
                {showTooltip && (
                    <div className="absolute top-[80%] w-max left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-700 text-white text-sm rounded shadow-lg">
                    Your email will not be shared publicly
                    </div>
                )}
                </label>
                <input className="rounded-md w-full p-2 border" placeholder="Enter your email here..." type="text"/>
                <label htmlFor="consent" className="flex justify-start items-center gap-2 text-[13px] text-gray-500 font-medium">
                  <input type="checkbox"/>
                  
                  I give permission to use this testimonial across social channels and other marketing efforts
                </label>
                 <div className="flex justify-center items-center gap-4 w-full">
                    <button className="px-4 p-2 rounded-md bg-red-600 text-white ">Cancel</button>
                    <button className="px-4 p-2 rounded-md bg-green-600 text-white ">Submit</button>
                 </div>
            </div> 
        </div>
    )
}