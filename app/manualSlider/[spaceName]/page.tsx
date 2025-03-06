
import { FeedbackPropType } from "@/app/api/types";
import ManualSliderHome from "@/app/components/Slider/ManualSliderHome";
import FetchLikedFeedbacks from "@/lib/fetchLikedFeedbacks";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function ManualSlider({params}:{params:any}) {
  const {spaceName}=await params

  const likedFeedbacks =await FetchLikedFeedbacks(spaceName) as FeedbackPropType[]

 if(likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
 }



 return <ManualSliderHome wallOfLove={likedFeedbacks}/>
}
