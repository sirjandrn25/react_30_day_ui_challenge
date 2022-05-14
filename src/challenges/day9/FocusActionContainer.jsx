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
    <div className='action_buttons'>
        <button className={active==='pomodoro'?'btn_focus active':'btn_focus'} id="pomodoro" onClick={e=>handleFocusTime(e,25)}>Pomodoro | Focus</button>
        <button className={active==='short_break'?'btn_focus active':'btn_focus'} id="short_break" onClick={e=>handleFocusTime(e,5)}>Short break</button>
        <button className={active==='long_break'?'btn_focus active':'btn_focus'} id="long_break" onClick={e=>handleFocusTime(e,20)}>Long break</button>
    </div>
  )
}

export default FocusActionContainer
