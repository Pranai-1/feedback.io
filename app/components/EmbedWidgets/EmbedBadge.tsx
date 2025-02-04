import { FeedbackPropType } from "@/app/api/types";
import { reviewData } from "@/app/static/reviewData";
import { useState } from "react";
import { toast } from "react-toastify";
import SliderHome from "../Slider/SliderHome";
import Image from "next/image";
import manualImage from "../../Images/manualSlider.png";

export default function EmbedBadge(){


      const[selected,setSelected]=useState<number>(-1)
      const[hover,setHover]=useState<number>(-1)
    
      function handleSelect(index:number){
        setSelected(index)
        if(index==-1)
            return
        const selectedComp=index==1 ? 'Autoplay Carousel' : 'Manual Carousel'
        toast.success(`✅ selected ${selectedComp} widget`)
      }
    
    
      function handleSubmit(){
        console.log(selected)
      }

      
    return(
        <div className="flex flex-col gap-4 justify-center items-center w-[90%] ml-10 rounded-md py-2 flex-wrap bg-red-600">
        <p className="text-2xl text-white">I am in EMbed Badge Page</p>

        <div className="bg-[#FFFFFF] rounded-md h-max w-[90%]  flex flex-col justify-center items-center gap-4 pb-4 ">
            <p className="  w-max  text-3xl font-semibold mt-4 text-black">Embed a Wall of Love</p>
            <div className="flex justify-center items-center gap-8">
                <p className="rounded-lg bg-gray-200 p-1 px-4 text-lg">Step 1</p>
                <p className="text-black text-lg">Choose a layout</p>
            </div>
          <div className="w-[95%] flex flex-col  justify-between items-center gap-4 h-max ">
          <div className={`xl:w-[45%] w-[80%]  h-[440px] cursor-pointer flex flex-col justify-center items-center gap-4 p-2 border-2 border-gray-600
             ${hover==2 ? ' border-2 border-orange-300 rounded-md':''} `}
            onMouseEnter={()=>setHover(2)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(2)}>
         <Image src={manualImage.src} alt="Manual Image" height={300} width={600}/>
           <p className="text-orange-600 font-medium text-lg text-center">Manual Carousel</p>
            </div>
            <div className={`w-[400px]  h-[440px] overflow-hidden cursor-pointer flex flex-col justify-center items-center gap-4 p-2 border-2 border-gray-600
             ${hover==1 ? ' border-2 border-orange-300 rounded-md':''} `}
            onMouseEnter={()=>setHover(1)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(1)}
            >
               <SliderHome wallOfLove={reviewData as FeedbackPropType[]} width={'300px'}/>
               <p className="text-orange-600 font-medium text-lg text-center">Autoplay Carousel</p>
            </div>
           
          </div>
          <button className="bg-green-600 px-4 p-2 rounded-md text-gray-100 font-medium text-xl"
          onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}