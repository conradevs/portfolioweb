import React from 'react'
import ProjectItem from './ProjectItem'

import taskManager from '../../public/assets/projects/taskmanager.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    title='Task Manager'
                    framework='MERN'
                    backgroundImg={taskManager}
                    projectUrl='/'
                />
                <ProjectItem
                    title='Product Score'
                    framework='Next JS'
                    backgroundImg={taskManager}
                    projectUrl='/'
                />
                <ProjectItem
                    title='Task Manager'
                    framework='React JS'
                    backgroundImg={taskManager}
                    projectUrl='/'
                />
            </div> 
        </div>
    </div>
  )
}

export default Projects