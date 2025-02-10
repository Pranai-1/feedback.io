
"use client";

import { MdOutlineManageSearch } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { SetStateAction,  } from "react";
import {SpacePropType } from "../api/types";
import { handleCopy, handleEdit } from "./SpaceComponenets/functions/handleFunctions";
import {  useRouter } from "next/navigation";
import { toast } from "react-toastify";





export default function SpaceNavigation({setDeleteSpace,setOpenDetailsCard,setCreateSpaceToggle,space}
    :{setDeleteSpace:React.Dispatch<SetStateAction<string>>,
        setOpenDetailsCard:React.Dispatch<SetStateAction<string>>,setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>,
    space:SpacePropType}){
   
   const router=useRouter()



    return(
        <div
        className="absolute top-[50%] right-4  bg-[#FFFFFF] text-white p-4 rounded-md z-20 flex flex-col gap-4"
        style={{ minHeight: "150px" }} 
      >
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md"
              onClick={()=>{
                window.open(`/feedbacks/${space.spaceName}`)
                //router.push(`/feedbacks/${space.spaceName}`)
                setOpenDetailsCard("")
               }}
               >
                 <MdOutlineManageSearch className="text-2xl"/>  
                 Manage testimonials</p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md"

              onClick={()=>{
              handleCopy(`http://localhost:3000/space/${space.spaceName}`,toast)
              setOpenDetailsCard("")
             }}
             >
                 <FaLink className="text-2xl"
                
                 />
                 Get the link
                 </p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md"
              onClick={()=>{
               handleEdit(setCreateSpaceToggle,setOpenDetailsCard,space.id)
                }}>
                 <MdEdit className="text-2xl"/>
                 Edit the space
                 </p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-red-500 cursor-pointer p-2 rounded-md"
             onClick={()=>{
                setDeleteSpace(space.spaceName)
                setOpenDetailsCard("")
                }}>
                 <RiDeleteBack2Line className="text-2xl" />
                 Delete the space
                 </p>
         </div>
    )
}