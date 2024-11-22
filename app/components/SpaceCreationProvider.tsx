import { createContext, useState } from "react"
import { questionData } from "../static/simpleData"

export const spaceCreationDetails=createContext({
    spaceName:"",
    spaceLogo:"",
    headerTitle:"",
    customMessage:"",
    questions:questionData,
   

})

export default function SpaceCreationProvider(){
    
const[questions,setQuestions]=useState(questionData)

    return(
        <>
        </>
    )
}