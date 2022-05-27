import React from 'react'

const Avatar = (props) => {
  return (
    
      <div className={`${props.size?props.size:"h-[48px] w-[48px]"} relative  p-[2px] rounded-full border-2 ${props.margin} ${props.outline?props.outline:'border-white'} object-cover`}>
          <img src={props.img} className={`h-full w-full`} alt="" />
          {props.status?<span className={`h-2 w-2 rounded-full ${props.status} absolute bottom-1 right-1`}></span>:null}
          
      </div>
    
  )
}

export default Avatar
