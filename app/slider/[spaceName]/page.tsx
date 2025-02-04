
import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import getWallOfLove from "@/app/actions/wallOfLoveActions/getWallOfLove";
import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import SliderHome from "@/app/components/Slider/SliderHome";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Slider({params}:{params:any}) {
    const {spaceName}=await params
 const reviews = await getFeedback(spaceName);
 const liked = await getWallOfLove(spaceName);

 // Process data
 const feedbacks: FeedbackPropType[] = reviews.success && Array.isArray(reviews.reviews) ? reviews.reviews as FeedbackPropType[]: [];
 const wallOfLove: WallOfLoveProp[] = liked.success && Array.isArray(liked.wallOfLove) ? liked.wallOfLove as WallOfLoveProp[]: [];
  
 if(wallOfLove.length==0 || feedbacks.length==0){
    return <p className="text-2xl h-screen w-screen text-center text-black">No feedbacks to display</p>
 }
 
 const likedFeedbacks = feedbacks.filter((feedback) =>
    wallOfLove.some(
        (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
    )
);



 return <SliderHome wallOfLove={likedFeedbacks}/>
}
