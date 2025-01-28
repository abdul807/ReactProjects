import React, { useState } from 'react'
import CountHook from './CountHook'

const ArrayComponents = () => {
    const [items, Setitems] = useState("")

    const [inputValue, setInputValue] = useState("")

    const addItem = () =>{
        Setitems([...items, inputValue]);
        setInputValue("")
    }

  return (
    <div>
      <h2>Frontend Languagues</h2>
      {items.length > 0 ? 

      <ul>
        {items.map((item, index)=>{
            return (
                <li key={index}>{item}</li>
            )
        })}
      </ul>
      
      : "No language "}


      <input type="text" name={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={addItem}>Add</button>

      <CountHook/>
      
    </div>
  )
}

export default ArrayComponents
