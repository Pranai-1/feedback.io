"use client";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { SpaceCreationDetails } from "./SpaceCreationProvider";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { spaceSchema } from "../zodSchema";
import { fetchUserData } from "@/lib/dataFetch";



export default  function SpaceSubmission() {
  const { spaceInputs,questions } = useContext(SpaceCreationDetails);
  //const {userId}=useContext(userContext)
  //reducers wont work because dashboard is a server component and we cannot update the user details because useContext is a client hook

  async function handleSubmit() {
    try {
     
     const validatedResult= spaceSchema.safeParse(spaceInputs);
     console.log(validatedResult)
     if(!validatedResult.success){
      toast.error(`😕 ${validatedResult.error.errors[0].message}`);
      return
     }
      let body={...spaceInputs,questions}
      console.log(body)
      const response=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaceDetails`,body)
      console.log(response.data)
      toast.success("Space created successfully!");
    } catch (error) {
      toast.error(`😕Error occured`);
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
