import React, { useReducer } from "react";
import { createContext } from "react";
import { AppReducer } from "./AppReducer";
export const myContext = createContext({})
export const MyProvider =({children})=>{
    const [eq,dispatch] = useReducer(AppReducer,'')
    function addInput(item){
       dispatch({
        TYPE:item,
       })
    }
    return(
        <myContext.Provider value={{
            eq:eq,
            addInput,
        }}>
            
        {children}
        </myContext.Provider>
    )
}