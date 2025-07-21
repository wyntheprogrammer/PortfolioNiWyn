import React, { useEffect, useRef, useState } from 'react';
import music from '../assets/change_the_world.mp3';

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true; // optional: loop music
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.warn('Playback error:', err));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg cursor-pointer text-sm hover:bg-gray-200 transition-all"
      onClick={togglePlay}
    >
      {isPlaying ? 'Pause Music 🎵' : 'Play Music 🎶'}
    </div>
  );
};

export default Music;
