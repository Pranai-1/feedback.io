import Image from "next/image";
import manualImage from "../../Images/manualSlider.png";
import autoPlayImage from "../../Images/autoPlayImage.png";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { FcCancel } from "react-icons/fc";

export default function ChooseWidget({setSubmitted}:{setSubmitted:React.Dispatch<SetStateAction<number>>}){


        const[selected,setSelected]=useState<number>(-1)
          const[hover,setHover]=useState<number>(-1)
          
          function handleSelect(index:number){
            setSelected(index)
            if(index==-1)
                return
            const selectedComp=index==1 ? 'Autoplay Carousel' : 'Manual Carousel'
            toast.success(`✅ selected ${selectedComp} widget`)
          }
        
        
          function handleSubmit() {
            if (selected === -1) {
                toast.error(
                    <div className="flex items-center gap-2">
                        <FcCancel className="text-2xl"/> <span>Select at least one widget</span>
                    </div>
                );
                return;
            }
            setSubmitted(selected);
        }
    

          
    return(
        <div className="bg-[#FFFFFF] rounded-md h-max w-[90%]  flex flex-col justify-center items-center gap-8 pb-4 ">
            <p className="  w-max text-lg md:text-3xl font-semibold mt-4 text-black">Embed a Wall of Love</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
                <p className="rounded-lg bg-gray-200 p-1 px-4 text-lg">Step 1</p>
                <p className="text-black text-lg">Choose a layout</p>
            </div>
          <div className="w-[95%] flex flex-col lg:flex-row justify-center items-center gap-4 h-max ">
          <div className={`xl:w-[45%] w-[100%]  h-[340px] cursor-pointer flex flex-col justify-center items-center gap-6 p-2 border-2 border-gray-600
             ${hover==2 ? ' border-2 border-orange-300 rounded-md':''} overflow-hidden py-12 ${selected==2  ? ' border-4 border-orange-500 rounded-md':''}`}
            onMouseEnter={()=>setHover(2)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(2)}>
         <Image src={manualImage.src} alt="Manual Image" height={170} width={400} style={{ objectFit: "cover" }}/>
           <p className="text-orange-600 font-medium text-lg text-center ">Manual Carousel</p>
            </div>
            <div className={`xl:w-[45%] w-[100%]  h-[340px] cursor-pointer py-12 flex flex-col justify-center items-center gap-6 p-2 border-2 border-gray-600
             ${hover==1  ? ' border-2 border-orange-300 rounded-md':''}  ${selected==1  ? ' border-4 border-orange-500 rounded-md':''} `}
            onMouseEnter={()=>setHover(1)}
            onMouseLeave={()=>setHover(-1)}
            onClick={()=>handleSelect(1)}
            >
                <Image 
                src={autoPlayImage.src} 
                alt="Manual Image" 
                height={170} width={400} style={{ objectFit: "cover" }}
              />

               <p className="text-orange-600 font-medium text-lg text-center">Autoplay Carousel</p>
            </div>
           
          </div>
          <button className="bg-green-600 px-4 p-2 rounded-md text-gray-100 font-medium text-xl"
          onClick={handleSubmit}>Generate Code</button>
            </div>
    )
}