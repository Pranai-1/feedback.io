"use client"
import { pricingPackages } from "@/app/static/simpleData";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

export default function MemberShip(){
    return(
        <div className="flex flex-col justify-center items-center mt-10 gap-4">

           <p className="text-xs font-medium text-gray-600 bg-gray-200 rounded-xl p-1 px-2 ">PRICING</p>
           <p className="font-bold text-4xl text-gray-100">Fair pricing, unfair advantage.</p> 
           <p className="text-gray-300 text-md">Get started with Feedback.io today and take your testimonials to the next level.</p>

           <div className="flex flex-wrap justify-center items-center gap-10 text-gray-100 mt-4">
              {pricingPackages.map((pricing,index)=>(
                <div key={index} className="flex flex-col justify-start items-start  border border-gray-400 rounded-lg p-4 gap-2 w-[40%]">
                    <p className="flex justify-center items-center w-full font-bold">{pricing.name}</p>
                    <p className="text-gray-400 text-sm font-medium">{pricing.description}</p>
                   
                    <p className="flex justify-center items-center text-3xl font-bold my-3 ">₹{pricing.price}
                        <span className="text-sm font-normal">/month</span></p>
                        <button className="w-[90%] ml-4 flex justify-center items-center text-sm font-medium my-3 p-2 bg-[#3F3F46]
                        hover:bg-gray-800 border border-gray-700 rounded-md"
                        onClick={()=>toast.error(`Feature not implemented yet... 🥲`)}>{pricing.textButton}
                       </button>
                        <div className="flex flex-col justify-center items-start gap-2">
                           {pricing.features.map((feature,index)=>(
                            <p key={index} className="flex justify-center items-center gap-4 text-gray-300"><TiTick/>{feature}</p>
                           ))}
                        </div>
                </div>
              ))}
           </div>
        </div>
    )
}