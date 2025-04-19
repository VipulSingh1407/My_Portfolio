import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './Cards/ContactForm';



const Contactus = () => {
  return (
    <div id='contact'
    className='h-fit w-full md:px-8 py-0 md:py-20'>
        <div className='w-full items-center flex flex-col h-1/6 justify-center'>
            <h1 className= 'text-white font-bold text-3xl md:text-5xl'>
                Contact Me
            </h1>
            <div className='md:py-2'></div>
            <h2 className= 'text-gray-500 font-semibold text-center text-1xl md:text-2xl mb-5'>
                Here are my contact details.
            </h2>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center px-5 md:px-0'>
          <div name='right' className='w-full md:w-1/3 px-8 py-5 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-10 border m-2 border-blue-600 shadow-md rounded-lg'>
            <ContactForm/>
          </div>

          <div name='left' className='h-full w-full md:w-1/2 p-3 flex flex-col items-center'>
            <div name='image' >
              <img src='/assets/developer.png' className='h-96'/>
            </div>
            <div className='text-2xl text-white font-semibold py-2 mt-5'>Socials</div>
            <div name='socials' className='flex flex-row px-2 w-full justify-center'>
              <a href='https://github.com/VipulSingh1407/'>
                <FaGithub className='size-12 text-white mx-2 hover:scale-125 duration-300'/>
              </a>
              <a href='https://www.linkedin.com/in/vipul-singh-9624a2244/'>
                <FaLinkedin className='size-12 text-white mx-2 hover:scale-125 duration-300'/>
              </a>
              <a href='https://leetcode.com/u/vipulsingh9369384252/'>
                <SiLeetcode className='size-12 text-white mx-2 hover:scale-125 duration-300'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contactus