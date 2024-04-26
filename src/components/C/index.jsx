import React, { useContext } from 'react'
import D from "../D"
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

const C = () => {
  const{inc} =useContext(CounterContext)
  return (
    <div className='C'>
        <h2>Third</h2>
        <button onClick={inc}>Increment</button>
        <D/>
    </div>
  )
}

export default C