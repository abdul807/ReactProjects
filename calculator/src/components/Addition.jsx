import React from 'react'
import { useState } from 'react';

const Addition = () => {
    // const [result, setResult] = useState(0); 
    const add = (e)=>{
        e.preventDefault()
        console.log('hello world')
    }
  return (
    <div>
        {/* <p >{result}</p>  */}

<button onClick={add} >add</button>
      
    </div>
  )
}

export default Addition
