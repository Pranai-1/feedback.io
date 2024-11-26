import { useState } from "react"

import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import SelectionComponent from "./SelectionComponent";
import InputComponent from "./InputComponent";


export default function ExtraSettingsHome(){
    const[clicked,setClicked]=useState(-1)
   
    return(
        <div onClick={()=>{
            setClicked(-1)
           
            }}  className="relative">
            <p className="text-black mt-10 font-bold text-3xl p-2 text-center">Some extra settings</p>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="maxSeconds">Max video duration</label>
                    <SelectionComponent 
                        clicked={clicked} 
                        setClicked={setClicked} 
                        id={1}
                        name="maxSeconds"
                        options={{
                            option1:"120 seconds",
                            option2:"90 seconds",
                            option3:"60 seconds",
                    }} />
            
                </div>

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="maxCharacters">Max characters for the text testimonial</label>
                <input name="maxCharacters" id="maxCharacters"  placeholder="0" type="number" 
                className={` w-max p-2 border border-gray-500 ${clicked==2? 'border-2 border-blue-500':'border border-gray-600'} `
                }
                onClick={(e)=>{
                    setClicked(2)
                    e.stopPropagation()
                }}
                style={{
                    outline: 'none', 
                  }}/>
                    <InputComponent title="Max characters for the text testimonial" placeholder="0" id={2} clicked={clicked} setClicked={setClicked} type="number"/>
                <p className="text-xs text-gray-400">Setting it to 0 will remove the max char limit</p>
                <InputComponent title="Video button text" placeholder="Record a video" id={3} clicked={clicked} setClicked={setClicked} type="text"/>
                <InputComponent title="Text button text"  placeholder="Send in text"   id={4} clicked={clicked} setClicked={setClicked} type="text"/>
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
                    options={{
                        option1:"Required",
                        option2:"Optional",
                        option3:"Hidden",
                    }} />
                    
             </div>
             </div>
            </div>

        </div>
    )
}