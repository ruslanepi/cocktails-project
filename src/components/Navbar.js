import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <span className='logo'>logo</span>
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
