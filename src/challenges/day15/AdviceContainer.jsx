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
        response.then(data=>{
            setAdviceInfo(data)
        })
        document.title = "advice generator"
    },[]);

    const refreshAdvice = ()=>{
        fetchApi().then(data=>{
            setAdviceInfo(data);
            setToggle(!toggle);
        })
        
    }
    
  return (
    <div className='main_container'>
        <div className="advice_box">
            <div className="advice_no">
                Advice #{advice_info.id}
            </div>

            <div className="advice_text">
             “{advice_info.advice}”
            </div>
            <button onClick={refreshAdvice} className={`refresh_btn ${toggle?'active':''}`}>
                <img src={refresh} alt="" />
            </button>
        </div>
      
    </div>
  )
}

export default AdviceContainer
