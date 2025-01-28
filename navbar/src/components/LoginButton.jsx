import React from 'react'

const LoginButton = () => {
    const handleClick = () => {
        console.log("logged in")

    }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginButton
