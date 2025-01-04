"use server";

import { SpaceInputsIncludingQuestions, spaceSchemaBackend } from "../../zodSchema";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import userCheck from "../userCheck";

export async function handleCreateSpace(spaceDetails: SpaceInputsIncludingQuestions) {
  try {
  
    const user = await userCheck();

   
    const validationResult = spaceSchemaBackend.safeParse({
      ...spaceDetails,
      userId: user.id,
    });

    if (!validationResult.success) {
      console.error("Validation Errors:", validationResult.error.errors);
      throw new Error(validationResult.error.errors[0]?.message || "Validation failed");
    }

    const validatedData = validationResult.data;
    const newSpace = await prisma.space.create({ data: validatedData });

    if (!newSpace) {
      throw new Error("Failed to create the space. Invalid data.");
    }

   
    revalidatePath("/dashboard");

    return { success: true ,message:"✅ Space created successfully" };
  } catch (error: unknown) {
    console.error("Error in handleCreateSpace:", error);
    return { success: false, error: (error as Error).message || "Unknown error occurred" };
  }
}
