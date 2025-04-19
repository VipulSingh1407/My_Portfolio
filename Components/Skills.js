import React from 'react'
import { motion } from "framer-motion";
import RevolIcons from './Cards/RevolIcons';

// Import Swiper styles
import 'swiper/css';
import SkillCard from './Cards/Skillcard';

const Skills = () => {
  return (
    <div id="skills" 
    className='h-fit md:h-full w-full px-8 pt-0 md:pt-20'>
        <div className='w-full items-center flex flex-col h-1/6 justify-center'>
            <h1 className= 'text-white font-bold text-3xl md:text-5xl'>
                        Technical Expertise 
            </h1>
            <div className='md:py-2'></div>
            <h2 className= 'text-gray-500 font-semibold text-center text-1xl md:text-2xl'>
                Here are some of my skills on which I have been working on for the past 2 years.
            </h2>
        </div>

        <div className=' flex flex-col md:pt-0 items-center justify-center h-4/6 md:flex-row text-white'>
            <div name = "left" className='w-full h-1/2 md:w-1/3 md:h-full flex justify-center pt-3 md:pt-0'>
                <div className='absolute h-2/5 flex w-8/10 items-center justify-center md:pt-10 md:h-4/6'>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -20, 0], transition: { duration: 2, repeat: Infinity } }}
                        className="floating-element md:pl-10" // Position over the sphere
                        >
                        <RevolIcons/>
                    </motion.div>
                </div>
            </div>
            <div className='py-45 h-full md:px-3'></div>
            <div name = "right" className='w-9/10 flex flex-col pt-52 md:h-full justify-start items-center md:pt-5 md:w-2/3'>
                <SkillCard/>
            </div>
        </div>
    </div>
  )
}

export default Skills