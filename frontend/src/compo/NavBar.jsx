import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-[100%] flex items-center justify-center h-[50px] md:h-[70px] z-10'>
      {/* <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/signup'>signup</NavLink></li>
        <li><NavLink to='/login'>login</NavLink></li>
        <li><NavLink to='/dashboard'>dashboard</NavLink></li>
      </ul> */}
      {/* Header */}
      <header className="w-full max-w-6xl py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">📝 DevBlog</h1>
        <div>
          <Link to="/login" className="mr-4 text-blue-600 hover:underline">Login</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</Link>
        </div>
      </header>
    </div>
  )
}

export default NavBar
