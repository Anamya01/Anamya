import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
function Main() {
  return (
    <div className='gradient'>
        <div className='info'>I'm a 4th year computer science student.</div>
        <div className='year'>2024-2025</div>
        <div className='links'>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/projects'>Projects</Link>
        </div>
        <div className='name'>Anamya.</div>
    </div>
  )
}

export default Main