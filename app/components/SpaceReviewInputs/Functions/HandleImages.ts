import { Action } from "@/app/api/types";

export default function handleImages(
    inputType:string,
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: React.Dispatch<Action>){
      
        const files=e.target.files
       if(!files)
        return

       const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Allowed formats
       const maxSizeInMB = 3;

       for(let i=0;i<files.length;i++){
       const file=files[i]
    //    if(!validImageTypes.con)
       }
  
}