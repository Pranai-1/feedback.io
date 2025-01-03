import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import { FeedbackPropType } from "@/app/api/types";
import FeedbackHome from "@/app/components/Feedback/FeedbackHome";

interface FeedbackHomeProps {
  spaceName: string;
}

export default async function SpaceFeedbacks({ params }: { params: FeedbackHomeProps }) {
  const { spaceName } = params;
  let feedbacks: FeedbackPropType[] = [];

  try {
    const reviews = await getFeedback(spaceName);
    if (reviews.success && Array.isArray(reviews.reviews)) {
      feedbacks = reviews.reviews as FeedbackPropType[]; 
    }
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
  }

  return (
    <>
      <FeedbackHome feedbacks={feedbacks} />
    </>
  );
}
