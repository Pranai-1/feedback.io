import { createContext, useState, ReactNode } from "react";
import { fields, questionData } from "../static/simpleData";
import { SpaceCreationDetailsType, SpaceInputs } from "../api/types";



export const SpaceCreationDetails = createContext<SpaceCreationDetailsType>({
  spaceInputs: {
    spaceName: "",
    spaceLogo: "",
    headerTitle: "",
    customMessage: "",
    collectionType:"both",
    collectStarRatings:true,
    darkTheme:false,
    videoButtonText:"Record a video",
    textButtonText:"Send in text",
    maxChar:"",
    disableCheersImage:false,
    videoDuration:"120 seconds",
    consent:'Required',
     thankyouTitle:"Thank you!",
    thankyouDescription:"Thank you so much for your shoutout! It means a ton for us! 🙏"
  },
  handleSpaceInputs: () => {},
  questions: questionData,
  setQuestions:()=>{},
  extraFields: fields,
  setExtraFields:()=>{},
 
});

type SpaceCreationProviderProps = {
  children: ReactNode;
};

export default function SpaceCreationProvider({ children }: SpaceCreationProviderProps) {
  const [spaceInputs, setSpaceInputs] = useState<SpaceInputs>({
    spaceName: "",
    spaceLogo: "",
    headerTitle: "",
    customMessage: "",
    collectionType:"both",
    collectStarRatings:true,
    darkTheme:false,
    videoButtonText:"Record a video",
    textButtonText:"Send in text",
    maxChar:"",
    disableCheersImage:false,
     videoDuration:"120 seconds",
    consent:'Required',
  thankyouTitle:"Thank you!",
    thankyouDescription:"Thank you so much for your shoutout! It means a ton for us! 🙏"
  });

  const [questions, setQuestions] = useState<typeof questionData>(questionData);
 
  const [extraFields, setExtraFields] = useState<typeof fields>(fields);

  const handleSpaceInputs = (name: string, value: string | boolean) => {
    console.log(name,value)
    setSpaceInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
   
  };

  return (
    <SpaceCreationDetails.Provider
      value={{
        spaceInputs,
        handleSpaceInputs,
        questions,
        setQuestions,
        extraFields,
        setExtraFields
      
      }}
    >
      {children}
    </SpaceCreationDetails.Provider>
  );
}
