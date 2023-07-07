import { createContext } from "react";

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error:null
}

export const authContext = createContext(INITIAL_STATE)