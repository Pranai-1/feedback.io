"use client";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { SpaceCreationDetails } from "./SpaceCreationProvider";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { spaceSchema } from "../zodSchema";
import PulsatingButton from "../../components/ui/pulsating-button"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default  function SpaceSubmission() {
  const { spaceInputs,questions } = useContext(SpaceCreationDetails);
  const [loading,setLoading]=useState(false)
  //const {userId}=useContext(userContext)
  //reducers wont work because dashboard is a server component and we cannot update the user details because useContext is a client hook

  async function handleSubmit() {
    setLoading(true); 
  
    try {
      const { success, error, data } = spaceSchema.safeParse({
        ...spaceInputs,
        questions,
      });
  
      if (!success) {
        const errorMessages = error?.errors.map((err) =>
          err.path.includes("questions")
            ? "Questions cannot be empty"
            : err.message
        );
  
        toast.error(`😕 ${errorMessages?.[0] || "An error occurred"}`);
        return;
      }
  
      const body = { ...data, questions };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaceDetails`,
        body
      );
  
      console.log(response.data);
     
       
      toast.success("Space created successfully!");
   try {
          redirect("/dashboard");
        } catch (revalidationError) {
          console.error("Revalidation error:", revalidationError);
        }
    
    } catch (submissionError) {
      console.error("Submission error:", submissionError);
      toast.error("😕 An error occurred. Please try again.");
    } finally {
      setLoading(false); 
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
      {loading ? (
        <PulsatingButton className="w-full mt-4 text-green-400 font-medium text-xl">
           Creating...
        </PulsatingButton>
      
      ):(
  <button
  className="w-full hover:bg-[#4B4ACF] bg-blue-500 p-2 rounded mt-10 text-white"
  onClick={handleSubmit}
>
  Create new Space
</button>
      )}
    
    </>
  );
}
