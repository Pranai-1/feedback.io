import { createContext, useState, ReactNode } from "react";
import { fields, questionData } from "../static/simpleData";


type SpaceInputs = {
  spaceName: string;
  spaceLogo: string;
  headerTitle: string;
  customMessage: string;
  collectStarRatings: boolean;
  darkTheme: boolean;
  collectionType: string;
};

type SpaceCreationDetailsType = {
  spaceInputs: SpaceInputs;
  handleSpaceInputs: (name: string, value: string) => void;
  questions: typeof questionData;
  extraFields: typeof fields;
  setQuestions:(newQuestions: typeof questionData)=>void

};

export const SpaceCreationDetails = createContext<SpaceCreationDetailsType>({
  spaceInputs: {
    spaceName: "",
    spaceLogo: "",
    headerTitle: "",
    customMessage: "",
    collectionType:"both",
    collectStarRatings:true,
    darkTheme:false,
  },
  handleSpaceInputs: () => {},
  questions: questionData,
  setQuestions:()=>{},
  extraFields: fields,
 
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

  });

  const [questions, setQuestions] = useState(questionData);
 
  const [extraFields, setExtraFields] = useState(fields);

  const handleSpaceInputs = (name: string, value: string) => {
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
      
      }}
    >
      {children}
    </SpaceCreationDetails.Provider>
  );
}
