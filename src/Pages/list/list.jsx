import React, { Fragment } from 'react'
import Footer from '../../Component/Body/Footer'
import Navbar from '../../Component/Head/Navbar'
import HeaderHotel from '../hotel/HeaderHotel'
import HotelRoom from './HotelRoom'
import Subcribe from '../../Component/Body/Subcribe'

const list = () => {
    return (
        <Fragment>
          <Navbar/>
          <HeaderHotel/>
          <HotelRoom/>
          <Subcribe/>
          <Footer/>
        </Fragment>
      )
}

export default list
