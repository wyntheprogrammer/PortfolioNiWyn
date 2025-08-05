import React from 'react';

const Music = ({ togglePlay, isPlaying }) => {
  return (
    <div
      className="z-10  fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg cursor-pointer text-sm hover:bg-gray-200 transition-all"
      onClick={togglePlay}
    >
      {isPlaying ? 'Pause Music 🎵' : 'Play Music 🎶'}
    </div>
  );
};

export default Music;
