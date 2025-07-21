import React from 'react'
import ShLogo from '../assets/sh-logo.png'

import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onScrollTo }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      onScrollTo[section]();
    }
  };

  return (
    <div className="flex justify-between  bg-black h-20 items-center px-10 sticky  top-0 z-50 hidden-animate-fade">
      <div className="h-full w-auto">
        <img src={ShLogo} alt="Logo" className="h-full object-contain" />
      </div>
      <ul className="flex flex-row gap-10 text-white">
        <li className="hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('home')}>Home</li>
        <li className="hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('about')}>About Me</li>
        <li className="hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('accomplishment')}>Accomplishment</li>
        <li className="hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('projects')}>Projects</li>
        <li className="hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('contact')}>Contact</li>
      </ul>
      <button className='bg-blue-500 py-2 px-3 text-white font-bold rounded-full text-sm hover:scale-110 transition-transform duration-300'>DOWNLOAD CV</button>
    </div>
  )
}

export default Navbar