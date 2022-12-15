import React from 'react'
import Button from '../UI/Button'

const Navbar = () => {
  return (
  <section >
    <div className=' bg-blue-900 h-14 flex ' >
      <div className=' container mx-auto justify-between flex items-center  '>
      <span className='text-white'>Bulatbooking</span>
        <div className=' flex gap-2'>
          <Button>Register</Button>
          <Button>Log In</Button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Navbar
