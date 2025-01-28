import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, SetCounter] = useState(0)

    // const handleClick = () =>{
    //     SetCounter(counter+1)
        
    // }
  return (
    <div>
        <p>Count: {counter}</p>
        <button onClick={()=>SetCounter(counter+1)}>Add more</button>
      
    </div>
  )
}

export default Counter
