import { UserAction, UserState } from "@/app/api/types";

export const UserReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "UPDATE_USER_ID":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};