import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>

       <Link to={'/'}>Movies</Link>

       <Link to={'/'}>Home</Link>
       <Link to={'/favorites'}>Favorite</Link>
 
    </div>
  )
}

export default Nav
