import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PomoDoro from './challenges/day9/PomoDoro';
import ImageGalleryContainer from './challenges/day12/ImageGalleryContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/day9-pomodoro' element={<PomoDoro />} />
        <Route path='/day12-image_gallery' element={<ImageGalleryContainer/>} />
        <Route path="*" element={
          <main>
            HTTP404 Error
          </main>
        } />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
)
