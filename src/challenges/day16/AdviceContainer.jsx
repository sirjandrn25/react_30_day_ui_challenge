import React from 'react'

import refresh from './icons/refresh.png'
import axios from 'axios';
const url = 'https://api.adviceslip.com/advice';

const fetchApi = async ()=>{
    return await axios.get(url).then(resp=>{
        return resp.data.slip;
    }).catch(error=>{
        console.log(error)
    })
}

const AdviceContainer = () => {

    const [advice_info,setAdviceInfo] = React.useState({});
    const [toggle,setToggle] = React.useState(false)
    

    React.useEffect(()=>{
        const response = fetchApi();
        setToggle(true)
        response.then(data=>{
            setAdviceInfo(data)
            setToggle(false)
        })
        document.title = "advice generator"
    },[]);


    

    const refreshAdvice = ()=>{
        setToggle(true)
        fetchApi().then(data=>{
            setAdviceInfo(data);
            setToggle(false);
            
        })
        
    }
    
  return (
    <div className='h-screen w-screen bg-sky-500 flex flex-row justify-center items-center'>
        <div className="h-[609px] w-[1053px] rounded-[11px] bg-[#7879F1] flex flex-col justify-center items-center">
            <div className="text-[32px] font-bold text-[#4BFF0C] mb-3">
                Advice #{advice_info.id}
            </div>

            <div className="font-bold text-[50px] w-[950px] text-center mb-6 text-white py-2 border-b-2">
             “{advice_info.advice}”
            </div>
            <button onClick={refreshAdvice} className={` bg-white rounded-full ${toggle?'duration-500 rotate-[360deg]':''} p-4`}>
                <img src={refresh} className={`h-[40px] w-[40px] object-cover` } alt="" />
            </button>
        </div>
      
    </div>
  )
}

export default AdviceContainer
