import { useContext } from "react"
import { SpaceCreationDetails } from "./SpaceCreationProvider"
import BasicPagePreview from "./BasicPage/BasicPagePreview"
import ThankyouPagePreview from "./ThankyouPage/ThankyouPagePreview"




export default function LivePreview({displayPage}:{displayPage:number}){
    const {spaceInputs}=useContext(SpaceCreationDetails)
console.log(spaceInputs)
    return(
        <div className={`md:w-[400px]  px-6 border-[1px] border-gray-500 rounded-lg flex flex-col justify-center items-center flex-wrap py-4  ${spaceInputs.darkTheme ? 'bg-[#25282C]':''}`}>
        <p className="bg-[#A7F3D0] rounded-full w-max text-[#059669] font-medium py-1 px-4 absolute top-[40px] left-8">{displayPage==1 ? 'Live preview - Thank you page':'Live preview - Testimonial page'}</p>
       
            {displayPage==1 ? (
                <>
                <ThankyouPagePreview/>
               
             </>
                ):(
                    <BasicPagePreview/>
                )}

           
        </div>
    )
}