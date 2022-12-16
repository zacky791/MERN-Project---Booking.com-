import React from 'react'
import {faBed, faCar, faCocktail, faPlane,} from "@fortawesome/free-solid-svg-icons";
import FontIcon from '../../Component/UI/FontIcon';

const HeaderHotel = () => {
  return (
    <section className=" bg-blue-900 ">
    <div className=" flex container px-8 lg:px-48  mx-auto gap-6 md:gap-20 ">
    <FontIcon icon={faBed} text='stays'/>
    <FontIcon icon={faPlane} text='Flight'/>
    <FontIcon icon={faCar} text='Car Rental'/>
    <FontIcon icon={faCocktail} text='Attraction'/>
    </div>
    <span>.</span>
    </section>
  )
}

export default HeaderHotel
