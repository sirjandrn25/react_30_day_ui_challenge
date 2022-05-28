import React from 'react'
import avatar from './images/avatar.png';
import three_dot from './icons/three_dot.png'
import recipe from './images/recipe.png';
import heart from './icons/heart.png'
import clip_board from './icons/clipboard.png';
import last_icon from './icons/last_icon.png';

const Card = () => {
  return (
    
      <div className='w-[384px] h-[379px] hover:shadow-lg'>
          {/* header part  */}
          <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row items-center '>
                <img src={avatar} alt="" />
                <div className='ml-2 flex flex-col'>
                    <span className='text-[12px] font-bold'>Anonymous</span>
                    <span className='text-[10px] text-gray-400'>12h ago</span>
                </div>
              </div>
              <img src={three_dot} className='w-[26px] h-[24px]' alt="" />
          </div>

          {/* thumbnail part  */}
          <div className='h-[215px] w-[384px] object-cover mt-1'>
              <img src={recipe} alt="" className='h-full w-full' />
          </div>
          <div className='p-2 font-normal text-[16px] h-[84px]'>
          This cool stuff is a perfect dish for all ocasions. Cool stuff. Yum Yum.
          </div>

          {/* footer content */}
          <div className='relative px-2 flex flex-row w-full'>
            <img src={heart} className='cursor-pointer' alt="" />
            <img src={clip_board} className='cursor-pointer' alt="" />
            <img src={last_icon} className='absolute right-1 cursor-pointer' alt="" />
          </div>
      </div>
  )
}

export default Card
