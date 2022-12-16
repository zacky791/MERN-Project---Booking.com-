import React from 'react'

const Button = (props) => {
  return (
    <button 
    className={`text-white rounded-xl bg-blue-400 w-20 h-8 cursor-pointer ${props.className}`} 
    onClick={props.onClick}
    disabled={props.disable}>
        {props.children}
    </button>
  )
}

export default Button
