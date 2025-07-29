import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/signup'>signup</NavLink></li>
        <li><NavLink to='/login'>login</NavLink></li>
        <li><NavLink to='/dashboard'>dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
