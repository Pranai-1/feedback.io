

export default function Loading(){
    return(
        <div className="w-[100%] h-max md:h-[87vh] pt-2  flex flex-col gap-12 justify-center items-center overflow-hidden relative">
          
            <p className="text-center text-gray-800 text-xl font-bold absolute z-50 top-1/2 ">Loading your spaces...</p>
         <div className="w-[100%] flex flex-col md:flex-row  justify-center items-center gap-8 "> 
            {Array.from({length:3}).map((_,index)=>(
                    <div key={index} className="w-[67%] md:w-[20%] h-[180px] md:h-[360px]  rounded-lg relative"> 
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100  to-[#FFFFFF] animate-shimmer rounded-lg backdrop-blur-md">
</div>


     
                    </div> 
              ))}
          
            
       
       
         </div>
        </div>
      
    )
}
