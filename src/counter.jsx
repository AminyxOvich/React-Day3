import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    const increament = () =>{
        setCount(count + 1);
    }

    const decreament = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decreament}>Decreament</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increament}>Increament</button>
        </div>
    )
}

export default Counter;