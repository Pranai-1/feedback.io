import { InitialFeedbackType } from "@/app/api/types";
import { Action } from "@/app/api/types";


export function reducer(state:InitialFeedbackType, action:Action):InitialFeedbackType {
    switch (action.type) {
      case "SET_INPUT":
        return {
          ...state,
          [action.key]: action.payload, 
        };
      default:
        return state;
    }
  }

  export function handleInputs(key:string, value:string | number | boolean | string[],dispatch:React.Dispatch<Action>) {
    dispatch({ type: "SET_INPUT", key, payload:value }); 
  }