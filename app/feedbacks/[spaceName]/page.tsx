
import {  FetchFeedbackDetails } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";
import { fetchFeedbacks } from "@/lib/fetchFeedbackDetails";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Feedbacks",
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SpaceFeedbacks({ params }:{ params:any} ) {
    
  const { spaceName } =await params;

 const {feedbacks,likedFeedbacks,wallOfLove} =await fetchFeedbacks(spaceName) as FetchFeedbackDetails

 if(likedFeedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
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
