import React, { useContext } from 'react'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

const E = () => {
  const {dec,reset} = useContext(CounterContext);
  return (
    <div className='E'>
      <button onClick={dec}> Decrement </button>
      <button onClick={reset}> Reset </button>
        <h2>Fifth</h2>
    </div>
  )
}

export default E