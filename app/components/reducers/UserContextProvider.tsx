import { createContext, useCallback, useEffect, useReducer } from "react";
import axios from "axios";
import { UserContextType, UserState } from "@/app/api/types";
import { UserReducer } from "./reducer";


 const userContext = createContext<UserContextType>({
  userId: null,
  updateUserIdStatus: () => {}, 
});




const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
 
  const initialState: UserState = {
    userId: null,
  };


  const [state, dispatch] = useReducer(UserReducer, initialState);


  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = useCallback(async () => {
    try {
      const response = await axios.get("/api/userDetails");
      const userId = response.data.userId;
      updateUserIdStatus(userId);
    } catch {
      updateUserIdStatus(null);
    }
  }, []);


  const updateUserIdStatus = useCallback(
    (userId: string | null) => {
      dispatch({ type: "UPDATE_USER_ID", payload: userId });
    },
    [dispatch]
  );

  return (
    <userContext.Provider value={{ userId: state.userId, updateUserIdStatus }}>
      {children}
    </userContext.Provider>
  );
};

export { UserContextProvider, userContext };
