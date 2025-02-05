
import { memo, useState } from "react";
import { toast } from "react-toastify";
import ChooseWidget from "./ChooseWidget";
import DisplayWidget from "./DisplayWidget";



 function EmbedWallOfLove(){

  const[submitted,setSubmitted]=useState(false)
  
      
    return(
        <div className="flex flex-col gap-4 justify-center items-center md:w-[90%] w-full md:ml-10 rounded-md py-2 ">
          {!submitted ? 
          <ChooseWidget  setSubmitted={setSubmitted}/> :
          <DisplayWidget/>
          }
        </div>
    )
}

export default memo(EmbedWallOfLove)