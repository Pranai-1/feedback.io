import { SetStateAction, useReducer, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { InitialFeedbackType, SpacePropType } from "../../api/types";
import Image from "next/image";
import cheersImage from "@/public/cheers.webp"
import QuestionCard from "./QuestionCardComponent";
import StarRating from "./StarRatingComponet";
import { handleInputs, reducer } from "./Functions/ReducerFunctions";
import InputData from "./InputData";
import AttachImages from "./AttachImages";

import ProfilePhoto from "./ProfilePhoto";
import addFeedback from "@/app/actions/feedbackActions/addFeedback";
import { toast } from "react-toastify";
import { reviewSchema } from "@/app/zodSchema";




const initialState:InitialFeedbackType={
    starRating:5,
    name:"",
    email:"",
    reviewText:"",
    consent:false,
    images:[],
    photo:""
}


  
export default function SendReviewInText({setSendInText,space}:{setSendInText:React.Dispatch<SetStateAction<boolean>>,space:SpacePropType}){
   
    const[state,dispatch]=useReducer(reducer,initialState)
    const[loading,setLoading]=useState(false)
  async function handleReviewSubmission(){
     setLoading(true)
     try{
       const parsedFeedback= reviewSchema.safeParse(state)
       if(!parsedFeedback.success)
        toast.error(`Error occured while submitting review`)
         
       const review=await addFeedback(state,space.id)

       if(review.success)
        toast.success(review.message)
        else
        toast.error(review.message)

     }catch(error){
        toast.error(`${(error as Error).message || "Error Occured"}`)
        
     }finally{
        setLoading(false)
     }
   }

 console.log(state,state.images.length)
    return(
        <div className="w-[40%] h-max bg-[#FFFFFF] p-2 py-4 absolute top-10 z-50 left-[35%] rounded-md border border-gray-500">
              <div className="relative w-full h-2">
                    <RxCross2 className="absolute top-2 right-2 text-xl cursor-pointer text-black" onClick={()=>setSendInText(false)}/>
             </div>
        <p className="text-black font-bold text-lg flex justify-center items-center gap-2">Write text testimonial to 
            <span className="text-orange-600 font-bold">{space.spaceName}</span></p>
            <div className="flex flex-col justify-center items-start gap-4 mt-5 pl-4 relative">

            <Image src={cheersImage.src} height={60} width={120} alt="Cheers Images" 
            className="rounded-md"/>
            <p className="mt-4"></p>

            <QuestionCard 
            questions={space.questions}
            margin={1}
            font="medium"
            textSize="12"
            questionSize="10"
            />

            <StarRating
            dispatch={dispatch}
            starRating={state.starRating}
            />

            <textarea className="h-[100px] w-full border border-gray-700 rounded-md pt-2 pl-2 text-black" value={state.reviewText} 
            placeholder={`${state.starRating<=3 ? "What did you dislike?How can we make it better?":"Enter your feedback here..."}`} onChange={(e)=>handleInputs("reviewText",e.target.value,dispatch)}>
                
            </textarea>

                    <AttachImages
                    state={state}
                    dispatch={dispatch}
                    />

                    <InputData
                    state={state}
                    dispatch={dispatch}
                    />
                    <ProfilePhoto
                    state={state}
                    dispatch={dispatch}
                    />

            <label htmlFor="consent" className="flex justify-start items-center gap-2 text-[13px] text-gray-500 font-medium">
              <input type="checkbox" 
              checked={state.consent}
             
              onChange={()=>{
                if(state.consent)
                    handleInputs("consent",false,dispatch)
                else
                handleInputs("consent",true,dispatch)
              }}/>
              
              I give permission to use this testimonial across social channels and other marketing efforts
            </label>
                 <div className="flex justify-center items-center gap-4 w-full">
                 <button className="px-6 p-2 rounded-md bg-green-600 text-white "
                 onClick={()=>{
                    handleReviewSubmission()
                 }}>
                    Submit</button>
                    <button className="px-6 p-2 rounded-md bg-red-600 text-white "
                    onClick={()=>setSendInText(false)}
                    >Cancel</button>
                   
                 </div>
            </div> 
        </div>
    )
}