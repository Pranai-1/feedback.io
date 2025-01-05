import { SetStateAction } from "react";

export function handleEdit(setCreateSpaceToggle:React.Dispatch<SetStateAction<number>>,
    setOpenDetailsCard:React.Dispatch<SetStateAction<string>>,id:string) {
    localStorage.removeItem("space")
     localStorage.setItem("space",id)
    setCreateSpaceToggle(0); 
    setOpenDetailsCard(""); 
   
}



export const handleCopy = async (path: string, toast: {
  success: (message: string) => void;
  error: (message: string) => void;
}) => {
  try {
    await navigator.clipboard.writeText(path);
    toast.success("✅ Link copied to clipboard!");
  } catch (error) {
    toast.error("Failed to copy link");
    console.error("Failed to copy text:", error);
  }
};


  

