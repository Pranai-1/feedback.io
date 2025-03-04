import { ReactNode, SetStateAction } from "react";
import { fields, questionData } from "../static/simpleData";
import { IconType } from "react-icons/lib";

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
  
  // export type SpaceBody = {
  //   userId:string;
  //   spaceName: string;
  //   questions:string[];
  //   spaceLogo: string;
  //   headerTitle: string;
  //   customMessage: string;
  //   collectStarRatings: boolean;
  //   darkTheme: boolean;
  //   collectionType: string;
  //   videoButtonText:string,
  //   textButtonText:string,
  //   maxChar:string,
  //   disableCheersImage:boolean,
  //   videoDuration:string,
  //   consent:string,
  //   thankyouTitle:string,
  //   thankyouDescription:string
  // };

  export type SpaceCreationDetailsType = {
    spaceInputs: SpaceInputs;
    handleSpaceInputs: (name: string, value: string | boolean) => void;
    questions: typeof questionData;
    extraFields: typeof fields;
    setQuestions:React.Dispatch<React.SetStateAction<typeof questionData>>;
    setExtraFields:React.Dispatch<React.SetStateAction<typeof fields>>;
    setSpaceInputs:React.Dispatch<React.SetStateAction<SpaceInputs>>;
  
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
  

  /* eslint-disable @typescript-eslint/no-explicit-any */
  export type SpacePropType = {
    id: string;
    spaceName: string;
    userId: string;
    spaceLogo: string;
    headerTitle: string;
    customMessage: string;
    questions: any  // eslint-disable-line @typescript-eslint/no-explicit-any
    createdAt: Date;
    collectionType: string;
    darkTheme: boolean;
    videoButtonText: string;
    textButtonText: string;
    disableCheersImage: boolean;
    thankyouTitle: string;
    thankyouDescription: string;
    reviews:FeedbackPropType[]
    wallOfLove:WallOfLoveProp[]
  };
  
  export type MergedObject = {
    spaceName: string;
    spaceLogo: string;
    headerTitle: string;
    customMessage: string;
    collectionType:string;
    collectStarRatings: boolean;
    darkTheme: boolean;
    videoButtonText: string;
    textButtonText: string;
    maxChar: string
    disableCheersImage: boolean;
    videoDuration: string;
    consent: string;
    thankyouTitle: string;
    thankyouDescription: string;
    id?: string;
    userId?: string; // Optional field if you plan to delete it dynamically
    questions?: {
        id: number;
        label: string;
    }[];
    createdAt?: Date; // ISO date string
};


export type BaseFeedbackType = {
  starRating: number;
  name: string;
  email: string;
  reviewText: string;
  consent: boolean;
  images: string[];
  photo: string;
};

export type InitialFeedbackType = BaseFeedbackType;

export type FeedbackPropType = BaseFeedbackType & {
  readonly id: string;
  spaceId:string
  submittedAt:Date
};


export type Action = { type: 'SET_INPUT' | "RESET_INPUT"; payload: string | number | boolean | string[] ; key:string }


export interface QuestionType{
  
    id: number;
    label: string;

}

export type FeedbackSideBarNavElement=
  {label: string,  id:number, icon: IconType  }


  export type WallOfLoveProp={
    id:string,
    spaceId:string,
    reviewId:string
  }