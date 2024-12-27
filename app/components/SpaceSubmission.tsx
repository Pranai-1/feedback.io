"use client";
import { SetStateAction, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { SpaceCreationDetails } from "./SpaceCreationProvider";
import 'react-toastify/dist/ReactToastify.css';
import { spaceSchema } from "../zodSchema";
import PulsatingButton from "../../components/ui/pulsating-button"
import { handleCreateSpace } from "../actions/createSpace";
import { handleUpdateSpace } from "../actions/updateSpace";


export default  function SpaceSubmission({createSpaceToggle,spaceId,setCreateSpaceToggle}
  :{createSpaceToggle:number,spaceId:string,setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>}) {
  const { spaceInputs,questions } = useContext(SpaceCreationDetails);
  const [loading,setLoading]=useState(false)
  //const {userId}=useContext(userContext)
  //reducers wont work because dashboard is a server component and we cannot update the user details because useContext is a client hook

  async function handleSubmit() {
    setLoading(true);
  
    try {
      // Validate inputs
      const validationResult = spaceSchema.safeParse({ ...spaceInputs, questions });
  
      if (!validationResult.success) {
        const errorMessage = validationResult.error.errors.find((err) =>
          err.path.includes("questions")
        )?.message || "Invalid input data";
  
        toast.error(`😕 ${errorMessage}`);
        return;
      }
  
      const data = validationResult.data;
  console.log(createSpaceToggle)
      // Perform API action based on toggle state
      const res =
        createSpaceToggle === 0
          ? await handleUpdateSpace(spaceId, data)
          : await handleCreateSpace(data);
  
      if (res.success) {
        toast.success("Space processed successfully!");
        setTimeout(()=>{
          setCreateSpaceToggle(-1)
        },10)
     
      } else {
        toast.error("Space name must be unique.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error(
        `😕 ${error instanceof Error ? error.message : "An unexpected error occurred."}`
      );
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
        style={{
           
          border: "2px solid #ffa500",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="text-sm sm:text-base sm:w-max "
      />
      {loading ? (
        <PulsatingButton className="w-full mt-4 text-green-400 font-medium text-xl">
           Creating...
        </PulsatingButton>
      
      ):(
        <>
        {createSpaceToggle==1 ? (
          <button
          className="w-full hover:bg-[#4B4ACF] bg-blue-500 p-2 rounded mt-10 text-white"
          onClick={handleSubmit}
        >
          Create new Space
        </button>
        ):(
          <>
             <button
          className="w-full hover:bg-[#4B4ACF] bg-blue-500 p-2 rounded mt-10 text-white"
          onClick={handleSubmit}
        >
         Update Space
        </button>
          </>
        )}
        </>

      )}
    
    </>
  );
}
