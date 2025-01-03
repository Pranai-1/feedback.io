import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import { FeedbackPropType } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";

interface FeedbackHomeProps {
  spaceName: string;
}

export default async function SpaceFeedbacks({ params }: { params: FeedbackHomeProps }) {
  const { spaceName } =await params;
  
  let feedbacks: FeedbackPropType[] = [];
 
    const reviews = await getFeedback(spaceName);
    if (reviews.success && Array.isArray(reviews.reviews)) {
      feedbacks = reviews.reviews as FeedbackPropType[]; 
    }
 
  return (
    <div className="relative h-[90.3vh] md:h-[86.8vh] lg:h-[87.2vh] xl:h-[87.5vh] w-[100%] bg-[#09090B] flex overflow-auto py-4 items-center md:justify-start justify-center">
      <FeedbackHome feedbacks={feedbacks} spaceName={spaceName}/>
    </div>
  );
}
