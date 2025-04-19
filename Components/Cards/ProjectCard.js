import React from 'react'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project, setOpenModal}) => {

  return (
    <div name='outerdiv' className='w-76 md:w-1/4 group flex flex-col items-start justify-center bg-blue-300 backdrop-filter backdrop-blur-sm bg-opacity-10 border m-2 border-blue-600 shadow-md rounded-lg p-7 hover:cursor-pointer'
     onClick={() => setOpenModal({ state: true, project: project })}
    >
      <div name='image' className='h-40 w-full'>
        <img src={project.image} className='h-full w-full rounded-lg object-cover border-2 border-blue-600 shadow-gray-800 shadow-lg'/>
      </div>
      <div name='tags' className='flex flex-wrap gap-3 py-3'>
        {project.tags?.map((ind, index)=>(
          <div key={index} className='w-fit px-2 py-1 bg-white rounded-full text-black text-sm font-semibold'>{ind}</div>
        ))}
      </div>
      <div name='title'>
        <h1 className='text-2xl text-white font-semibold'>{project.title}</h1>
      </div>
      <div name='date'>
        <h2 className="py-1 text-gray-300">{project.date}</h2>
      </div>
      <div name='desc'></div>
      <p className='text-ellipsis line-clamp-3'>{project.description}</p>
      <div name='members' className='w-full flex flex-row pl-4 py-3 items-center'>
        {project.member?.map((profile, index)=>(
          <img src={profile.img} key={index} className='h-16 w-16 rounded-full border-solid border-4 border-black -ml-5'/>
        ))}
      </div>
      <div name='projectbutton' className='w-full py-2 -mb-24 opacity-0 group-hover:mb-0 group-hover:opacity-100 transition-opacity duration-500'>
        <button className="w-full bg-transparent border-2 border-blue-600 shadow-blue-600 text-primary-99 px-4 py-3 rounded-md hover:opacity-80"
        onClick={
          () => {
            window.open(project?.github, '_blank');
          }
        }
        >
          <div className='flex flex-row items-center justify-center'>
            <FaGithub className='h-10 w-10 text-blue-600 mx-2'/>
            <h1 className='text-gray-100 text-2xl font-semibold px-2'>View Project</h1></div>
        </button>
      </div>
    </div>
  )
}

export default ProjectCard