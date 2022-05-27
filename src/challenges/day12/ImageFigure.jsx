import React from 'react'
import { UseImageContext } from './context'

const ImageFigure = (props) => {
  const {saveCurrImg} = UseImageContext();

  return (
    <div className='col-1 h-[512px] w-full hover:cursor-pointers' onClick={e=>saveCurrImg(props.img_data)}>
        <img src={props.img_data.img} className='w-full h-full transition ease-in-out delay-150 hover:scale-105' alt="" />
    </div>
  )
}

export default ImageFigure
