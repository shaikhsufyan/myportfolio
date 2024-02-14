import React, { useState } from 'react'
import { Data } from './ProjectData';

const ProjectCard = ({title}) => {
    const [data, setData] = useState(Data);
  return (
    <>
    
       
           {
            data.map((curData,arr)=>{
                return(
                    <>
                      <div className='project-card'>
                        <h1 className='title'>{curData.title}</h1>
                        <p  className='techs'>{curData.techs}</p>
                        <p  className='dis'>{curData.dis}</p>
                        <p  className='learn'>{curData.learn}</p>
                        <div className='links'>
                            <a target='_blank' href={curData.deploy}>Deployed Link</a>
                            <a target='_blank' href={curData.github}>GitHub Link</a>

                        </div>
                     </div>

                        

                    </>
                )
            })
           }

    </>
  )
}

export default ProjectCard