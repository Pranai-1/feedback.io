"use client";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { SpaceCreationDetails } from "./SpaceCreationProvider";
import 'react-toastify/dist/ReactToastify.css';
import { spaceSchema } from "../zodSchema";
import PulsatingButton from "../../components/ui/pulsating-button"
import { handleCreateSpace } from "../actions/createSpace";


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
  
    try{
    const res= await handleCreateSpace(data)
    if(res.success)
      toast.success("Space created successfully!");
    else
    toast.error("Space name must be unique")
    } catch(error){
      console.log(error)
       if(error instanceof Error)
        toast.error(`😕${error.message}`);
        else
        toast.error("😕 An error occurred. Please try again.");
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
