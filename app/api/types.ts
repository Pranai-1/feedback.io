import { ReactNode, SetStateAction } from "react";
import { fields, questionData } from "../static/simpleData";

export type Option = {
  label: string;
  value: string;
};


export type Options = Option[];

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
    maxChar:string,
    disableCheersImage:boolean,
    videoDuration:string,
    consent:string,
    thankyouTitle:string,
    thankyouDescription:string
  };
  
  export type SpaceBody = {
    userId:string;
    spaceName: string;
    questions:string[];
    spaceLogo: string;
    headerTitle: string;
    customMessage: string;
    collectStarRatings: boolean;
    darkTheme: boolean;
    collectionType: string;
    videoButtonText:string,
    textButtonText:string,
    maxChar:string,
    disableCheersImage:boolean,
    videoDuration:string,
    consent:string,
    thankyouTitle:string,
    thankyouDescription:string
  };

  export type SpaceCreationDetailsType = {
    spaceInputs: SpaceInputs;
    handleSpaceInputs: (name: string, value: string | boolean) => void;
    questions: typeof questionData;
    extraFields: typeof fields;
    setQuestions:React.Dispatch<React.SetStateAction<typeof questionData>>;
    setExtraFields:React.Dispatch<React.SetStateAction<typeof fields>>;
  
  };


 export type UserContextType = {
   userId: string | null;
   updateUserIdStatus: (userId: string | null) => void;
 };
 
 

 export type UserState = {
   userId: string | null;
 };
 

 export type UserAction = {
   type: "UPDATE_USER_ID";
   payload: string | null;
 };

  export type SpaceCreationProviderProps = {
    children: ReactNode;
  }






  export interface InputComponentProps {
    title: string;
    placeholder: string;
    id: number;
    clicked: number;
    setClicked: React.Dispatch<SetStateAction<number>>;
    type: string;
    name: string;
    required:boolean;
    value:string;
    handleSpaceInputs: (name: string, value: string | boolean) => void;
  }
 

  export type SpacePropType = {
    headerTitle: string;
    spaceLogo: string;
    userId: string;
    spaceName: string;
    customMessage: string;
    questions: string[];
    collectionType: string;
    darkTheme: boolean;
    videoButtonText: string;
    createdAt: Date;
  };
  