

import MagicSlider from "@/app/components/Slider/MagicSlider";
import { fetchLikedFeedbacks } from "@/lib/fetchLikedFeedbacks";


/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Slider({params}:{params:any}) {
  const {spaceName}=await params
 
 const likedFeedbacks =await fetchLikedFeedbacks(spaceName)

 if(likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center flex justify-center items-center text-orange-600">No feedbacks to display</p>
 }

 return <MagicSlider wallOfLove={likedFeedbacks}/>

//  return <SliderHome wallOfLove={likedFeedbacks} width="full"/>
}
