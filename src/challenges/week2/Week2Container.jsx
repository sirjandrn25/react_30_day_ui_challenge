import React from 'react'
import Navbar from './Navbar'

import ProjectShowContainer from './ProjectShowContainer'
import { ProjectProvider } from './context'

const Week2Container = () => {
  return (
    
        <div className="bg-slate-900 h-auto w-full">
          <ProjectProvider>
            <Navbar />
            <ProjectShowContainer />
          </ProjectProvider>
          
        </div>
   
    
  )
}

export default Week2Container
