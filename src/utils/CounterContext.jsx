import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,{
        count:0,
        name:""
    })
  return (
    <CounterContext.Provider value={{
        state,
        dispatch
    }}>
        {props.children}
    </CounterContext.Provider>
  )
}

