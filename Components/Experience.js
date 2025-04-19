import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './Cards/ExperienceCard';
import { experiences } from '@/data/constants';
import { MdOutlineWork } from "react-icons/md";

const WorkIcon = () => <MdOutlineWork/>;

const Experience = () => {
  return (
    <div id = "education" 
    className='px-3 pt-0 md:pt-20'>
        <div className='w-full items-center flex flex-col h-1/6 justify-center'>
            <h1 className= 'text-white font-bold text-3xl md:text-5xl'>
                       Education
            </h1>
            <div className='md:py-2'></div>
            <h2 className= 'text-gray-500 font-semibold text-center text-1xl md:text-2xl'>
            My journey through education
            </h2>
        </div>
        <VerticalTimeline>
                {experiences.map((experience) => (
                    <VerticalTimelineElement visible={true}
                    key = {experience.id}
                    contentStyle={{ background: "rgba(255, 255, 255, 0.1)", 
                                    border: "2px solid #2196F3", 
                                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", color: "#fff", height: "fit" }}
                    contentArrowStyle={{ borderRight: "12px solid  #2196F3" }}
                    iconStyle={{ background: "#2196F3", color: "#000" }}
                    icon={<WorkIcon />}
                    >
                        <ExperienceCard experience={experience}/>
                    </VerticalTimelineElement>
                ))}         
            </VerticalTimeline>
        <div className='h-28 w-full'>
        </div>
    </div>
  );
};

export default Experience;
