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

      {/* Video as background */}
      <video
        src={SanjiCover}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Semi-transparent black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80" />

      {/* Button content on top */}
      <div className="flex flex-col gap-5 relative z-10 flex justify-center items-center h-full">

        <h1 className="text-white text-8xl font-extrabold tracking-tight drop-shadow-xl animate-fade-in-up">
          PORTFOLIO NI WYN
        </h1>
        <p className="mt-4 text-white text-2xl font-medium max-w-2xl drop-shadow-md animate-fade-in-up delay-200">
          Hustle. Grind. Create. Witness the journey of a visionary through code, design, and passion.
        </p>
        <button
          onClick={handleStart}
          className="mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all animate-fade-in-up delay-500"
        >
          Start the Journey 🚀
        </button>

      </div>
    </div>
  );
};