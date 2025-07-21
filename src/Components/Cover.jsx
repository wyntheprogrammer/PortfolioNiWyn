import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Cover = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home'); // Change to your desired starting page
  };

  return (
    <div className='flex flex-row gap-14 items-center justify-center bg-black pt-10 px-10 h-screen'>
      <button onClick={handleStart} className="text-white border p-4 rounded hover:bg-gray-800 transition">
        Start
      </button>
    </div>
  );
};
