import React from 'react'
import digital_marketing from './images/digital_marketing.png';
import call from './images/call.png';
import location from './images/location.png';
import mail from './images/mail.png';

const ContactUsContainer = () => {
    const [fullName,setFullName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [message,setMessage] = React.useState('');

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(fullName)
        console.log(email)
        console.log(message)
    }
  return (
    <div className='h-auto md:h-screen w-screen flex justify-center items-center bg-gray-300 '>
        
        <div className=' h-screen  w-screen lg:w-[1000px] lg:h-[600px]  bg-[rgb(239,240,243)] md:bg-white border-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0'>
            <div className='h-full  bg-[rgb(239,240,243)] flex justify-center items-center'>
                <div className='h-auto w-full px-5'>
                    <p className='font-bold capitalize text-[40px] md:text-[56px]'>Get In Touch</p>
                    <p className='text-[18px] md:text-[24px]'>We are help for you! How can we help you?</p>

                    <form action="" onSubmit={handleSubmit} className='mt-3'>
                        <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} name="fullName" placeholder='Full Name' className='w-full  h-[40px]  text-[15px] md:h-[56px] md:text-[20px] text-gray-600 rounded-md mb-3 px-3 focus:outline-none focus:border-2 focus:border-orange-300' />
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" className='w-full h-[40px]  text-[15px] md:h-[56px] md:text-[20px] text-gray-600 rounded-md mb-3 px-3 focus:outline-none focus:border-2 focus:border-orange-300' placeholder='Email Address'/>
                        <textarea name="message" value={message} onChange={e=>setMessage(e.target.value)} className=' w-full h-[150px] text-[15px] md:text-[20px] text-gray-600 rounded-md mb-3 p-3 focus:outline-none focus:border-2 focus:border-orange-300' placeholder='your message'  ></textarea>
                        <button type='submit' className='bg-[#FF8E3C] py-2 w-full rounded-lg font-bold text-white'>Submit</button>
                    </form>
                </div>
            </div>

            <div className=' h-full flex flex-row justify-center items-center'>
                <div className='h-auto w-full px-5'>
                    <div className='w-full h-auto object-cover hidden md:block '>
                    <img src={digital_marketing} className='w-full h-full ' alt="" />
                    </div>
                    
                    <div className='flex flex-row  items-center mb-6'>
                        <img src={location} alt="" className='h-auto w-[20px] md:w-[38px] ' />
                        <span className='text-[16px] md:text-[20px] font-medium ml-6'>6th Avenue, Wall Street, New York</span>
                    </div>
                    <div className='flex flex-row  items-center mb-6'>
                        <img src={mail} alt="" className='h-auto w-[20px] md:w-[38px] ' />
                        <span className='text-[16px] md:text-[20px]  font-medium ml-6'>haveagreatday@gmail.com</span>
                    </div>
                    <div className='flex flex-row  items-center mb-6'>
                        <img src={call} alt="" className='h-auto w-[20px] md:w-[38px] '  />
                        <span className='text-[16px] md:text-[20px]  font-medium ml-6'>602-216-4143</span>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsContainer
