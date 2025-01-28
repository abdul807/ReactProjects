import React from 'react'
import './Age.css'
import { useState } from 'react'

const Age = () => {
    // const [nameAge, Setname] = useState([{

    // }])
    const [age, Setage] = useState(0)
    const [name, Setname] = useState("")
    // const [result, Setresult] = useState("")
  
    const handleclick = (e) =>{
       try {
        e.preventDefault()

        alert(`${name} - ${age}`)

    
        Setname("")
        Setage("")

        


        
       } catch (error) {
        alert("please enter a number")
       }
    }
  return (
    <div className='feedback-form'>
        <h2>Tracklist</h2>
        <input type="text" value={name} onChange={(e)=> Setname(e.target.value)} id="" />
        <input type="number" value={age} onChange={(e)=> Setage(e.target.value)}id="" />
        <button disabled={!name} onClick={handleclick}>Add </button>
        {/* <p>{result}</p> */}
        
      
    </div>
  )
}

export default Age
