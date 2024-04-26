import React, { useContext } from 'react'
import C from '../C'
import "./style.css"
import { CounterContext } from '../../utils/CounterContext'

const B = () => {
  const {state} = useContext(CounterContext)
  return (
    <div className='B'>
        <h2>Second Name:{state.name}</h2>
        <C/>
    </div>
  )
}

export default B