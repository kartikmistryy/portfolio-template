import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-10 right-20'>
      <a href="/about" className='text-lg'>about</a>
      <a href="#work" className='text-lg ml-6'>work</a>
    </div>
  )
}

export default Navbar