import React from 'react'

import "./css/style.css";
import { ImageProvider } from './context';
import ImageList from './ImageList';

import ImageModel from './ImageModel';


const ImageGalleryContainer = () => {
    
  return (
    <ImageProvider>
        <div className='gallery_container'>
        
        
          <ImageList />
          <ImageModel />
        </div>
    </ImageProvider>
    
  )
}

export default ImageGalleryContainer
