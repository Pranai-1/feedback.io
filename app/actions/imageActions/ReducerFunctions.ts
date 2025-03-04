import { InitialFeedbackType } from "@/app/api/types";
import { Action } from "@/app/api/types";

const initialState:InitialFeedbackType={
  starRating:5,
  name:"",
  email:"",
  reviewText:"",
  consent:false,
  images:[],
  photo:""
}
export function reducer(state:InitialFeedbackType, action:Action):InitialFeedbackType {
    switch (action.type) {
      case "SET_INPUT":
        return {
          ...state,
          [action.key]: action.payload, 
          
        };
        case "RESET_INPUT":
          return initialState
      default:
        return state;
    }
  }
type actionType='SET_INPUT' | 'RESET_INPUT'
  export function handleInputs(type:actionType,key:string, value:string | number | boolean | string[],dispatch:React.Dispatch<Action>) {
    dispatch({ type, key, payload:value }); 
  }