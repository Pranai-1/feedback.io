import "server-only"
import { prisma } from "./prisma";
import { FeedbackPropType, WallOfLoveProp } from "@/app/api/types";

export default async function  FetchLikedFeedbacks(spaceName:string){

        const reviews=await prisma.space.findUnique({
          where:{
            spaceName
          },
          include:{
            reviews:true,
            wallOfLove:true
          }
        })
     
        if(!reviews)
          return [];
    
      const feedbacks: FeedbackPropType[] =
       reviews.reviews && Array.isArray(reviews.reviews) ? reviews.reviews as FeedbackPropType[] : [];
    
      const wallOfLove: WallOfLoveProp[] =
      reviews.wallOfLove && Array.isArray(reviews.wallOfLove) ? reviews.wallOfLove as WallOfLoveProp[]: [];
    
      if (wallOfLove.length === 0 || feedbacks.length === 0) {
        return [];
      }
    
      const likedFeedbacks= feedbacks.filter((feedback) =>
        wallOfLove.some(
          (loved) => loved.reviewId === feedback.id && loved.spaceId === feedback.spaceId
        )
      );
      return likedFeedbacks
    }
    
