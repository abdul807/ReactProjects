import React, { useState } from 'react'

const Items = () => {
    const [seasons, setSeason] = useState(['spring','autum'])
    const [inputValue, setInputValue] = useState('')

    const addItem = () =>{
        setSeason([...seasons, inputValue])
        setInputValue("")

    }

    const removeItem = (index) =>{

        const newitems = [...Items]
        newitems.splice(index, 1);
        setSeason(newitems)
        // setSeason(seasons.filter((item, index) => index !== seasons.indexOf(inputValue)))

    } 
  return (
    <div>

        
        <h1>Seasons</h1>
        <ul>

            {seasons.map((season, index)=>{
                return (
                    <li key={index}>{season} <button onClick={()=> removeItem(index)}>remove me</button>
                    </li>
                )
            })}

        </ul>
        <input type="text" name={inputValue} id="" onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
      
    </div>
  )
}

export default Items
