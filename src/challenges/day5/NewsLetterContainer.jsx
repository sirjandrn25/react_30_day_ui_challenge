import React, { useState } from 'react'
import crossicon from './images/crossicon.png'
import open_mail from './images/openmailbox.png';
import success_img from './images/success.svg';
import useEmailValidate from './useEmailValidate';




const NewsLetterContainer = () => {
    const [success,error,validateEmail] = useEmailValidate();
    const [open,setOpen] = useState(false);

    const handleOpen = ()=>setOpen(!open);

    const renderModel = ()=>{
        return (
            <div className='w-screen relative flex flex-col justify-center md:w-[600px] lg:w-[800px] h-[300px] md:h-[450px] rounded-[40px] shadow-lg bg-white border-2 border-white'>
                <img src={crossicon} alt="" onClick={handleOpen} className='px-5 absolute right-3 top-6 cursor-pointer h-[20px]' />
                    {success?<SubscribeSuccessContainer />:<SubscribeContainer error={error} validateEmail={validateEmail} />}
                    
                <p className='text-center text-[16px] text-gray-400 mt-3'>Your email is safe with us, we don’t spam.</p>
            </div>
        )
    }
    
    
  return (
    <div className='h-screen w-screen px-3 flex justify-center items-center bg-gray-200'>
        {open?renderModel():<button onClick={handleOpen} className='bg-[#5D5FEF] text-white font-bold px-7 py-3 rounded-[40px]'>subscribe</button>}
        
    </div>
  )
}


const SubscribeSuccessContainer = ()=>{

    return (
        <>
            <p className='font-bold text-center text-[44px] text-black/80'>Subscription Success</p>
            <p className='px-6 text-center text-[20px] text-gray-400 my-3'>You will now receive new articles and resources directly on your inbox.</p>
            <p className='px-6 text-center text-[20px] text-gray-400'>Glad to have you onboard!</p>
            <div className='w-full flex justify-center my-3'>
               <img src={success_img} className='h-[80px]  rounded-[45px] p-3 w-[120px]' alt="" />
           </div>
        </>
    )
}


const SubscribeContainer=(props)=>{
    const [email,setEmail] = React.useState('');
    
    const handleSubmit = e=>{
        e.preventDefault()
        props.validateEmail(email);
        
    }
    return (
        <>
           <div className='w-full flex justify-center'>
               <img src={open_mail} className='h-[120px] bg-sky-50 rounded-[45px] p-3 w-[120px]' alt="" />
           </div>
           <p className='font-bold text-center text-[44px] text-black/80'>Subscribe to our newsletter</p>
           <p className='px-6 text-center text-[20px] text-gray-400'>Receive new articles and resources directly on your inbox. Fill your email below to join our email newsletter today.</p>

           <form action="" onSubmit={handleSubmit} className='w-full flex justify-center mt-4 relative items-center'>
               <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className='w-[680px] h-[70px] rounded-[71px] px-6 text-[20px] text-gray-700   shadow border border-1 outline-gray-200' placeholder='Enter your email address' />
               <button type='submit' className='absolute right-[75px] bg-[#4A3AFF] py-3 px-4 rounded-[71px] text-white font-bold'>subscribe</button>
           </form>
           {props.error?<p className='text-red-700 font-medium text-[18px] text-center'>{props.error}</p>:''}
        </>
    )
}





export default NewsLetterContainer
