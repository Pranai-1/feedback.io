

import BasicPageQuestions from "./BasicPageQuestions";
import BasicPageInput from "./BasicPageInput";
import BasicPageExtraInputFields from "./BasicPageExtraInputFields";
import SpaceSubmission from "../SpaceSubmission";
import { storageSchema } from "@/app/zodSchema";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

export default function SpaceForm({createSpaceToggle}:{createSpaceToggle:number}) {
 
  const{spaceInputs,setSpaceInputs,setQuestions}=useContext(SpaceCreationDetails)

   const[spaceId,setSpaceId]=useState("")
      console.log(spaceInputs)
      useEffect(()=>{
          async function getSpace() {
              try {
                const id = localStorage.getItem("space");
               
                if (!id) {
                  return;
                }
                setSpaceId(id)
                const response = await axios.get("/api/spaceDetails", {
                  headers: { id}, 
                });
            console.log(response.data)
                if (response?.data?.space) {
                  const validationResult=storageSchema.safeParse(response?.data?.space)
                  if(validationResult.success)
                  setSpaceInputs({...spaceInputs,...validationResult.data});
                  setQuestions(response?.data?.space.questions)
                } 
              } catch (error) {
                console.error("Error fetching space details:", error);
              }
            }
            
         getSpace()
      localStorage.removeItem("space")
      
      },[])

  return (
    <div>
    
    
      <p className="text-[#25282C] p-2 text-xl sm:text-3xl font-bold my-4 sm:my-6 w-full text-center">Create a new Space</p>
      <p className="text-[#55595F] text-center w-full text-xs sm:text-base">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
      <div className="flex flex-col justify-start items-start mt-6 w-full">
        <BasicPageInput/>
        <BasicPageQuestions />
        <BasicPageExtraInputFields />
        <div className="flex justify-center items-center w-full">
          <SpaceSubmission 
          createSpaceToggle={createSpaceToggle}
          spaceId={spaceId}
          />
        </div>
      </div>
    </div>
  );
}
