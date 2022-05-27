import React from 'react'
import Button from './Button'
import edit_icon from './icons/icon=edit.png';
import cross_icon from './icons/Icon=Cross.png';
import back_icon from './icons/Icon=Back.png'
import full_screen from './icons/Icon=full_screen.png';
import clip_board from './icons/Icon=Clipboard.png';

const ButtonContainer = () => {
  return (
    <div className='h-screen w-screen bg-white flex flex-row justify-center items-center'>
        {/* normal buttons  */}
        <div className='mr-5'>
            <h3 className="text-center text-2xl font-bold mb-2">Task Day 0</h3>
            <div className='w-[240px] h-[500px] rounded-[5px] border-2 border-dashed border-[#7B61FF] py-3 flex flex-col items-center'>
                <Button bg_color={'bg-[#5D5FEF]'} text={'button'} text_color={'text-white'} margin={'mb-4'} />
                <Button bg_color={'bg-[#f174b5]'} text={'button'} text_color={'text-white'} margin={'mb-4'} />
                <Button bg_color={'bg-[#82F178]'} text={'button'} text_color={'text-white'} margin={'mb-4'} />
                <Button bg_color={'bg-[#EF775D]'} text={'button'} text_color={'text-white'} margin={'mb-4'} />
                <Button bg_color={'bg-[#FFFFF]'} text={'outline'} text_color={'text-sky-600'} outline={'border-2 border-sky-400'} margin={'mb-4'} />
                <Button bg_color={'bg-[#FFFFF]'} text={'plain'} text_color={'text-sky-600'} margin={'mb-4'} />
                
            </div>
        </div>

        {/* feature icons  */}
        <div className='flex flex-col justify-center items-center'>
            <p>icons:<span className='font-bold'>Feather icons</span></p>
            <div className='border-[#7B61FF] border-2 flex flex-col items-center border-dashed h-[260px] w-[68px] rounded-[6px] py-3'>
                <span className='mb-5'>
                    <img src={cross_icon} alt="" />
                </span>
                <span className='mb-5'>
                    <img src={back_icon} alt="" />
                </span>
                <span className='mb-5'>
                    <img src={edit_icon} alt="" />
                </span>
                <span className='mb-5'>
                    <img src={full_screen} alt="" />
                </span>
                <span className='mb-5'>
                    <img src={clip_board} alt="" />
                </span>
                
            </div>
        </div>
    </div>
  )
}

export default ButtonContainer
