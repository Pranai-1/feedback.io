// "use client"
// import { useEffect,useState } from "react";
// import cheersImage from "../../../public/cheers.webp"
// import Image from "next/image";
// import getSpace from "@/app/actions/getSpace";
// import SparklesText from "@/components/ui/sparkles-text";
// import { useParams } from "next/navigation";

// import { spaceSchemaBackend } from "@/app/zodSchema";
// import { SpacePropType } from "@/app/api/types";
// import QuestionCard from "@/app/components/SpaceReviewInputs/QuestionCardComponent";
// import SendReviewInText from "@/app/components/SpaceReviewInputs/SendReviewInText";


  
// export default  function spaceReviewHome() {
//  const {spaceName}=useParams()
// const[space,setSpace]=useState<SpacePropType>()
//  const[sendInText,setSendInText]=useState(false)
  
// useEffect(()=>{
//   async function getSpaceDetails(){
//     if(typeof spaceName==="string"){
//       const spaceDetails = await getSpace(spaceName);
//       const validatedResult=spaceSchemaBackend.safeParse(spaceDetails)

//       if(validatedResult.success){
//         const validatedSpace = validatedResult.data as SpacePropType;
//         validatedSpace.id = spaceDetails?.id || "";
//         validatedSpace.createdAt = spaceDetails?.createdAt || new Date();
//         setSpace(validatedSpace)
//       }
      
//     }
   
//   }
//   getSpaceDetails()
// },[])
 

//   if (!space) {
//     return <p className="w-full h-screen flex justify-center items-center text-red-600 font-bold text-2xl">Space doesn't exist</p>;
//   }

  
//   return (
//     <div className={`w-full  p-2 flex flex-col justify-start items-center gap-8 relative  ${sendInText ? "bg-[#5C5E61] h-[140vh]" :"h-screen"}`}>
//      <SparklesText text="Feedback.io"></SparklesText>
    
//       <Image src={cheersImage.src} height={120} width={240} alt="Cheers Images" 
//       className="rounded-md mt-5"/>
//       <p className="text-4xl  text-center font-bold w-full">{spaceName}</p>
//       <p className="text-gray-600 text-xl text-center w-full">{space.customMessage}</p>
//       <div className="flex flex-col justify-start items-start gap-4">

//      <QuestionCard
//       questions={space.questions}
//       margin={2}
//       font="bold"
//       textSize="18"
//       questionSize="14"
//       />
//       <div className="w-full flex justify-center items-center gap-4 text-white mt-4">
//         <button className="p-2 px-6 rounded-md bg-blue-600"
//         onClick={()=>{
//           setSendInText(true)
//           }}>{space.textButtonText}</button>
//         <button className="p-2 px-4 rounded-md bg-red-600">{space.videoButtonText}</button>
//       </div>
//       </div>
     
//      {sendInText ? (
//       <SendReviewInText
//       setSendInText={setSendInText}
//       space={space}
//       />
//      ):null}
//     </div>
//   );
// }



import cheersImage from "../../../public/cheers.webp";
import Image from "next/image";
import getSpace from "@/app/actions/spaceActions/getSpace";
import SparklesText from "@/components/ui/sparkles-text";
import { spaceSchemaBackend } from "@/app/zodSchema";
import { SpacePropType } from "@/app/api/types";
import QuestionCard from "@/app/components/SpaceReviewInputs/QuestionCardComponent";
import SendInTextButton from "@/app/components/SpaceReviewInputs/SendInTextButton";



/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SpaceReviewHome({ params }:{params: any}) {
  const { spaceName } =await params;

  // Fetch space details
  const spaceDetails = await getSpace(spaceName);

  // Validate using Zod schema
  const validatedResult = spaceSchemaBackend.safeParse(spaceDetails);

  if (!validatedResult.success) {
    return (
      <p className="w-full h-screen flex justify-center items-center text-red-600 font-bold text-2xl">
        Space doesnot exist
      </p>
    );
  }

  const space = validatedResult.data as SpacePropType;

  // Additional safety handling for optional fields
  space.id = spaceDetails?.id || "";
  space.createdAt = spaceDetails?.createdAt || new Date();

  return (
    <div className="w-full p-2 flex flex-col justify-start items-center gap-8 relative h-screen">
      <SparklesText text="Feedback.io" />
      <Image
        src={cheersImage.src}
        height={120}
        width={240}
        alt="Cheers Images"
        className="rounded-md mt-5"
      />
      <p className="text-4xl text-center font-bold w-full">{spaceName}</p>
      <p className="text-gray-600 text-xl text-center w-full">{space.customMessage}</p>
      <div className="flex flex-col justify-start items-start gap-4">
        <QuestionCard
          questions={space.questions}
          margin={2}
          font="bold"
        />
         <SendInTextButton space={space}/>
      </div>
      
    </div>
  );
}

