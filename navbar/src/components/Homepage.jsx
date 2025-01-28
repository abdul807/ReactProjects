import React, { useState } from 'react'
import './LoginButton'
import './LogoutButton'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Homepage = (props) => {
  
  // const [loggedIn, setIsloggedIn] = useState(false)
  // setIsloggedIn(!loggedIn)

  
  return (
    <div>


    <p>  {props.isloggedIn? <LoginButton  />: <LogoutButton />}</p>


      
      
      
    </div>
  )
}

export default Homepage
