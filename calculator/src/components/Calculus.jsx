import React, { useState } from 'react'

const Calculus = () => {
    const [ValueA, setValueA] = useState(0)
    const [ValueB, setValueB] = useState(0)
    const [Result, setResult] = useState(0)
    

    const Add = () =>{
        setResult(ValueA + ValueB)
        setValueA(0)
        setValueB(0)
    }

    const Multiply = () =>{
        setResult(ValueA * ValueB)
        setValueA(0)
        setValueB(0)

    }
  
  return (
    <div>
      <input type="number" value={ValueA} onChange={(e)=> setValueA(parseInt(e.target.value))}/> <br />
      <input type="number" value = {ValueB} onChange={(e)=> setValueB(parseInt(e.target.value))} />

      <p>{Result}</p>

      <button onClick={Add}>Addition</button>
      <button onClick={Multiply}>Multiplication</button>



      
    </div>
  )
}

export default Calculus
