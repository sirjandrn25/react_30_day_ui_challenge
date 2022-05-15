import React from 'react'

import cross_icon from './icons/cross.png'
import { UseImageContext } from './context';


const ImageModel = () => {
    const {handleClose,show,curr_image} = UseImageContext();
    console.log(curr_image)
  return (
    <div className='model_image' style={{display:show?"block":"none"}}>
            <label className='close' onClick={e=>handleClose()}>
              <img src={cross_icon} alt="" />
            </label>
            <img src={curr_image.img} alt="" />
            <div className='image_title'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptatem cum quidem, quis rerum repellat, veritatis odio 
            </div>
        </div>
  )
}

export default ImageModel
