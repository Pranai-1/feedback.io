import { useState } from "react";
import BasicPageDropdown from "./BasicPageDropdown"
import ExtraInformation from "./ExtraInformation"
import { FaExclamationCircle } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";



export default function BasicPageExtraInputFields(){
    const [showInformationForm, setShowInformationForm] = useState(false);
    return(
        <>
         <p className="flex justify-center items-center gap-2 mt-4   text-sm sm:text-base font-medium">Collect extra information <FaExclamationCircle/></p>
           <div className="relative w-[100%]">
           <p className={`flex justify-center items-center gap-6 p-2 border-2 border-gray-500  px-4 cursor-pointer w-[90%] my-4
           text-sm sm:text-base
           ${showInformationForm ?'border-blue-600':''}`}
           onClick={(e)=>{setShowInformationForm((prev)=>!prev)
            e.stopPropagation()
           }}>Name,email,social link etc.. <IoIosArrowDown/></p>
           {showInformationForm ? (
          
          <ExtraInformation/>
        ):null}
 
       <BasicPageDropdown/>
        </div>
        </>
    )
}