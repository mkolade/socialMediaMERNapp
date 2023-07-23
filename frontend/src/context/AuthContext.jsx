import { createContext, useReducer } from "react";
import  AuthReducer  from "./AuthReducer";

// Check if user data exists in localStorage
const storedUser = localStorage.getItem("socialMediaUser")
  ? JSON.parse(localStorage.getItem("socialMediaUser"))
  : null;

const INITIAL_STATE = {
    user:storedUser,
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)

    return(
        <AuthContext.Provider 
            value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}