import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import getWallOfLove from "@/app/actions/wallOfLoveActions/getWallOfLove";
import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";


/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SpaceFeedbacks({ params }:{ params:any} ) {
    
  const { spaceName } =await params;
 // Fetch feedbacks and wallOfLove data asynchronously
 const reviews = await getFeedback(spaceName);
 const liked = await getWallOfLove(spaceName);

 // Process data
 const feedbacks: FeedbackPropType[] = reviews.success && Array.isArray(reviews.reviews) ? reviews.reviews as FeedbackPropType[]: [];
 const wallOfLove: WallOfLoveProp[] = liked.success && Array.isArray(liked.wallOfLove) ? liked.wallOfLove as WallOfLoveProp[]: [];



  return (
    <div className="relative h-full md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
      <FeedbackHome feedbacks={feedbacks} spaceName={spaceName} wallOfLove={wallOfLove} />
    </div>
  );
}
