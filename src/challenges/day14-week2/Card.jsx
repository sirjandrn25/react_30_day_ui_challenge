import React from 'react'
import ReactPlayer from 'react-player'


const tags_color = [
  '#5DEF7D',
  '#EF5D80'
]

const Card = (props) => {
  
  return (
    <div className='h-[445px] bg-purple-700 w-[340px] mb-5 relative'>
      <span className='absolute uppercase right-0 top-0 bg-[#1D1929] text-white px-2 rounded-sm'>Day {props.project.day}</span>
      {/* <img className='h-[241px] w-full object-cover' src={props.project.thumbnail} alt="" /> */}
      
      <ReactPlayer  url={props.project.thumbnail} height={'241px'} width={'340px'} />
      

      
      
      <div className="text-[32px] font-medium mx-3 uppercase text-white">
        {props.project.title}
      </div>
      <p className='text-white ml-3 text-[16px] font-medium mt-3 mb-1'>TAGS :</p>
      <div className="flex mx-2 pt-2 pb-3 flex-row items-center mb-3 border-b-2">
        {props.project.tags.map((tag,index)=>{
          return <span className={`h-[25px] px-2 w-auto bg-[#5DEF7D] mr-2 rounded-md font-bold text-sm uppercase text-white`} key={tag}>{tag}</span>
        })}
        
       
        
      </div>
      <div className='flex ml-3 flex-row'>
        
        <a target="_blank" href={props.project.livelink} className='h-[25px] px-2 w-auto bg-[#660066] mr-2 rounded-md font-bold text-sm  text-white'>live demo</a>
        <a target="_blank" href={props.project.github} className='h-[25px] px-2 w-auto bg-[#cc3300] mr-2 rounded-md font-bold text-sm  text-white'>github</a>
        <a target="_blank" href={props.project.figma} className='h-[25px] px-2 w-auto bg-[#00ffcc] mr-2 rounded-md font-bold text-sm  text-white'>figma</a>
      </div>

    </div>
  )
}

export default Card;
