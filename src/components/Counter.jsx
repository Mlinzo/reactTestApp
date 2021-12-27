import React, { useState } from 'react'
import '../styles/App.css'

const Counter = function () {

    const [count, setCount] = useState(0)

    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}

    return (
        <div>
            <div className='counter'>
                <h1>Function Counter</h1>
                <h1>{count}</h1>
                <button onClick={increment}>Up</button>
                <button onClick={decrement}>Down</button>
            </div>
            <hr/>
        </div>
    )
}

export default Counter;