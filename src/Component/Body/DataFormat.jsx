import React from 'react'

const DataFormat = (props) => {

  return (
    <li>
      <img src={props.picCountry} className=' w-48 h-52'/>
      <p className='w-48'>Country: {props.country}</p>
      <p>Attraction: {props.attraction}</p>
      <p>Hotels: {props.hotels}</p>
    </li>
  )
}

export default DataFormat
