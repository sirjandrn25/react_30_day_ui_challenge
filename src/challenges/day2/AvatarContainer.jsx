import React from 'react'
import avatar from './images/avatar.png';
import billgate from './images/billgates.png';
import lady from './images/lady.png'
import Avatar from './Avatar';

const AvatarContainer = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className='w-[600px] h-auto flex flex-row justify-between'>
            <div className='w-[300px] grid grid-cols-3 gap-3 mr-5'>
                <Avatar img={avatar} margin={'mb-3'} />
                <Avatar img={avatar} margin={'mb-3'} outline={'border-[#82F178]'} />
                <Avatar img={avatar} margin={'mb-3'} status={'bg-[#C4C4C4]'} />

                <Avatar img={billgate} margin={'mb-3'} />
                <Avatar img={billgate} margin={'mb-3'} outline={'border-sky-600'} />
                <Avatar img={billgate} margin={'mb-3'} status={'bg-[#82F178]'} />

                <Avatar img={lady} margin={'mb-3'} />
                <Avatar img={lady} margin={'mb-3'} outline={'border-orange-500'} />
                <Avatar img={lady} margin={'mb-3'} status={'bg-[#EF775D]'} />
            </div>
            <div className='flex flex-col justify-center w-[300px] items-center'>
                <div className="flex flex-row mb-6">
                    <Avatar img={avatar} />
                    <Avatar img={avatar} size={'h-[56px] w-[56px]' } margin={'ml-3'} />
                </div>
                <div className='relative flex flex-row items-center mt-5'>
                    <span className='absolute'>
                        <Avatar img={avatar} size={'h-[53px] w-[53px]'} />
                    </span>
                    <span className='absolute left-8'>
                        <Avatar img={billgate} outline={"bg-white"} />
                    </span>
                    <span className='absolute left-16'>
                        <Avatar img={lady} outline={"bg-white"} size={'h-[45px] w-[45px]'} />
                    </span>
                    <span className='absolute left-24 h-[42px] w-[42px] text-[12px] rounded-full border-2 bg-[#5E5555] text-white flex flex-row justify-center items-center font-bold border-white'>
                        +2
                    </span>
                </div>
            </div>
            
        </div>

        <div className='w-[600px] mt-5'>
            <div className='flex flex-row items-center mb-5'>
                <span className='font-bold mr-1'>Admin</span>
                <Avatar img={lady} />
            </div>

            <div className='flex flex-row items-center mb-3'>
                <Avatar img={billgate} margin={'mr-1'} />
                <div className='flex flex-col'>
                    <span className='font-bold text-[12px]'>Bill Gate</span>
                    <span className='text-gray-400 font-mono text-[10px]'>Microsoft</span>
                </div>
            </div>
            <div className='flex flex-row items-center mb-3'>
                <Avatar img={avatar} margin={'mr-1'} />
                <div className='flex flex-col'>
                    <span className='font-bold text-[12px]'>Anonymous</span>
                    <span className='text-gray-400 font-mono text-[10px]'>12hr ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvatarContainer
