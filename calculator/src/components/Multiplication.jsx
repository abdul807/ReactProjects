import React from 'react'

const Multiplication = () => {
    const multiply = (e)=>{
        e.preventDefault()
        console.log('hello world')
    }
  return (
    <div>

<button onClick={multiply} >multiply</button> 
      
    </div>
  )
}

export default Multiplication
