import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='absolute lg:top-10 lg:right-20 top-7 right-5'>
      <Link to="/about" className='lg:text-lg text-base hover:text-red-500 hover:underline transition-all duration-100'>about</Link>
      <a href="#work" className='lg:text-lg text-base hover:text-red-500 hover:underline transition-all duration-100 ml-4'>work</a>
    </div>
  )
}

export default Navbar