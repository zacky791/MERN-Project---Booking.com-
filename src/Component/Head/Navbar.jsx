import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../UI/Button'

const Navbar = () => {
  const navigator = useNavigate()
  return (
  <section >
    <div className=' bg-blue-900 h-14 flex ' >
      <div className=' container p-8 lg:px-48 mx-auto justify-between flex items-center  '>
      <span className='text-white cursor-pointer' onClick={()=>{navigator('/')}}>Bulatbooking</span>
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
