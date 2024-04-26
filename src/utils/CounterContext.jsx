import { createContext,useState } from "react";

export const CounterContext = createContext();

import React from 'react'

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
  return (
    <CounterContext.Provider value={{
        count:count,
        inc:increment,
        dec:decrement,
        reset:reset
    }}>
        {props.children}
    </CounterContext.Provider>
  )
}

