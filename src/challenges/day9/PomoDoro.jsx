import React, { useState } from 'react'
import './css/style.css'
import FocusActionContainer from './FocusActionContainer';
import TimerContainer from './TimerContainer';
import { TimeProvider } from './context';

const PomoDoro = () => {

    
    
  return (
      <TimeProvider>
        <div className='pomodoro_container'>
            <FocusActionContainer />
            <TimerContainer />
            
            <span className='display_message'>
              STAY FOCUSED. WORK HARD. KEEP GRIDING!
            </span>
        </div>
      </TimeProvider>
    
  )
}

export default PomoDoro
