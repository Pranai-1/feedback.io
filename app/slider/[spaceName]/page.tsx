

import {  FetchFeedbackDetails } from "@/app/api/types";
import MagicSlider from "@/app/components/Slider/MagicSlider";
import { fetchFeedbacks } from "@/lib/fetchFeedbackDetails";


/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Slider({params}:{params:any}) {
  const {spaceName}=await params
 
 const {likedFeedbacks} =await fetchFeedbacks(spaceName) as FetchFeedbackDetails
console.log(spaceName,likedFeedbacks)
 if(likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
 }
 return <MagicSlider wallOfLove={likedFeedbacks}/>

//  return <SliderHome wallOfLove={likedFeedbacks} width="full"/>
}
