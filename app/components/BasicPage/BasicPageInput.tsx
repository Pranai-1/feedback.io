import { SetStateAction, useContext } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

import InputComponent from "../InputComponent";
import ImageComponent from "./ImageComponent";

export default function BasicPageInput({clicked,setClicked,}:{clicked:number,setClicked:React.Dispatch<SetStateAction<number>>}){
    const {spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)
  
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


  

    <label htmlFor="customMessage" className="flex justify-start items-center gap-2 text-[#1a1b1c] mt-4">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 h-24 rounded-lg mt-1"  name="customMessage" id="customMessage"
            placeholder="Write a warm message for your customers"
            value={spaceInputs.customMessage} onChange={(e)=>{handleSpaceInputs("customMessage",e.target.value)}}></textarea>
    </div>
    )
}