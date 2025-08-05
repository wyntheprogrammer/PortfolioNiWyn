import React, { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CertLayout = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { title, description, images = [] } = location.state || {};

  const [lightboxIndex, setLightboxIndex] = useState(-1);


  return (
    <div className='flex flex-col pt-5 items-center text-white'>

      <div className='flex flex-col w-4/5 lg:w-3/5 gap-5'>

        <span className='text-3xl sm:text-4xl md:text-5xl font-bold hidden-animate-fade'>{title}</span>

        <span className='text-sm sm:text-base md:text-lg lg:text-xl text-justify hidden-animate-fade'>
          {description}
        </span>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 w-full">
          {images.map((img, index) => (
             <img
              key={index}
              src={img}
              alt={`Certificate ${images.length - index}`}
              onClick={() => {
                if (window.innerWidth < 1280) {
                  setLightboxIndex(index); // open lightbox at this image
                } else {
                  navigate("/home/imageview", {
                    state: {
                      images,
                      currentIndex: index,
                    },
                  });
                }
              }}
              className="mb-5 rounded-lg border border-gray-500 break-inside-avoid hidden-animate-fade cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>

      </div>


      {lightboxIndex >= 0 && (
        <Lightbox
          open
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={images.map((src) => ({ src }))}
        />
      )}


      {/* ✅ This renders nested route (CertView) */}
      <Outlet />
    </div>
  );
};

export default CertLayout;
