import React from 'react'

import "./css/style.css";
import { ImageProvider } from './context';
import ImageList from './ImageList';

import ImageModel from './ImageModel';


const ImageGalleryContainer = () => {
    
  return (
    <ImageProvider>
        <div className="main_container">
        <div className='gallery_container'>
        
        
        <ImageList />
        <ImageModel />
      </div>
        </div>
    </ImageProvider>
    
  )
}

export default ImageGalleryContainer
