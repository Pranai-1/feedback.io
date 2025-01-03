import { SetStateAction } from "react";



export default function FeedbackSideBar({setDisplay}:{setDisplay:React.Dispatch<SetStateAction<string>>}){
    return(
        <div className=" overflow-x-hidden flex-col  gap-4 text-white
        w-[85%] md:w-72 h-full px-5 pt-3 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
            <p className="text-2xl text-center w-full">Inbox</p>
        </div>
    )
}