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
  handleSpaceInputs: (name: string, value: string | boolean) => void;
  questions: typeof questionData;
  extraFields: typeof fields;
  setQuestions:React.Dispatch<React.SetStateAction<typeof questionData>>;
  setExtraFields:React.Dispatch<React.SetStateAction<typeof fields>>;

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

  });

  const [questions, setQuestions] = useState<typeof questionData>(questionData);
 
  const [extraFields, setExtraFields] = useState<typeof fields>(fields);

  const handleSpaceInputs = (name: string, value: string | boolean) => {
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
