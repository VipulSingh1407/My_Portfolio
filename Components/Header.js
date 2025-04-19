"use client";
import { experiences } from '@/data/constants';
import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {

  const [menuVisible, chngVisible] = useState(false);

  const links = [
    {
      id: 1,
      link : '#about',
      name: 'about'
    },
    {
      id: 2,
      link : '#skills',
      name: 'skills'
    },
    {
      id: 3,
      link : '#education',
      name: 'education'
    },
    {
      id: 4,
      link : '#project',
      name: 'project'
    },
    {
      id: 5,
      link : '#contact',
      name: 'contact'
    },
  ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 z-20
      text-white bg-white-300 backdrop-filter backdrop-blur-sm bg-opacity-30 fixed'>

        <ul className='hidden md:flex'>
          {links.map((link) => (
            <a href={link.link} key ={link.id}>
              <li 
            key ={link.id} 
            className='px-4 cursor-pointer capitalize font-medium 
            text-white hover:scale-125 duration-300'>
              {link.name}</li>
            </a>
          ))}
        </ul>
        <div onClick = {() => chngVisible(!menuVisible)} 
        className='cursor-pointer pr-4 z-10 text-white md:hidden' >
          {menuVisible ? <FaTimes size = {30}/> : <FaBars size = {30}/>}
        </div>
        
        {menuVisible && (
          <div className='flex flex-col justify-center items-center 
          absolute top-0 left-0  h-fit w-fit bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
              <ul className='text-black p-40'>
            {links.map((link) => (
              <a href={link.link} key ={link.id}>
                <li 
                key ={link.id} 
                className='py-6 cursor-pointer capitalize text-4xl'>
                  {link.name}</li>
                </a>
            ))}
          </ul>
          </div>
        )}
        
        
      </div>
  );
};

export default Header;