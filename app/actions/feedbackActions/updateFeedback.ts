"use server";
import { prisma } from "@/lib/prisma";
import { FeedbackPropType } from "@/app/api/types";


export default async function updateFeedback(feedbackDetails: FeedbackPropType) {
    try {
       
        const updatedFeedback = await prisma.review.update({
            where: { id: feedbackDetails.id },
            data: feedbackDetails,
        });

        return updatedFeedback
            ? { success: true, message: "✅ Feedback updated successfully" }
            : { success: false, message: "Couldn't update the review" };
    } catch (error) {
        return {
            success: false,
            message: (error as Error).message || "An error occurred while updating feedback",
        };
    }
}
