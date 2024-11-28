import { ReactNode } from "react";
import { fields, questionData } from "../static/simpleData";

export  type Options = {
    [key: string]: string;
  };

  export type SpaceInputs = {
    spaceName: string;
    spaceLogo: string;
    headerTitle: string;
    customMessage: string;
    collectStarRatings: boolean;
    darkTheme: boolean;
    collectionType: string;
    videoButtonText:string,
    textButtonText:string,
    maxChar:string
  };
  
  export type SpaceCreationDetailsType = {
    spaceInputs: SpaceInputs;
    handleSpaceInputs: (name: string, value: string | boolean) => void;
    questions: typeof questionData;
    extraFields: typeof fields;
    setQuestions:React.Dispatch<React.SetStateAction<typeof questionData>>;
    setExtraFields:React.Dispatch<React.SetStateAction<typeof fields>>;
  
  };

  export type SpaceCreationProviderProps = {
    children: ReactNode;
  };

 