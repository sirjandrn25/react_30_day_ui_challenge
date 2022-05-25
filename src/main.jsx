import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PomoDoro from './challenges/day10/PomoDoro';
import ImageGalleryContainer from './challenges/day12/ImageGalleryContainer';
import InputSeparatorContainer from './challenges/day15/InputSeparatorContainer';
import AdviceContainer from './challenges/day16/AdviceContainer';
import Week2Container from './challenges/day14-week2/Week2Container';

import {BrowserRouter,Route,Routes} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}  />
        <Route path='/day10-pomodoro' element={<PomoDoro />} />
        <Route path='/day12-image-gallery' element={<ImageGalleryContainer/>} />
        <Route path='/day14-weekend-project' element={<Week2Container />} />
        <Route path='/day15-input-separator' element={<InputSeparatorContainer />} />
        <Route path='/day16-advice-generator' element={<AdviceContainer />} />
        <Route path="*" element={
          <main>
            HTTP404 Error
          </main>
        } />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
