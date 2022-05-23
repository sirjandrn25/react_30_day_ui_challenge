import React from 'react'


import { ImageProvider } from './context';
import ImageList from './ImageList';

import ImageModel from './ImageModel';


const ImageGalleryContainer = () => {
    
  return (
    <>
      <ImageProvider>
        <div className='bg-black w-screen relative '>
          <ImageList />
          <ImageModel />
        </div>

      </ImageProvider>
    </>
    
  )
}

export default ImageGalleryContainer
