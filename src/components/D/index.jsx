import React, { useContext } from 'react'
import E from "../E"
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

const D = () => {
  const {state} = useContext(CounterContext)
  return (
    <div className='D'>
        <h2>Fourth count:{state.count}</h2>
        <E/>
    </div>
  )
}

export default D