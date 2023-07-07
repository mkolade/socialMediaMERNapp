import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error:null
}

export const authContext = createContext(INITIAL_STATE)

export const authContextProvider = () =>{
    const [state,dispatch] = useReducer(authReducer,INITIAL_STATE)

    return(
        <authContext.Provider 
            value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch
            }}
        >

        </authContext.Provider>
    )
}