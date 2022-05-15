import React from 'react'
import { UseImageContext } from './context';
import ImageFigure from './ImageFigure';
const ImageList = () => {
    const {images} = UseImageContext();
  return (
    <div className='image_grid'>
      {images.map((img)=>{
            return <ImageFigure img_data={img} />
        })}
    </div>
  )
}

export default ImageList;
