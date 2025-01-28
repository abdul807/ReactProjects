import React, { useState } from 'react'

const Resetting = () => {
    
    const [Message, SetMessage] = useState('hello')
    // const [InputValue, SetInputValue] = useState()

    const handleClick = (e)=>{
        SetMessage(e.target.value)

    }
  return (
    <div>

        <input type="text" name="" id="" value={Message} onChange={handleClick} /> <br />
        <p>This is what you typed: {Message}</p>
        <button onClick={()=>SetMessage("hello")}>Reset</button>
      
    </div>
  )
}

export default Resetting
