import CloseRounded from '@mui/icons-material/CloseRounded';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

import { Modal } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className="h-full w-full bg-black bg-opacity-70 flex items-top justify-center overflow-y-scroll transition-all duration-500 ease-in-out">
                <div className="h-fit w-full md:w-3/4 bg-blue-900 bg-opacity-50 rounded-md m-3 md:m-10 p-8 flex flex-col items-start justify-start">
                    <CloseRounded
                        className="cursor-pointer text-white"
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img className="h-56 md:h-96 w-full object-contain rounded-md mt-30" src={project?.image} alt="Project Image" />
                    <div className="font-bold mt-6 md:mt-8 text-white text-3xl">{project?.title}</div>
                    <div className="font-normal text-gray-400 text-2xl">{project.date}</div>
                    <div className="font-semibold text-xl text-white my-3">Tags:</div>
                    <div className="flex flex-wrap gap-3">
                    {project.tags?.map((ind, index)=>(
                        <div key={index} className='w-fit px-2 py-1 bg-white rounded-full text-black text-sm font-semibold'>{ind}</div>
                        ))}
                    </div>
                    <div className="font-normal text-white mt-3 text-xl">{project?.description}</div>
                    {project.member && (
                        <>
                            <div className="font-semibold text-xl text-white mt-3">Members:</div>
                            <div className="flex flex-col gap-6 m-12 md:m-4">
                                {project?.member.map((member, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <img className="w-14 h-14 object-cover rounded-full shadow-md" src={member.img} alt="Member Image" />
                                        <div className="font-normal text-xl text-white my-3">{member.name}</div>
                                        <a href={member.github} target="new" className="text-decoration-none text-inherit">
                                            <GitHub className='text-white'/>
                                        </a>
                                        <a href={member.linkedin} target="new" className="text-decoration-none text-inherit">
                                            <LinkedIn className='text-white'/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div name='projectbutton' className='w-full py-2 mt-3'>
                        <button className="w-full bg-transparent border-2 border-blue-600 shadow-blue-600 text-primary-99 px-4 py-3 rounded-md hover:opacity-80"
                        onClick={
                        () => {
                            window.open(project?.github, '_blank');
                        }
                        }
                        >
                        <div className='flex flex-row items-center justify-center'>
                            <GitHub className='h-10 w-10 text-blue-600 mx-2'/>
                            <h1 className='text-gray-100 text-2xl font-semibold px-2'>View Source Code</h1></div>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetails;
