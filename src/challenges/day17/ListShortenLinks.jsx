import React from 'react'
import useShortenLink from './useShortenLink'

const ListShortenLinks = () => {
    const [links] = useShortenLink();
    const [copy,setCopy] = React.useState('');
   
    const handleCopy = (link)=>{
        setCopy(link.code)
        navigator.clipboard.writeText(link.shorten_link);
    }
    const list = (link)=>{
        return (
            <li key={link.code} className='flex flex-row justify-around items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-3 mb-3'>
                <span>{link.original_link}</span>
                <a href={link.shorten_link} className='text-sky-600'>{link.shorten_link}</a>
                {/* <button className='p-2 bg-purple-800 text-white rounded-[10px]'>copied !</button> */}
                <button onClick={e=>handleCopy(link)} className={`p-2 ${copy===link.code?'bg-purple-800':'bg-green-500'} text-white rounded-[10px]`}>{copy===link.code?'copied!':'copy'}</button>
            </li>
        )
    }
  return (
        <ul className='w-[1040px] mt-5 list-none '>
            {links.map(link=>list(link))}
            
        </ul>
    
  )
}

export default ListShortenLinks
