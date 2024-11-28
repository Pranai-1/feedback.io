import { useContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TiTickOutline  } from "react-icons/ti";
import { SpaceCreationDetails } from "../SpaceCreationProvider";
import SelectionComponent from "../SelectionComponent";



export default function BasicPageDropdown(){
    const[clicked,setClicked]=useState(1)
  const {spaceInputs,handleSpaceInputs}=useContext(SpaceCreationDetails)

    return(
        <div className="flex justify-center items-center gap-12 mt-4">
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <label htmlFor="collectionType" >
        Collection type:
        </label>
        <SelectionComponent 
                    clicked={clicked} 
                    setClicked={setClicked} 
                    id={5}
                    name="collectionType"
                    value={spaceInputs.collectionType}  
                    handleSpaceInputs={handleSpaceInputs} 
                    options={[
                        { label:"Text and video",value:"both"},
                        { label:"Text Only",value:"text"},
                        { label:"Video Only",value:"video"}
                    ]
                     
                    } 
                    />
        
           </div>
           <div className="w-max flex flex-col gap-2 justify-center items-center">
            <p>Collect star ratings :</p>
            <div className={`${!spaceInputs.collectStarRatings ? "pr-6  bg-gray-300  " : "pl-6 bg-blue-500"} rounded-full cursor-pointer w-max`}
             onClick={()=>handleSpaceInputs("collectStarRatings", !spaceInputs.collectStarRatings)} >
                {spaceInputs.collectStarRatings ? (
                    <TiTickOutline  className=" text-xl text-white border-2 border-white rounded-full" /> 
                    ):(
                        <RxCrossCircled className="text-gray-600 text-xl" /> 
                    )}
               </div>
           </div>
           <div className="w-max flex flex-col gap-2 justify-center items-center">
            <p>Dark Theme :</p>
            <div className={`${!spaceInputs.darkTheme ? "pr-6  bg-gray-300  " : "pl-6 bg-blue-500"} rounded-full cursor-pointer w-max`}
             onClick={()=>handleSpaceInputs("darkTheme", !spaceInputs.darkTheme)} >
                {spaceInputs.darkTheme ? (
                    <TiTickOutline  className=" text-xl text-white border-2 border-white rounded-full" /> 
                    ):(
                        <RxCrossCircled className="text-gray-600 text-xl" /> 
                    )}
               </div>
           </div>
       </div>
    )
}