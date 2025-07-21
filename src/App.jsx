import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Layout from './Components/Layout';
import CertLayout from './Components/Accomplishment/CertLayout';
import CertView from './Components/Accomplishment/CertView';
import { Cover } from './Components/Cover';

import Music from './Components/Music';
import musicFile from './assets/change_the_world.mp3';

const AppRoutes = ({ togglePlay, isPlaying }) => {
  const location = useLocation();

  return (
    <>
      {/* Show Music component only if NOT on the cover page (path !== "/") */}
      {location.pathname !== '/' && (
        <Music togglePlay={togglePlay} isPlaying={isPlaying} />
      )}
      <Routes>
        <Route path="/" element={<Cover onStart={togglePlay} />} />
        <Route path="/home" element={<Layout togglePlay={togglePlay} isPlaying={isPlaying} />}>
          <Route path="certlayout" element={<CertLayout />} />
          <Route path="certview" element={<CertView />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {

  const audioRef = useRef(new Audio(musicFile));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true;
  }, []);


  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.warn('Auto-play failed:', err));
    }

    setIsPlaying(!isPlaying);
  };



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animate-swipe', 'show-animate-fade');
        } else {
          entry.target.classList.remove('show-animate-swipe', 'show-animate-fade');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-animate-swipe, .hidden-animate-fade');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <Router basename="/PortfolioNiWyn/">
      <AppRoutes togglePlay={togglePlay} isPlaying={isPlaying} />
    </Router>
  );

  
};

export default App;
