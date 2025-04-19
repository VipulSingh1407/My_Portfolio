import React from 'react';

const Document = '';
const HoverStyles = 'hover:cursor-pointer hover:opacity-80';

const ExperienceCard = ({ experience }) => {
  return (
    <div className= 'rounded-10 bg-transparent p-4 flex flex-col gap-3'>
      <div className='w-full flex gap-2'>
        <img src={experience.img} className='h-20 bg-black rounded-10 md:h-40' alt="Experience Logo" />
        <div className='w-full flex flex-col'>
          <div className='text-18 font-semibold text-primary-99 sm:text-14'>{experience.role}</div>
          <div className='text-14 font-medium text-secondary-99 sm:text-12'>{experience.company}</div>
          <div className='text-12 font-normal text-secondary-80 sm:text-10'>{experience.date}</div>
        </div>
      </div>
      <div className= 'w-full text-15 font-normal text-primary-99 sm:text-12'>
        {experience?.desc && <span className='overflow-hidden block overflow-ellipsis max-w-full line-clamp-4 sm:line-clamp-none'>{experience?.desc}</span>}
        {experience?.skills && (
          <>
            <br />
            <div className='w-full flex'>
              <b>Skills:</b>
              <div className='flex flex-wrap gap-2'>
                {experience?.skills?.map((skill, index) => (
                  <div key={index} className='text-15 font-normal text-primary-99 sm:text-12'>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className='py-2'></div>
      {/* <button className="bg-transparent border-2 border-blue-600 shadow-blue-600 text-primary-99 px-4 py-3 rounded-md hover:opacity-80"
      onClick={
        () => {
          // Replace 'your-project-link' with the actual link you want to open
          window.open(experience?.link, '_blank');
        }
      }
      >
        View Project
      </button> */}

    </div>
  );
};

export default ExperienceCard;
