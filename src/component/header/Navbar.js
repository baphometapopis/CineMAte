import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
    <NavLink to='/'  className='link' end><li>Home</li></NavLink>
    <NavLink to='movies/Popular'  className='link'><li>Popular</li></NavLink>
    <NavLink to='movies/Top-Rated'  className='link'><li>Top Rated</li></NavLink>
    <NavLink to='movies/Upcoming'  className='link'><li>Upcoming</li></NavLink>

    
  </>
    )
}
