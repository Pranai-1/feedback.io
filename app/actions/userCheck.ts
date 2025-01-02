"use server";

import { auth } from "@/auth";
import { fetchUserData } from "@/lib/dataFetch";

export default async function userCheck() {
  try {
   
    const session = await auth();

    if (!session) {
      throw new Error("You must be logged in to perform this action.");
    }

   
    const { user } = await fetchUserData(session.user?.email || "");

    if (!user) {
      throw new Error("User not found. Please contact support.");
    }

    return user;
  } catch (error: unknown) {
    console.error("Error in userCheck:", error);
    throw new Error((error as Error).message || "Unknown error occurred");
  }
}
