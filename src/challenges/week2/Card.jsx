import React from 'react'

const tags_color = [
  '#5DEF7D',
  '#EF5D80'
]

const Card = (props) => {
  
  return (
    <div className='h-[400px] bg-purple-700 w-[340px] mb-5 relative'>
      <span className='absolute uppercase right-0 top-0 bg-[#1D1929] text-white px-2 rounded-sm'>Day {props.project.day}</span>
      <img className='h-[241px] w-full object-cover' src={props.project.thumbnail} alt="" />
      <div className="text-[32px] font-medium ml-3 uppercase text-white">
        {props.project.title}
      </div>
      <p className='text-white ml-3 text-[16px] font-medium my-3'>TAGS :</p>
      <div className="flex ml-3 flex-row items-center h-8">
        {props.project.tags.map((tag,index)=>{
          return <span className={`h-[25px] px-2 w-auto bg-[${tags_color[index]}] mr-2 rounded-md font-bold text-sm uppercase text-white`} key={tag}>{tag}</span>
        })}
        
        {/* <span className='h-[25px] px-2 w-auto bg-[#EF5D80] mr-2 rounded-md font-bold text-sm uppercase text-white'>buttons</span> */}
        <a target={'_blank'} href={props.project.livelink} className='h-10 px-2 flex items-center cursor-pointer bg-white text-blue-400 text-[16px] font-bold rounded-lg'>see projects</a>
      </div>

    </div>
  )
}

export default Card;
