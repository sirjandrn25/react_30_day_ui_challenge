import React from 'react'
import { UseImageContext } from './context'

const ImageFigure = (props) => {
  const {saveCurrImg} = UseImageContext();

  return (
    <div className='image_frame' onClick={e=>saveCurrImg(props.img_data)}>
        <img src={props.img_data.img} alt="" />
    </div>
  )
}

export default ImageFigure
