
import ManualSliderHome from "@/app/components/Slider/ManualSliderHome";
import { fetchLikedFeedbacks } from "@/lib/fetchLikedFeedbacks";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function ManualSlider({params}:{params:any}) {
  const {spaceName}=await params

 
 const likedFeedbacks =await fetchLikedFeedbacks(spaceName)
console.log(likedFeedbacks)
 if(likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
 }



 return <ManualSliderHome wallOfLove={likedFeedbacks}/>
}
