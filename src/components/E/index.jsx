import React, { useContext } from 'react'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'
import { DECREMENT,RESET,EDIT_NAME } from '../../utils/actions';

const E = () => {
  const {state, dispatch} = useContext(CounterContext);
  return (
    <div className='E'>
      <h2>Fifth</h2>
      <h3>change name here!</h3>
      <input value={state.name} onChange={e=>dispatch({
        type:EDIT_NAME,
        payload:e.target.value
      })}/>
      <button onClick={()=>dispatch({type:DECREMENT})}> Decrement </button>
      <button onClick={()=>dispatch({type:RESET})}> Reset </button>
    </div>
  )
}

export default E