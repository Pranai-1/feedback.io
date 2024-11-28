import { useContext } from "react";
import { SpaceCreationDetails } from "../SpaceCreationProvider";
import { RxCrossCircled } from "react-icons/rx";
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function BasicPageInput(){
    const {spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              handleSpaceInputs("spaceLogo", reader.result.toString()); 
            }
          };
          reader.readAsDataURL(file);
        }
      };
    return(
        <>
    <label htmlFor="spaceName" className="flex justify-center items-center gap-2 text-[#1a1b1c]">Space name
        <p className="text-red-600">*</p></label>
        <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-2" type="text" name="spaceName" id="spaceName"
        value={spaceInputs.spaceName} onChange={(e)=>{handleSpaceInputs("spaceName",e.target.value)}}/>
        <p className="text-[#55595F] text-[12px]">Public URL is:https://feedback-io-bice.vercel.app/your-space</p>


        <div className="mt-2 flex items-center gap-2">
      <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
        {spaceInputs.spaceLogo.length !== 0 ? (
          <img
            src={spaceInputs.spaceLogo}
            alt="Uploaded"
            className="h-12 w-12 rounded-full overflow-hidden"
          />
        ) : null}
      </span>
      <span>
        <label
          htmlFor="nameLogoURL"
          className="py-2 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:text-gray-700 focus:outline-none cursor-pointer"
        >
          Change
        </label>
        <input
          type="file"
          name="nameLogoURL"
          id="nameLogoURL"
          className="hidden"
          onChange={handleFileChange}
        />
      </span>
      {spaceInputs.spaceLogo.length !== 0 ? (
        <>
          <RxCrossCircled
            className="cursor-pointer"
            id="toolTipFileChange"
            onClick={() => handleSpaceInputs("spaceLogo", "")}
          />
          <ReactTooltip
            anchorId="toolTipFileChange"
            content="Undo the Change"
            place="top"
            style={{ maxWidth: "300px", whiteSpace: "normal" }}
          />
        </>
      ) : null}
    </div>

    <label htmlFor="headerTitle" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Header title 
            <p className="text-red-600">*</p></label>
            <input className="w-full border-2 border-gray-500 p-2 rounded-lg mt-1" type="text" name="headerTitle" id="headerTitle"
            placeholder="Would you like to give a shoutout for xyz?"
            value={spaceInputs.headerTitle} onChange={(e)=>{handleSpaceInputs("headerTitle",e.target.value)}}/>

    <label htmlFor="customMessage" className="flex justify-center items-center gap-2 text-[#1a1b1c] mt-2">Your custom message
                <p className="text-red-600">*</p></label>
            <textarea className="w-full border-2 border-gray-500 p-2 h-24 rounded-lg mt-1"  name="customMessage" id="customMessage"
            placeholder="Write a warm message for your customers"
            value={spaceInputs.customMessage} onChange={(e)=>{handleSpaceInputs("customMessage",e.target.value)}}></textarea>
    </>
    )
}