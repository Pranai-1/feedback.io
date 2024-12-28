"use client"
import { useEffect,useState } from "react";
import cheersImage from "../../../public/cheers.webp"
import Image from "next/image";
import getSpace from "@/app/actions/getSpace";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";


  
export default  function spaceReviewHome() {
 const {spaceName}=useParams()
console.log(spaceName)
const[space,setSpace]=useState({})
 

useEffect(()=>{
  async function getSpaceDetails(){
    const spaceDetails = await getSpace(spaceName);
    setSpace(spaceDetails); // Set the state here
  }
  getSpaceDetails()
},[])
 

  if (!space) {
    return <p className="w-full h-screen flex justify-center items-center text-red-600 font-bold text-2xl">Space doesn't exist</p>;
  }

  
  return (
    <div className="w-full h-screen p-2 flex flex-col justify-start items-center gap-8">
      <p className="font-bold  text-xl p-2 w-max text-indigo-600">Feedback.io</p>
      <Image src={cheersImage.src} height={120} width={240} alt="Cheers Images" 
      className="rounded-md mt-10"/>
      <p className="text-4xl  text-center font-bold w-full">{spaceName}</p>
      <p className="text-gray-600 text-xl text-center w-full">{space.customMessage}</p>
      <div className="flex flex-col justify-start items-start gap-4">
      <p className="text-[#33363A] font-bold text-xl">QUESTIONS</p>
      <div>
      {space.questions && Array.isArray(space.questions) ? (
            <>
               {space.questions.map((question,idx)=><li key={idx} className="my-2">{question?.label}</li>)}
            </>
    ) : null}

      
      </div>
      </div>
     
    </div>
  );
}
