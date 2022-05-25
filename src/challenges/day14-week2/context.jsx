import React from "react";
import {dataset} from './data'

const ProjectContext = React.createContext({
    week:{}
    
});


export const ProjectProvider = ({children})=>{
    const [week,setWeek] = React.useState({week:1,'projects':[]});

    
    const updateWeek = (target_week)=>{
        
        const data = dataset.filter(data=>{
            return data.week==target_week;
        })
        setWeek(data[0]);
    }

    return (
        <ProjectContext.Provider value={{week,updateWeek}} >
            {children}
        </ProjectContext.Provider>
    )
    

}

export const UseProjectContext = ()=>{
    const {week,updateWeek} = React.useContext(ProjectContext);
    return {week,updateWeek}
}

