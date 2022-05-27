import React from 'react'
import useShortenLink from './useShortenLink'
import ListShortenLinks from './ListShortenLinks';
const url_regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

const ShortLinkContainer = () => {
    const [links,fetchShortenLinks,createShortenLink,loading] = useShortenLink();
    const [link_value,setLinkValue] = React.useState('');
    React.useEffect(()=>{
        
        fetchShortenLinks();
    },[]);
    const handleSubmit = e=>{
        e.preventDefault()
       
        if(url_regex.test(link_value)){
            createShortenLink(link_value);
            console.log(link_value)
            
        }
        // console.log(link_value)
        // console.log(link_value)
    }
  return (
    <div className='h-screen w-screen bg-sky-600 flex flex-row justify-center items-center'>
      <div className='bg-[#A5A6F6] h-[600px] w-[1237px] rounded-[8px] py-8 px-12'>
        <p className='my-4 font-bold text-[40px]'>Enter a link to shorten it</p>

        <form onSubmit={handleSubmit} className='flex flex-row'>
            <input value={link_value} onChange={e=>setLinkValue(e.target.value)} type="text" placeholder='Enter a long link here...' className='w-[839px] h-[79px] focus:outline-none focus:border-2 placeholder:text-[26px] text-[26px] text-gray-400 rounded-[8px]  placeholder:text-[#F178B6] focus:border-sky-300 px-4' />
            <button type='submit' className='bg-[#F178B6] text-white text-[26px] font-bold px-3 ml-3 rounded-[12px]'>SHORTEN -> </button>

        </form>

        <ListShortenLinks />
      </div>
    </div>
  )
}

export default ShortLinkContainer
