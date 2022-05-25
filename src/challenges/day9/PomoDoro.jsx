import React, { useState,useEffect } from 'react'

import FocusActionContainer from './FocusActionContainer';
import TimerContainer from './TimerContainer';
import { TimeProvider, UseTimeContext } from './context';

const PomoDoro = () => {
  useEffect(()=>{
    document.title = "pomodoro"
  },[]);
    
    
  return (
      <TimeProvider>
        <div className='h-screen w-screen bg-blue-700 flex items-center justify-center'>
          <div className='w-[1259px] min-h-[600px] bg-[#c3d3f3] rounded-[32px] flex flex-col justify-center items-center'>
              <FocusActionContainer />
              <TimerContainer />
              
              <span className='text-[27px] text-[#5D5FEF] font-bold mt-3'>
                STAY FOCUSED. WORK HARD. KEEP GRIDING!
              </span>
              <SuccessContainer />
              
          </div>
        </div>
        
      </TimeProvider>
    
  )
}

const SuccessContainer = ()=>{
  const {curr_time} = UseTimeContext();
  return (
      curr_time==='00:00'?<span className="text-[#F03710] text-[33px] font-bold uppercase">you got this !</span>:''
  )
}

export default PomoDoro
