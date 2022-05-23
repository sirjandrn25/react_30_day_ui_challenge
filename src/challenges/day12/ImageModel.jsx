import React from 'react'
import left_arrow from './icons/left-arrow.png';
import right_arrow from './icons/right-arrow.png';
import cross_icon from './icons/cross.png'
import { UseImageContext } from './context';


const ImageModel = () => {
    const {handleClose,show,curr_image,leftSlide,rightSlide} = UseImageContext();
    
  return (
    <div className=' absolute top-0 left-0 h-screen w-screen' style={{display:show?"block":"none"}}>
          <div className='flex flex-row items-center justify-center w-full h-full  bg-black/70' onClick={e=>handleClose()}>
          <div className='w-[1250px] h-[650px] relative ' onClick={e=>e.stopPropagation()}>
              
              <img src={curr_image.img} className='h-full w-full absolute object-cover' alt="" />
              {/* left slider */}
              <label className='bg-black/60 p-2 absolute top-64 left-0' onClick={e=>leftSlide(curr_image)}>
                <img src={left_arrow} className='h-[28px] w-[28px] object-cover cursor-pointer hover:scale-50' alt="" />
              </label>

              {/* right slider  */}
              <label className='bg-black/60 p-2 absolute top-64 right-0' onClick={e=>rightSlide(curr_image)}>
                <img src={right_arrow} className='h-[28px] w-[28px] object-cover cursor-pointer hover:scale-50' alt="" />
              </label>
              <label className='absolute right-2 top-2 h-[32px] w-[32px]  cursor-pointer' onClick={e=>handleClose()}>
                <img src={cross_icon} className='object-cover '  alt="" />
              </label>
              <div className='absolute bottom-2 px-4 w-full text-[32px] text-white font-bold'>
              Leverage agile frameworks to provide a robust synopsis for high level overviews.
              </div>
          </div>  
          </div>
    </div>
  )
}

export default ImageModel
