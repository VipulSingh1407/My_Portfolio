import React from 'react';
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { skills } from '@/data/constants';

SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const SkillCard = () => {
  return (
    <div className='w-full h-full justify-center items-center'>
      <div className="App w-96 py-20 md:w-full md:py-12">
          <Swiper
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            slidesPerView={2}
            centeredSlides={true}
            // style={{ height: "fit" , width:"100%"}}
            className='h-fit w-full md:w-4/5'
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="h-fit w-48 md:w-full bg-white-100 backdrop-filter backdrop-blur-sm bg-opacity-10 border m-2 border-blue-600 shadow-md rounded-lg p-8 text-white">
                  <h2 className="text-2xl font-semibold text-secondary mb-5 text-center">
                      {skill.title}
                  </h2>
                  <div className="flex justify-center flex-wrap gap-5 mb-2">
                      {skill.skills.map((item, idx) => (
                      <div
                          key={idx}
                          className="text-sm font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center gap-2"
                      >
                          <img src={item.image} alt={item.name} className="w-6 h-6" />
                          {item.name}
                      </div>
                      ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
          <div className='flex flex-row justify-center w-full pt-5'>
            <div className="arrow-left arrow cursor-pointer hover:scale-125 duration-300">
              <IoArrowBackCircleOutline className="w-10 h-10 text-white" />
            </div>
            <div className='px-10'></div>
            <div className="arrow-right arrow cursor-pointer hover:scale-125 duration-300">
              <IoArrowForwardCircleOutline className="w-10 h-10 text-white " />
            </div>
          </div>
        </div>
    </div>
  );
}

export default SkillCard;
