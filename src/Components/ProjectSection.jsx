import React from 'react'
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <>
        <div>
          <div className='head'>
            <h1>Projects</h1>
          </div>
          <div className='projects'>
            <ProjectCard/>
          </div>
         
        </div>
    </>
  )
}

export default Project