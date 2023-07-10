import { createContext, useReducer } from "react";
import  AuthReducer  from "./AuthReducer";

const INITIAL_STATE = {
    user:{
        _id:"648f414f9ea807a0c753e5af",
        username:"jane",
        email:"jane@gmail.com",
        password:"$2b$10$YlHagLxgfLNt0QESwlGF4.RfciDzQQganN4NM3Hrto8.ErHONCClK",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        following:[],
        isAdmin:false,
    },
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