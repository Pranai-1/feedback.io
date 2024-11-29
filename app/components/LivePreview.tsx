import { useContext } from "react"
import { SpaceCreationDetails } from "./SpaceCreationProvider"
import BasicPagePreview from "./BasicPage/BasicPagePreview"
import ThankyouPagePreview from "./ThankyouPage/ThankyouPagePreview"
import BorderBeam  from "@/components/ui/shine-border";



export default function LivePreview({displayPage}:{displayPage:number}){
   
    const {spaceInputs}=useContext(SpaceCreationDetails)
console.log(spaceInputs)
    return(
        <BorderBeam  className={`w-[95%] md:w-[400px]  sm:px-6  rounded-lg flex flex-col justify-center items-center flex-wrap py-4   ${spaceInputs.darkTheme ? 'bg-[#25282C]':'bg-[#FFFFFF]'}`}>
        <p className="bg-[#A7F3D0] rounded-full w-max text-[#059669] text-sm sm:text-base font-medium py-1 px-2 sm:px-4 absolute -top-3 left-8  sm:left-[320px] lg:left-8">{displayPage==1 ? 'Live preview - Thank you page':'Live preview - Testimonial page'}</p>
       
            {displayPage==1 ? (
                <>
                <ThankyouPagePreview />
               
             </>
                ):(
                    <BasicPagePreview/>
                )}

           
        </BorderBeam >
    )
}