

import {  FeedbackPropType } from "@/app/api/types";
import MagicSlider from "@/app/components/Slider/MagicSlider";
import FetchLikedFeedbacks from "@/lib/fetchLikedFeedbacks";


/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Slider({params}:{params:any}) {
  const {spaceName}=await params
 
 const likedFeedbacks =await FetchLikedFeedbacks(spaceName) as FeedbackPropType[]

 if(!likedFeedbacks || likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
 }
 return(
 <>
 <MagicSlider wallOfLove={likedFeedbacks}/>
 </>) 

//  return <SliderHome wallOfLove={likedFeedbacks} width="full"/>
}
