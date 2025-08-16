import React from 'react'

import { useInView } from '../UseInView';

const EducationCard = ({ src, alt, school, location, course, major, year, style }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row items-center gap-5 mb-5 text-white ${isVisible ? 'stag' : ''}`}
      style={style}
    >
      <div className='w-24'>
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={alt} className='w-full' />
        </a>
      </div>

      <div className='flex flex-col gap-2 w-[calc(100%-6rem)]'>

        <div className="flex flex-col md:flex-row justify-between">
          <span className='text-sm sm:text-base md:text-lg text-[#E9D676]'>{school}</span>
          <span className='text-xs sm:text-sm md:text-base'>{location}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className='flex flex-col'>
            <span className='text-[10px] sm:text-xs md:text-sm'>{course}</span>
            <span className='text-[10px] sm:text-xs md:text-sm'>{major}</span>
          </div>
          <span className='text-[10px] sm:text-xs md:text-sm'>{year}</span>
        </div>

      </div>
    </div>

  )
}

export default EducationCard