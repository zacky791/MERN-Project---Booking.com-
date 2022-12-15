import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontIcon = (props) => {
  return (
    <div className='text-white space-x-2 mt-5'>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </div>
  )
}

export default FontIcon
