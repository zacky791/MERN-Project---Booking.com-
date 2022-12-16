import React, { Fragment } from 'react'
import Navbar from '../../Component/Head/Navbar'
import HeaderHotel from './HeaderHotel'
import HotelDisplay from './HotelDisplay'

const hotel = () => {
  return (
    <Fragment>
      <Navbar/>
      <HeaderHotel/>
      <HotelDisplay/>
    </Fragment>
  )
}

export default hotel
