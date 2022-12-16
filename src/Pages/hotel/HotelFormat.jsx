import React from 'react'
import Button from '../../Component/UI/Button'

const HotelFormat = (props) => {
  return (
    <section>
    <li className='w-2/4 flex flex-col lg:flex-row mx-auto p-4  justify-center space-x-10 mt-10 border-2 border-blue-500 '>
      <img src={props.picture} className=' w-72 h-60' alt='pic'/>
      <div className='flex flex-col'>
      <span className='text-xl font-bold text-blue-700 '>{props.hotelName}</span>
      <span className='text-xs mt-2'>{props.distanceFromCenter} Meter from central point</span>
      <span className='mt-2 text-xs bg-yellow-300 w-24 text-center rounded-md p-1'>{props.free}</span>
      <span className='mt-2 text-sm font-bold'>{props.advantage}</span>
      <span className='mt-2 text-sm'>{props.description}</span>
      <span className='mt-2 text-sm font-bold text-green-600'>{props.extra}</span>
      <span className='mt-2 text-xs text-red-600'>{props.secureText}</span>
      </div>
      <div className='flex flex-col mt-24 items-center '>
        <span className='text-red-500 font-bold'>{props.price}</span>
        <Button className='w-40 mt-4'>See Room</Button>
      </div>
    </li>
    </section>
  )
}

export default HotelFormat
