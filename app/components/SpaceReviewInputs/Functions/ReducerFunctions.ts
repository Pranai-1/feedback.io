import { InitialStateType } from "@/app/api/types";
import { Action } from "@/app/api/types";


export function reducer(state:InitialStateType, action:Action):InitialStateType {
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

