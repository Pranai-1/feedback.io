import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TiTickOutline  } from "react-icons/ti";


export default function BasicPageDropdown(){
    const [selectedValue, setSelectedValue] = useState("both");
    const[collectStarRatings,setCollectStarRatings]=useState(true)
    const[darkTheme,setDarkTheme]=useState(false)

    return(
        <div className="flex justify-center items-center gap-12 mt-4">
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <label htmlFor="options" >
        Collection type:
        </label>

            <select
                id="options"
                value={selectedValue}
                onChange={(event) => {
                    setSelectedValue(event.target.value);
                }}
                className="border-[2px] border-gray-300 rounded p-2"
            >
           <option value="both">Text and video</option>
            <option value="text">Text Only</option>
            <option value="video">video Only</option>
            
           </select>
           </div>
           <div className="w-max flex flex-col gap-2 justify-center items-center">
            <p>Collect star ratings :</p>
            <div className={`${!collectStarRatings ? "pr-6  bg-gray-300  " : "pl-6 bg-blue-500"} rounded-full cursor-pointer w-max`}
             onClick={(e)=>setCollectStarRatings((prev)=>!prev)} >
                {collectStarRatings ? (
                    <TiTickOutline  className=" text-xl text-white border-2 border-white rounded-full" /> 
                    ):(
                        <RxCrossCircled className="text-gray-600 text-xl" /> 
                    )}
               </div>
           </div>
           <div className="w-max flex flex-col gap-2 justify-center items-center">
            <p>Dark Theme :</p>
            <div className={`${!darkTheme ? "pr-6  bg-gray-300  " : "pl-6 bg-blue-500"} rounded-full cursor-pointer w-max`}
             onClick={(e)=>setDarkTheme((prev)=>!prev)} >
                {darkTheme ? (
                    <TiTickOutline  className=" text-xl text-white border-2 border-white rounded-full" /> 
                    ):(
                        <RxCrossCircled className="text-gray-600 text-xl" /> 
                    )}
               </div>
           </div>
       </div>
    )
}