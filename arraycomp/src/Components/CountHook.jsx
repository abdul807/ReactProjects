import React, { useState } from 'react'

const CountHook = () => {
    const [count, Setcount] = useState(0)
    const addCount = ()=>{
        Setcount(count+1)
    }
  return (
    <div className=''>

        <p>This is the {count} time you are clicking the button</p>
        <button type="button" onClick={addCount}>click me</button>
      
    </div>
  )
}

export default CountHook
