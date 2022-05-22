import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import { UseProjectContext } from './context';

const ProjectShowContainer = () => {
  const {week,updateWeek} = UseProjectContext();
  React.useEffect(()=>{
    updateWeek(1);
  },[]);

  const notAvailable = ()=>{
    return (
      <div className='p-4 text-white text-3xl'>
        <p>Not there yet.</p>
        <p>Stay tune for the updates!</p>
      </div>
    )
  }

  return (
        <div className='px-6 py-5'>
          <div className="flex flew-row justify-between py-4 px-2">
            <span className='text-white text-3xl font-bold'>30 Days Challenge May 2022</span>

            <div>
              <button className={`text-white text-[24px] mr-4 ${week.week === 1?"font-bold underline":''}`} onClick={e=>updateWeek(1)}>Week 1</button>
              <button className={`text-white text-[24px] mr-4 ${week.week === 2?"font-bold underline":''}`} onClick={e=>updateWeek(2)}>Week 2</button>
              <button className={`text-white text-[24px] mr-4 ${week.week === 3?"font-bold underline":''}`} onClick={e=>updateWeek(3)}>Week 3</button>
              <button className={`text-white text-[24px] mr-4 ${week.week === 4?"font-bold underline":''}`} onClick={e=>updateWeek(4)}>Week 4</button>
            </div>
          </div>
          <div className='my-5 px-4 min-h-[600px] flex flex-row justify-around flex-wrap'>
          {week.projects.length?week.projects.map((project,index)=><Card project={project} key={index} />):notAvailable()}
            
            
          
            
          </div>
        </div>
      
      
  
  )
}

export default ProjectShowContainer
