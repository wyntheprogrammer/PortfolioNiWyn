import React from 'react'

import { useInView } from '../UseInView';
import { useNavigate } from 'react-router-dom';


const AccomBox = ({ src, alt, title, description, images, style }) => {

  const [ref, isVisible] = useInView();

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/certlayout', {
      state: { title, description, images }
    }); 
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col w-3/12 bg-gray-700 p-10 gap-5 rounded-xl ${isVisible ? 'stag' : ''}`}
      style={style} >
      <div className='w-12 h-12'>
        <img src={src} alt={alt} className='w-full' />
      </div>
      <span className='text-2xl text-[#63C5DA] '>{title}</span>
      <span className='text-xs text-justify leading-relaxed'>{description}</span>
      <button onClick={handleViewClick} className='w-max hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300'>View</button>
    </div>
  )
}

export default AccomBox