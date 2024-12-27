import React, { SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
export default function SearchSpaces({clickedOnSearch,setClickedOnSearch,searchText,setSearchText}:
    {clickedOnSearch:boolean,setClickedOnSearch:React.Dispatch<SetStateAction<boolean>>,searchText:string,setSearchText:React.Dispatch<SetStateAction<string>>}){
    return(
        <div className="w-1/2">
         <label htmlFor="searchSpaces"  className={`w-full  bg-white flex justify-start items-center gap-2 p-2 rounded-md 
         ${clickedOnSearch ? " border-[3px] border-blue-500":"border border-orange-600" }`}
         onClick={()=>setClickedOnSearch(true)}> 
         <IoSearch className="text-black text-xl"/>
         <input id="searchSpaces" name="searchSpaces" placeholder={`Search spaces by name`} className="w-full border-none outline-none"
         onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
         {searchText.length>0 ? (
            <RxCross2 className="text-xl cursor-pointer" onClick={()=>setSearchText("")}/>
         ):null}
         </label>
        </div>
    )
}