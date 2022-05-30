import React from 'react'
import { UseColorsIcons } from './context'
import send from './images/send.png'

const Footer = () => {
  const { property, handleDarkLight } = UseColorsIcons()
  return (
    <footer className={`fixed bottom-0 w-full h-[280px] ${property.colors.footer}`}>
      <div className={`${property.colors.subscribe_bg} w-full h-[100px] flex justify-center items-center`}>
        <form action='' className='flex relative flex-row w-[600px] items-center'>
          <label className={`font-bold ${property.colors.text_color} mr-3`}>Newsletter</label>
          <input
            type='text'
            className='h-[60px] w-full rounded-[36px] focus:outline-none text-[16px] px-3'
            placeholder='your email'
          />
          <button type='submit' className='absolute bg-[#0081FE] p-3 rounded-full right-3'>
            <img src={send} alt='send' />
          </button>
        </form>
      </div>
      <div className='h-[180px] w-full flex flex-col justify-center items-center'>
        <ul className='flex flex-row'>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>Home</a>
          </li>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>Experience</a>
          </li>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>News</a>
          </li>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>About us</a>
          </li>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>Jobs</a>
          </li>
          <li className={`mr-8 text-[12px] font-bold ${property.colors.text_color}`}>
            <a href=''>Contact</a>
          </li>
        </ul>
        <div className='flex flex-row my-5 w-full justify-center '>
          <a href=''>
            <img src={property.icons.fb} className='h-[15px] w-auto mr-5' alt='' />
          </a>
          <a href=''>
            <img src={property.icons.twitter} className='h-[15px] w-auto mr-6' alt='' />
          </a>
          <a href=''>
            <img src={property.icons.youtube} className='h-[15px] w-auto mr-6' alt='' />
          </a>
        </div>
        <p className={`text-center text-[10px] ${property.colors.text_color} `}>© Copyright 2019 - Lift Media</p>
      </div>
    </footer>
  )
}

export default Footer
