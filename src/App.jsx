import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import CertLayout from './Components/Accomplishment/CertLayout';
import CertView from './Components/Accomplishment/CertView';

const App = () => {

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

    // Optional cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div />} />
          <Route path="/certlayout" element={<CertLayout />} />
          <Route path="/certview" element={<CertView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
