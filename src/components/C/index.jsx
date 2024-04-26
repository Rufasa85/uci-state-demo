import React, { useContext } from 'react'
import D from "../D"
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'
import { INCREMENT } from '../../utils/actions'

const C = () => {
  const{dispatch} =useContext(CounterContext)
  return (
    <div className='C'>
        <h2>Third</h2>
        <button onClick={()=>dispatch({type:INCREMENT})}>Increment</button>
        <D/>
    </div>
  )
}

export default C