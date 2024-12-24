import { useContext } from "react"
import cheers from "../../../public/cheers.webp"
import { SpaceCreationDetails } from "../SpaceCreationProvider"
import Image from "next/image"

export default function ThankyouPagePreview(){
    const{spaceInputs}=useContext(SpaceCreationDetails)
    return(
        <>
      {spaceInputs.disableCheersImage ? null :( <Image
  src={cheers.src}
  className="w-[120px] md:w-max mt-10"
  alt="cheers image"
  width={120}   
  height={80}   
/>)}
      
        <p className="text-[#55595F] text-2xl font-bold mt-6">{spaceInputs.thankyouTitle.length==0 ? "Thank you!" :spaceInputs.thankyouTitle}</p>
        <p className="text-[#707D86] my-4 text-center">{spaceInputs.thankyouDescription.length==0 ? "Thank you so much for your shoutout! It means a ton for us! 🙏" :spaceInputs.thankyouDescription}</p>
       
        </>
    )
}