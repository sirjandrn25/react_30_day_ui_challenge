import React from 'react'

const Button = (props) => {
  return (
    <button className={`w-[200px] h-[60px] ${props.bg_color} ${props.margin} ${props.text_color} ${props.outline} font-bold rounded-[8px] capitalize`}>
        {props.text}
    </button>
  )
}

export default Button
