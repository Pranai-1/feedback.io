"use client";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { SpaceCreationDetails } from "./SpaceCreationProvider";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { auth } from "@/auth";

// Create Zod schema for validation
const spaceSchema = z.object({
  spaceName: z.string().min(1, "Space name is required."),
  headerTitle: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  spaceLogo: z.string().url("Invalid URL format for space logo."),
});

export default async function SpaceSubmission() {
  const { spaceInputs,questions } = useContext(SpaceCreationDetails);
   const session=await auth()
  
  async function handleSubmit() {
    try {
      spaceSchema.parse(spaceInputs);
      let body={...spaceInputs,questions}
      console.log(body)
      //const response=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaceDetails`,body)
      //console.log(response)
      toast.success("Space created successfully!");
    } catch (error) {
      if (error instanceof z.ZodError) {
          toast.error(`😕 ${error.errors[0].message}`);
      }
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
        style={{
           
          border: "2px solid #ffa500",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="text-sm sm:text-base sm:w-max "
      />
      <button
        className="w-full hover:bg-[#4B4ACF] bg-blue-500 p-2 rounded mt-10 text-white"
        onClick={handleSubmit}
      >
        Create new Space
      </button>
    </>
  );
}
