import { MdOutlineManageSearch } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { SetStateAction } from "react";

export default function SpaceNavigation({deleteSpace,setDeleteSpace,headerTitle,setOpenDetailsCard}
    :{deleteSpace:string,setDeleteSpace:React.Dispatch<SetStateAction<string>>,headerTitle:string,setOpenDetailsCard:React.Dispatch<SetStateAction<number>>}){
    
    return(
        <div
        className="absolute top-12 right-4  bg-[#FFFFFF] text-white p-4 rounded-md z-20 flex flex-col gap-4"
        style={{ minHeight: "150px" }} 
      >
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                 <MdOutlineManageSearch className="text-2xl"/>  
                 Manage testimonials</p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                 <FaLink className="text-2xl"/>
                 Get the link
                 </p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-gray-300 cursor-pointer p-2 rounded-md">
                 <MdEdit className="text-2xl"/>
                 Edit the space
                 </p>
             <p className="flex justify-start items-center gap-4 text-black hover:bg-red-500 cursor-pointer p-2 rounded-md"
             onClick={()=>{
                setDeleteSpace(headerTitle)
                setOpenDetailsCard(-1)
                }}>
                 <RiDeleteBack2Line className="text-2xl" />
                 Delete the space
                 </p>
         </div>
    )
}