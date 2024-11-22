import { useState } from "react";
import BasicPageDropdown from "./BasicPageDropdown"
import ExtraInformation from "./ExtraInformation"
import { FaExclamationCircle } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";



export default function BasicPageExtraInputFields(){
    const [showInformationForm, setShowInformationForm] = useState(false);
    return(
        <>
         <p className="flex justify-center items-center gap-2 mt-4 ">Collect extra information <FaExclamationCircle/></p>
           <div className="relative">
           <p className={`flex justify-center items-center gap-6 p-2 border-2 border-gray-500  px-4 cursor-pointer w-max my-4
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