import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import compcert from '../../assets/compcert.jpg';

const CertLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, images = [] } = location.state || {};

  const handleImageClick = (index) => {
    navigate('/home/imageview', {
      state: {
        images,
        currentIndex: index,
      },
    });
  };

  return (
    <div className='flex flex-col items-center text-white'>
      <div className='flex flex-row p-10 w-4/5 gap-5'>
        <div className='flex items-center hidden-animate-fade'>
          <img src={compcert} alt="Certificate animate" className='w-full' />
        </div>

        <div className='flex flex-col gap-5'>
          <span className='text-5xl font-bold hidden-animate-fade'>{title}</span>
          <span className='text-justify hidden-animate-fade'>
            {description}
          </span>
        </div>
      </div>

      <div className='w-4/6'>
        <div className="columns-2 gap-5 p-10 w-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Certificate ${images.length - index}`}
              onClick={() => handleImageClick(index)}
              className="mb-5 rounded-lg border border-gray-500 break-inside-avoid hidden-animate-fade cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* ✅ This renders nested route (CertView) */}
      <Outlet />
    </div>
  );
};

export default CertLayout;
