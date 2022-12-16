import React, { Fragment } from 'react'
import Navbar from '../../Component/Head/Navbar'
import Header from '../../Component/Head/Header'
import BodySection from '../../Component/Body/BodySection'
import Subcribe from '../../Component/Body/Subcribe'
import Footer from '../../Component/Body/Footer'

const Home = () => {
  return (
    <Fragment>
      <Navbar/>  
      <Header/>
      <BodySection/>
      <Subcribe/>
      <Footer/>
    </Fragment>
  )
}

export default Home
