import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import getWallOfLove from "@/app/actions/wallOfLoveActions/getWallOfLove";
import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";

// interface FeedbackHomeProps {
//   spaceName: string;
// }

export default async function SpaceFeedbacks({ params }: { params:  { spaceName: string } }) {
  const { spaceName } = params;
  
  let feedbacks: FeedbackPropType[] = [];
 let wallOfLove:WallOfLoveProp[]=[]

    const reviews = await getFeedback(spaceName);
    if (reviews.success && Array.isArray(reviews.reviews)) {
      feedbacks = reviews.reviews as FeedbackPropType[]; 
    }

    const liked=await getWallOfLove(spaceName)
    if (liked.success && Array.isArray(liked.wallOfLove)) {
      wallOfLove = liked.wallOfLove as WallOfLoveProp[]; 
    }

  return (
    <div className="relative h-full md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
      <FeedbackHome 
      feedbacks={feedbacks} 
      spaceName={spaceName} 
      wallOfLove={wallOfLove}
      />
    </div>
  );
}
