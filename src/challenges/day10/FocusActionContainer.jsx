import React from 'react'
import { UseTimeContext } from './context'

const FocusActionContainer = () => {
    const {setTargetTime} = UseTimeContext();
    const [active,setActive] = React.useState('pomodoro');
    React.useEffect(()=>{
      setTargetTime(25);
    },[]);
    const handleFocusTime= (e,time)=>{
      setTargetTime(time);
      if (e.target.id === "pomodoro"){
        setActive('pomodoro');
      }else if(e.target.id==="short_break"){
        setActive('short_break');
      }else{
        setActive('long_break');
      }
     
    }
    
  return (
    <div className='p-4 bg-[#7D81C5] rounded-[82px] w-[950px] flex justify-around'>
        <button className={`h-[60px] text-[32px] font-bold rounded-[82px] px-4 text-white  ${active==='pomodoro'?'bg-[#F03710]':'bg-[#1E2140]'}  hover:bg-[#F03710]`} id="pomodoro" onClick={e=>handleFocusTime(e,25)}>Pomodoro | Focus</button>
        <button className={`h-[60px] text-[32px] font-bold rounded-[82px] px-4 text-white  ${active==='short_break'?'bg-[#F03710]':'bg-[#1E2140]'} hover:bg-[#F03710]`} id="short_break" onClick={e=>handleFocusTime(e,5)}>Short break</button>
        <button className={`h-[60px] text-[32px] font-bold rounded-[82px] px-4 text-white ${active==='long_break'?'bg-[#F03710]':'bg-[#1E2140]'} hover:bg-[#F03710]`} id="long_break" onClick={e=>handleFocusTime(e,20)}>Long break</button>
    </div>
  )
}

export default FocusActionContainer
