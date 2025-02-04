"use client";

// import Image from "next/image"
// import image1 from "../../static/Images/image1.jpg"
// import image2 from "../../static/Images/image2.jpg"
// import image3 from "../../static/Images/image3.jpg"
// import image4 from "../../static/Images/image4.jpg"
// import profileImage1 from "../../static/Images/profileImage1.jpg"
// import profileImage2 from "../../static/Images/profileImage1.png"
// import FeedbackStarsDisplay from "../Feedback/FeedbackStarsDisplay"
import { reviewData } from "@/app/static/reviewData"
import SliderHome from "../Slider/SliderHome"
import { toast } from "react-toastify";
import { FeedbackPropType } from "@/app/api/types"
import { useState } from "react";

//const imageArray=[{profileImage:profileImage1,image1,image2},{profileImage:profileImage2,image1:image3,image2:image4}]

export default function EmbedWallOfLove(){
  const[selected,setSelected]=useState<number>(-1)
  const[hover,setHover]=useState<number>(-1)

  function handleSelect(index:number){
    setSelected(index)
    if(index==-1)
        return
    const selectedComp=index==1 ? 'Autoplay Carousel' : 'Manual Carousel'
    toast.success(`✅ selected ${selectedComp} widget`)
  }
    return(
        <div className=" h-full w-full flex justify-center items-start">
            <div className="bg-[#FFFFFF] rounded-md h-max w-[100%]  flex flex-col justify-center items-center gap-4 pb-4">
            <p className="  w-max  text-3xl font-semibold mt-4 text-black">Embed a Wall of Love</p>
            <div className="flex justify-center items-center gap-8">
                <p className="rounded-lg bg-gray-200 p-1 px-4 text-lg">Step 1</p>
                <p className="text-black text-lg">Choose a layout</p>
            </div>
          <div className="w-[100%] flex justify-center items-center gap-4 h-max ">
            <div className={`w-[45%] h-max cursor-pointer flex flex-col justify-center items-center gap-4 p-2 border-2 border-gray-600
             ${hover==1 ? ' border-2 border-orange-300 rounded-md':''} `}
            onMouseEnter={()=>setHover(1)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(1)}
            >
               <SliderHome wallOfLove={reviewData as FeedbackPropType[]}/>
               <p className="text-orange-600 font-medium text-lg text-center">Autoplay Carousel</p>
            </div>
            <div className={`w-[45%] h-max cursor-pointer ${hover==2 ? ' border-4 border-orange-600 rounded-md':''} `}
            onMouseEnter={()=>setHover(2)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(2)}>
                <p>Different type..</p>
            </div>
          </div>
          <button className="bg-green-600 px-4 p-2 rounded-md text-gray-100 font-medium text-xl">Submit</button>
            </div>
       
        </div>
    )
}