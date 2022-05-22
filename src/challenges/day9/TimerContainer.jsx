import React from 'react'
import { UseTimeContext } from './context';
import TimeControl from './TimeControl';

const TimerContainer = () => {
    const {offset} = UseTimeContext();
  return (
    <div className='relative'>
      <svg height={350} width={350}>
        <circle
          className='circle'
          cx={180}
          cy={180}
          r={160}
          id='outer_circle'
          strokeWidth={15}
          fillOpacity={'0'}
          stroke={'rgb(58, 178, 194)'}
        />
        
        <circle
          className='circle'
          cx={180}
          cy={180}
          r={160}
          id='outer_circle'
          strokeWidth={15}
          strokeDasharray={1005.312}
          strokeDashoffset={offset}
          fillOpacity={'0'}
          stroke={'rgb(81, 89, 113)'}
        />
        
      </svg>
      <TimeControl />
    </div>
  )
}

export default TimerContainer
