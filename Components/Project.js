import React from 'react'
import ProjectCard from './Cards/ProjectCard';
import { projects } from '@/data/constants';



const Project = ({openModal,setOpenModal}) => {

  return (
    <div id="project" 
    className='h-fit w-full px-3 mb-10 pb-14 pt-0 md:pt-20'>
        <div className='w-full items-center flex flex-col justify-center'>
            <h1 className= 'text-white font-bold text-3xl md:text-5xl'>
                        Project
            </h1>
            <div className='md:py-1'></div>
            <h2 className= 'text-gray-500 font-semibold text-center text-1xl md:text-2xl'>
                Here are some of my projects.
            </h2>
        </div>
        <div className='md:py-2'></div>
        <div className='flex flex-wrap md:pt-0 items-center justify-center h-fit text-white'>
            {projects.map((project, index)=>(
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </div>
    </div>
  );
}

export default Project