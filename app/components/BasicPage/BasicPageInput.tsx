"use client";

import {  useContext, useEffect, useState } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

import InputComponent from "../InputComponent";
import ImageComponent from "./ImageComponent";

import axios from "axios";
import { storageSchema } from "@/app/zodSchema";

export default function BasicPageInput(){
    const {spaceInputs,handleSpaceInputs,setSpaceInputs,setQuestions}=useContext(SpaceCreationDetails)
    const [clicked, setClicked] = useState(-1);
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
    return(
        <div onClick={(e)=>{
            setClicked(-1)
            e.stopPropagation()
        }} className="w-full ">

         <InputComponent title="Space name" 
         placeholder="Enter your space name" 
         id={1} 
         clicked={clicked} 
         setClicked={setClicked} 
         type="text" 
         name="spaceName"
         required={true}
         value={spaceInputs.spaceName}
         handleSpaceInputs={handleSpaceInputs}
         />
         <p className="text-[#55595F] text-[12px]">Public URL is:https://feedback-io-bice.vercel.app/your-space</p>

    <ImageComponent spaceInputs={spaceInputs} handleSpaceInputs={handleSpaceInputs}/>
       
    <InputComponent title="Header title" 
         placeholder="Would you like to give a shoutout for xyz?" 
         id={2} 
         clicked={clicked} 
         setClicked={setClicked} 
         type="text" 
         name="headerTitle"
         required={true}
         value={spaceInputs.headerTitle}
         handleSpaceInputs={handleSpaceInputs}
         />


  

    <label htmlFor="customMessage" className="flex justify-start items-center gap-2 text-[#1a1b1c] mt-4   text-sm sm:text-base font-medium">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 h-24 rounded-lg mt-1  text-sm sm:text-base"  name="customMessage" id="customMessage"
            placeholder="Write a warm message for your customers"
            value={spaceInputs.customMessage} onChange={(e)=>{handleSpaceInputs("customMessage",e.target.value)}}></textarea>
    </div>
    )
}