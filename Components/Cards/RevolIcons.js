import React from 'react'
import { motion } from "framer-motion";

const RevolIcons = () => {
  return (
    <div className='w-full h-full items-center flex flex-col justify-center'>
        <div className='relative z-0 h-full'>
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 6, // Adjust the duration as needed
                    repeat: Infinity, // Set to Infinity for continuous rotation
                    ease: "circInOut", // You can use other easing functions
                }}
                >
                <div className='relative h-72 w-72 md:h-88 md:w-88'>
                    <div className='absolute h-16 w-16 md:h-20 md:w-20  bottom-0 right-0'>
                        <img src='\assets\c++.png
                        '/>
                    </div>
                    <div className='absolute h-12 w-12 md:h-16 md:w-16 top-0 left-0'>
                        <img src='\assets\js.png'/>
                    </div>
                    <div className='absolute h-16 w-16 md:h-20 md:w-20  top-0 right-0'>
                        <img src='\assets\keraslogo.png' />
                    </div>
                    <div className='absolute h-16 w-16 md:h-20 md:w-20  bottom-0 left-0'>
                        <img src='\assets\react.png' />
                    </div>
                </div>
            </motion.div>
        </div>
        <div className='absolute z-10'>
            <img src='assets/astromedi.png' alt='astronaut' className='rounded-3xl size-60 md:size-72'/>
        </div>
    </div>
  )
}

export default RevolIcons