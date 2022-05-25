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
    <div className='absolute top-24 left-24 flex flex-col justify-center items-center'>
      <span className="text-[70px] mb-4 font-bold text-white border-b-2 border-blue-900">
        {curr_time}
      </span>
    <div className="start_reset">
        {!start?<button className='text-[32px] bg-blue-300 text-white px-2 rounded-md' onClick={handleStart}>start</button>:<button className={`text-[32px] bg-orange-500 text-white px-2 rounded-md`} onClick={handleReset}>reset</button>}
        
    </div>
    </div>
  )
}

export default TimeControl
