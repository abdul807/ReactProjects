import React, { useState } from 'react'

const StateManagement = () => {
    const [Name, setName] = useState("John")
    const [buttonClicked, setbuttonClicked] = useState(false)

    const updateName = () =>{
        setName("Alabaama")
        setbuttonClicked(true)

    }
  return (
    <>
    <h1>State Management</h1>   
    <p>This is the updated name {Name}</p>
    <button type="button" onClick={updateName} class = "bg-primary" disabled ={ buttonClicked}>click me</button>
      
    </>
  )
}

export default StateManagement
