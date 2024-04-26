import React, { useContext, useState } from 'react'
import B from '../B'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

const A = () => {
  const {state} = useContext(CounterContext);
  return (
    <div className='A'>
        <h2>First count:{state.count}</h2>
        <B/>
    </div>
  )
}

export default A