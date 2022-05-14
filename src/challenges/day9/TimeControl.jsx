import React from 'react'
import { UseTimeContext } from './context';

const TimeControl = () => {
    const {curr_time,startTime,resetTime,focus_time} = UseTimeContext();
    const [start,setStart] = React.useState(false);
    React.useEffect(()=>{
      setStart(false);
    },[focus_time]);
    
    const handleStart = ()=>{
        startTime();
        setStart(true);
    }
    const handleReset = ()=>{
        resetTime(focus_time);
        setStart(false);
    }
    

  return (
    <div className='time_control'>
      <span className="count_down_time">
        {curr_time}
      </span>
    <div className="start_reset">
        {!start?<button className='btn_start' onClick={handleStart}>start</button>:<button className={`btn_reset`} onClick={handleReset}>reset</button>}
        
    </div>
    </div>
  )
}

export default TimeControl
