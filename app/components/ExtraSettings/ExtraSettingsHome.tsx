import { useContext, useState } from "react"

import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import SelectionComponent from "../SelectionComponent";
import InputComponent from "../InputComponent";
import { SpaceCreationDetails } from "../SpaceCreationProvider";


export default function ExtraSettingsHome(){
    const[clicked,setClicked]=useState(-1)
   const{spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)
    return(
        <div onClick={()=>{
            setClicked(-1)
           
            }}  className="relative">
            <p className="text-black mt-10 font-bold text-3xl p-2 text-center">Some extra settings</p>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="videoDuration">Max video duration</label>
                    <SelectionComponent 
                        clicked={clicked} 
                        setClicked={setClicked} 
                        id={1}
                        name="videoDuration"
                        options={
                         [  { label:"120 seconds",value:"120 seconds"},
                            { label:"90 seconds",value:"90 seconds"},
                            { label:"60 seconds",value:"60 seconds"}]
                    } 
                    value={spaceInputs.videoDuration}
                    handleSpaceInputs={handleSpaceInputs}
                    />
            
                </div>

            <div className="flex flex-col gap-2 mt-4">
               
                <InputComponent title="Max characters for the text testimonial" 
                placeholder="0" 
                id={2} 
                clicked={clicked} 
                setClicked={setClicked} 
                type="number"
                name="maxChar"
                 required={false}
                 value={spaceInputs.maxChar}
                 handleSpaceInputs={handleSpaceInputs}
                 />

                <p className="text-xs text-gray-400">Setting it to 0 will remove the max char limit</p>

                <InputComponent title="Video button text"
                 placeholder="Record a video" 
                 id={3} 
                 clicked={clicked} 
                 setClicked={setClicked} 
                 type="text" 
                 name="videoButtonText"
                 required={false}
                 value={spaceInputs.videoButtonText}
                 handleSpaceInputs={handleSpaceInputs}
                 />

                <InputComponent 
                title="Text button text"  
                placeholder="Send in text"   
                id={4} 
                clicked={clicked} 
                setClicked={setClicked} 
                type="text" 
                name="textButtonText"
                required={false}
                value={spaceInputs.textButtonText}
                handleSpaceInputs={handleSpaceInputs}
                />

            <div className="mt-2 w-max">
                    <label htmlFor="consent" className="flex gap-2 justify-center items-center w-max">
                        Consent display
                        <HiOutlineExclamationCircle
                        id="tooltip-anchor" 
                        className="mt-1 cursor-pointer"
                        
                        />
                    </label>
                    <ReactTooltip
                        anchorId="tooltip-anchor" 
                        content="The consent statement is enforced by default,but you can make it optional or hidden.If you plan to 
                        use them in marketing materials later on,get their permissions first."
                        place="top" 
                        style={{ maxWidth: "300px", whiteSpace: "normal" }}
                    />
                    <SelectionComponent 
                    clicked={clicked} 
                    setClicked={setClicked} 
                    id={5}
                    name="consent"
                    options={[
                        {label:"Required",value:"Required"},
                        { label:"Optional",value:"Optional"},
                        {label:"Hidden",value:"Hidden"},
                    ]} 
                    value={spaceInputs.videoDuration}
                    handleSpaceInputs={handleSpaceInputs}
                    />
                    
             </div>
             </div>
            </div>

        </div>
    )
}