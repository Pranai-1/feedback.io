
import {  FetchFeedbackDetails } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";
import { fetchFeedbacks } from "@/lib/fetchFeedbackDetails";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Feedbacks",
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SpaceFeedbacks({ params }:{ params:any} ) {
    
  const { spaceName }:{spaceName:string} =await params;
 
   let decodedSpaceName=decodeURIComponent(spaceName)

 const {feedbacks,likedFeedbacks,wallOfLove} =await fetchFeedbacks(decodedSpaceName) as FetchFeedbackDetails

 if(feedbacks.length==0){
    return(
    <div className="h-[87vh] w-[97vw] flex flex-col justify-center items-center gap-4">
    <p className="text-2xl  text-center text-white">No feedbacks to display</p>
    <Link href={`https://feedback-io-xi.vercel.app/space/${decodedSpaceName}`} className="text-orange-600 underline font-medium">Click here to provide reviews</Link>
    </div>
    ) 
 }



  return (
    <div className="relative h-full md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
      <FeedbackHome 
      feedbacks={feedbacks} 
      spaceName={spaceName} 
      wallOfLove={wallOfLove} 
      likedFeedbacks={likedFeedbacks}
      />
    </div>
  );
}
