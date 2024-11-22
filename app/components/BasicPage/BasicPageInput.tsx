import { useContext } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";

export default function BasicPageInput(){
    const {spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)
    console.log(spaceInputs)
    return(
        <>
    <label htmlFor="spaceName" className="flex justify-center items-center gap-2 text-[#1a1b1c]">Space name
        <p className="text-red-600">*</p></label>
        <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-2" type="text" name="spaceName" id="spaceName"
        value={spaceInputs.spaceName} onChange={(e)=>{handleSpaceInputs("spaceName",e.target.value)}}/>
        <p className="text-[#55595F] text-[12px]">Public URL is:https://feedback-io-bice.vercel.app/your-space</p>

    <label htmlFor="spaceLogo" className="flex justify-center items-center gap-2 text-[#1a1b1c]  mt-2">Space logo
        <p className="text-red-600">*</p></label>
        <input className="w-full p-1 rounded-lg mt-1" type="file" name="spaceLogo" id="spaceLogo"
        value={spaceInputs.spaceLogo} onChange={(e)=>{handleSpaceInputs("spaceLogo",e.target.value)}}/>

    <label htmlFor="headerTitle" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Header title 
            <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1" type="text" name="headerTitle" id="headerTitle"
            placeholder="Would you like to give a shoutout for xyz?"
            value={spaceInputs.headerTitle} onChange={(e)=>{handleSpaceInputs("headerTitle",e.target.value)}}/>

    <label htmlFor="customMsg" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1"  name="customMsg" id="customMsg"
            placeholder="Write a warm message for your customers"
            value={spaceInputs.customMessage} onChange={(e)=>{handleSpaceInputs("customMessage",e.target.value)}}></textarea>
    </>
    )
}