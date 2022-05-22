import React, { useState } from 'react'

import FocusActionContainer from './FocusActionContainer';
import TimerContainer from './TimerContainer';
import { TimeProvider } from './context';

const PomoDoro = () => {

    
    
  return (
      <TimeProvider>
        <div className='main_container'>
          <div className='pomodoro_container'>
              <FocusActionContainer />
              <TimerContainer />
              
              <span className='display_message'>
                STAY FOCUSED. WORK HARD. KEEP GRIDING!
              </span>
          </div>
        </div>
        
      </TimeProvider>
    
  )
}

export default PomoDoro
