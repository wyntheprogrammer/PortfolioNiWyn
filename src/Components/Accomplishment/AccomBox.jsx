import React from 'react'

import { useInView } from '../UseInView';
import { useNavigate } from 'react-router-dom';


const AccomBox = ({ src, alt, title, description, images, style }) => {

  const [ref, isVisible] = useInView();

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('certlayout', {
      state: { title, description, images }
    });
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col w-full md:w-8/12 lg:w-5/12 xl:w-3/12 
              bg-gray-700 p-6 sm:p-8 md:p-10 gap-2
              rounded-xl transition-all duration-1000 
              ${isVisible ? 'stag' : ''}`}
      style={style}
    >
      <div className='w-10 h-10 sm:w-12 sm:h-12'>
        <img src={src} alt={alt} className='w-full' />
      </div>

      <span className='text-xl sm:text-2xl text-[#63C5DA]'>
        {title}
      </span>

      <span
        className="relative block text-sm sm:text-base  text-justify w-full h-28 md:h-30 overflow-hidden leading-relaxed"
        style={{
          WebkitMaskImage: "linear-gradient(180deg, black 60%, transparent)",
          maskImage: "linear-gradient(180deg, black 60%, transparent)",
        }}
      >
        {description}
      </span>



      <button
        onClick={handleViewClick}
        className='w-max hover:text-[#63C5DA] cursor-pointer 
               hover:scale-110 transition-transform duration-300 text-sm sm:text-base'
      >
        View
      </button>
    </div>

  )
}

export default AccomBox