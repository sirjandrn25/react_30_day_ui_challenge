import React from "react";


const TimeContext = React.createContext({
    startTime: ()=>{},
    resetTime: ()=>{}
})
let interval;
export const TimeProvider = ({children})=>{

    const [offset,setOffset] = React.useState(0);
    const [focus_time,setFocusTime] = React.useState(1);
    const [curr_time,setCurrTime] = React.useState('25:00');
    

    
    const startTime = ()=>{
        let total_seconds = focus_time*60;
        const offset_increment = 1005.312/total_seconds;
        let minute;
        let second;
        interval = setInterval(()=>{
            setOffset(state=>{
                return state + offset_increment;
            })
            total_seconds -=1
            minute = Math.floor(total_seconds/60);
            second = total_seconds%60;
            setCurrTime(`${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`)
            if(total_seconds<=0){
                clearInterval(interval)
            }

        },1000);
    }
   
    const setTargetTime = (target_time)=>{
        setFocusTime(target_time);
        console.log(target_time)
      
        resetTime(target_time);
        
        
        
    }

    const resetTime = (target_time)=>{
        setCurrTime(`${target_time<10?'0'+target_time:target_time}:00`);
        setOffset(0);
        clearInterval(interval);
    }
    

    return (
        <TimeContext.Provider value={{startTime,setFocusTime,resetTime,setTargetTime,offset,focus_time,curr_time}}>
            {children}
        </TimeContext.Provider>
    )
}

export const UseTimeContext = ()=>{
    const {startTime,setFocusTime,resetTime,setTargetTime,offset,focus_time,curr_time} = React.useContext(TimeContext);
    return {startTime,setFocusTime,resetTime,setTargetTime,offset,focus_time,curr_time}
}