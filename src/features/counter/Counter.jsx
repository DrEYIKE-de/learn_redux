import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, IncrementByAmount } from './CounterSlice'








const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [number, setNumber] = useState("")

    const IncrementBy = () => {
        if (number) {
            dispatch(IncrementByAmount(parseInt(number)))
        }
    }


    return (
        <div >
            <div className="">
                <button onClick={() => dispatch(Increment())} >Increment</button>
            </div>
            <div className="">
                {count}
            </div>
            <div className="">
                <button onClick={() => dispatch(Decrement())} >Decrement</button>
            </div>
            <label htmlFor="number">Add an increasing number </label>
            <input type="text" name="number" value={number} onChange={e => setNumber(e.target.value)} id="number" />

            <button onClick={IncrementBy} > Add {number !== "" && <span>{number}</span>}</button>


        </div>
    )
}

export default Counter