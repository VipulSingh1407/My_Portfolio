"use client"
import { useState } from "react";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import React from 'react'
import Header from '@/Components/Header'
import About from '@/Components/About'
import StarryBackground from '@/Components/StarSky'
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Project from "@/Components/Project";
import ProjectDetails from "@/Components/Cards/ProjectDetails";
import Contactus from "@/Components/Contactus";
import Footer from "@/Components/Footer";

const page = () => {
  const scrollRef = useRef(null);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    <div className="h-screen px-3 md:px-0">
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Project  openModal={openModal} setOpenModal={setOpenModal}/>
      <Contactus/>
      <Footer/>
      <StarryBackground/>
      {openModal.state &&
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
    </div>
  )
}

export default page