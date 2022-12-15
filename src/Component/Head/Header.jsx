import {faBed, faCalendarDays, faCar, faCocktail, faPerson, faPlane,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'
import Button from "../UI/Button";
import FontIcon from '../UI/FontIcon'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { DateRange } from "react-date-range";


const Header = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <section className=" bg-blue-900">
    <div className=" flex container px-8 lg:px-48  mx-auto gap-6 md:gap-20 ">
    <FontIcon icon={faBed} text='stays'/>
    <FontIcon icon={faPlane} text='Flight'/>
    <FontIcon icon={faCar} text='Car Rental'/>
    <FontIcon icon={faCocktail} text='Attraction'/>
    </div>

    <div className="container px-8 lg:px-48 mx-auto text-white">
    <h1 className="text-3xl mt-8 font-bold"> A lifetime of discounts? It's Genius.</h1>
      <p className="mt-6 ">
        Get rewarded for your travels – unlock instant savings of 10% or
        more with a free Bulatbooking account
      </p>
      <Button className= 'mt-8 mb-12 lg:w-44'>Sign In/ Register</Button>
    </div>

    <section className="md:flex border-solid border-4 border-yellow-500 h-40 md:h-14 
    bg-white container px-8 w-9/12 mx-auto md:justify-between items-center md:space-y-0 space-y-10 text-center ">
      
      <div className=" md:items-center">
      <FontAwesomeIcon icon={faBed} className='text-gray ml-4' />
      <input className="placeholder-gray-800 ml-2 text-xs md:text-base" placeholder='Your destination?'/>
      </div>
    
      <div >
      <FontAwesomeIcon icon={faCalendarDays} className='text-gray ' />
         {/* To change date format to dd/mm/yyyy */}
         <span className="ml-2 text-xs md:text-base ">
            {`${format(date[0].startDate, 'dd/MM/yyyy')} to 
            ${format(date[0].endDate, 'dd/MM/yyyy')} `}
          </span>
      {/* <DateRange
       editableDateInputs={true}
       onChange={item => setDate([item.selection])}
       moveRangeOnFirstSelection={false}
       ranges={date}
       className='absolute'
       /> */}
      </div>
        <div >
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='ml-2 text-xs md:text-base'>2 adults 2 children 1 room</span>
        </div>
        <Button className='mr-4'>Search</Button>
    </section>
    </section>
  )
}

export default Header
