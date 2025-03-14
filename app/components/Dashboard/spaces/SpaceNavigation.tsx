
"use client";

import { SpacePropType } from "@/app/api/types";
import { RefObject, SetStateAction } from "react";
import { FaLink } from "react-icons/fa6";
import { MdOutlineManageSearch, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { handleCopy, handleEdit } from "../functions/handleFunctions";
import { RiDeleteBack2Line } from "react-icons/ri";





export default function SpaceNavigation(
    {setDeleteSpace,setOpenDetailsCard,setCreateSpaceToggle,space,deleteCardRef}
    :{setDeleteSpace:React.Dispatch<SetStateAction<string>>,
        setOpenDetailsCard:React.Dispatch<SetStateAction<string>>,setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>,
    space:SpacePropType,deleteCardRef:RefObject<HTMLDivElement>}){
   


    return(
        <div
        className="absolute top-[15%] right-4  bg-[#FFFFFF] text-white p-4 rounded-md z-20 flex flex-col gap-4"
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

              onClick={(e)=>{
            
              handleCopy(`https://feedback-io-xi.vercel.app/space/${space.spaceName}`,toast)
              setOpenDetailsCard("")
              e.stopPropagation()
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
                deleteCardRef.current?.scrollIntoView({ behavior: "smooth" });
                }}>
                 <RiDeleteBack2Line className="text-2xl" />
                 Delete the space
                 </p>
         </div>
    )
}