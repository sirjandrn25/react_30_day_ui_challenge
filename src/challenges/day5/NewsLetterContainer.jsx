import React from 'react'
import crossicon from './images/crossicon.png'
import open_mail from './images/openmailbox.png';

const NewsLetterContainer = () => {
  return (
    <div className='h-screen w-screen px-3 flex justify-center items-center bg-gray-200'>
        <div className='w-screen flex flex-col justify-center md:w-[600px] lg:w-[800px] h-[300px] md:h-[450px] rounded-[40px] shadow-lg bg-white border-2 border-white'>
            <div className=' px-5 h-[20px] w-auto object-cover flex flex-row justify-end cursor-pointer'>
                <img src={crossicon} alt="" className='h-full w-auto' />
            </div>
            <div className='w-full flex justify-center'>
                <img src={open_mail} className='h-[120px] bg-sky-50 rounded-[45px] p-3 w-[120px]' alt="" />
            </div>
            <p className='font-bold text-center text-[44px] text-black/80'>Subscribe to our newsletter</p>
            <p className='px-6 text-center text-[22px] text-gray-400'>Receive new articles and resources directly on your inbox. Fill your email below to join our email newsletter today.</p>

            <form action="" className='w-full flex justify-center my-4'>
                <input type="text" className='w-[680px] h-[70px] rounded-[71px] px-3  shadow border border-1 border-solid outline-gray-200 border-' placeholder='Enter your email address' />
                <button className='flex-shrink-0'>subscribe</button>
            </form>

            <p className='text-center text-[16px] text-gray-400'>Your email is safe with us, we don’t spam.</p>
        </div>
    </div>
  )
}

export default NewsLetterContainer
