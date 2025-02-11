"use server";
import getFeedback from "@/app/actions/feedbackActions/getFeedbacks";
import getWallOfLove from "@/app/actions/wallOfLoveActions/getWallOfLove";
import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";

export async function fetchLikedFeedbacks(spaceName: string) {
  const reviews = await getFeedback(spaceName);
  const liked = await getWallOfLove(spaceName);

  const feedbacks: FeedbackPropType[] =
    reviews.success && Array.isArray(reviews.reviews) ? reviews.reviews as FeedbackPropType[] : [];

  const wallOfLove: WallOfLoveProp[] =
    liked.success && Array.isArray(liked.wallOfLove) ? liked.wallOfLove as WallOfLoveProp[]: [];

  if (wallOfLove.length === 0 || feedbacks.length === 0) {
    return [];
  }

  return feedbacks.filter((feedback) =>
    wallOfLove.some(
      (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
    )
  );
}
