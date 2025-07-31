import React from 'react';
import { useNavigate } from 'react-router-dom';
import SanjiCover from '../assets/sanji-cover.mp4'

export const Cover = ({ onStart }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (onStart) onStart(); // play music
    navigate('/home');
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* Video Background */}
      <video
        src={SanjiCover}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80" />

      {/* Content */}
      <div className="relative z-10 gap-5 flex flex-col items-center justify-center h-full px-4 text-center">

        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-xl animate-fade-in-up">
          PORTFOLIO NI WYN
        </h1>

        <p className="mt-4 text-white text-lg sm:text-xl md:text-2xl font-medium max-w-xl sm:max-w-2xl drop-shadow-md animate-fade-in-up delay-200">
          Hustle. Grind. Create. Witness the journey of a visionary through code, design, and passion.
        </p>

        <button
          onClick={handleStart}
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all animate-fade-in-up delay-500"
        >
          Start the Journey ❤️‍🔥
        </button>

      </div>
    </div>

  );
};