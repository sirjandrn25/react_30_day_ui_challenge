import React from 'react'
import { UseImageContext } from './context';
import ImageFigure from './ImageFigure';
const ImageList = () => {
    const {images,show} = UseImageContext();
  return (
    <div className={`grid grid-cols-3 gap-0 w-screen ${show?'h-screen overflow-hidden':'h-auto'}`}>
      {images.map((img)=>{
            return <ImageFigure img_data={img} key={img.id} />
        })}
    </div>
  )
}

export default ImageList;
