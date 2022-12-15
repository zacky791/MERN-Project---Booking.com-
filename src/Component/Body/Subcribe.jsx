import React from 'react'
import Button from '../UI/Button'

const Subcribe = () => {
  return (
    <section className='bg-blue-900'>
    <div  className=' h-48 container mx-auto flex items-center flex-col justify-center'>
      <h1 className='text-white mb-5 text-xl font-bold'>Want to know the latest promo ?</h1>
      <p className='text-white mb-5'>Sign up and we send directly to your email !</p>
      <div>
      <input placeholder='Your Email' className='w-56 h-9 mr-4 placeholder:text-center'/>
      <Button>Subcribe</Button>
      </div>
    </div>
    </section>
  )
}

export default Subcribe
