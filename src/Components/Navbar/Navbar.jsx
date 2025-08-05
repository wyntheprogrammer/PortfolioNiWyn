import { useState } from 'react'
import ShLogo from '../../assets/sh-logo.png'

import { useNavigate } from 'react-router-dom';

import menu from '../../assets/menu.png'
import close from '../../assets/close.png'

import NavbarContents from './NavbarContents';

const Navbar = ({ onScrollTo, togglePlay, isPlaying }) => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (isPlaying) togglePlay(); // pause the music
    navigate('/');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between w-full bg-black h-20 items-center px-5 md:px-10 sticky top-0 z-50 hidden-animate-fade">

      <div className="h-full w-auto">
        <img
          src={ShLogo}
          alt="Logo"
          className="h-full object-contain cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>

      <div className='hidden lg:flex flex-row gap-10  w-full  justify-end items-center'>
        <NavbarContents onScrollTo={onScrollTo} />
      </div>


      {/* Menu Button (Mobile Only) */}
      <div
        className="relative block lg:hidden w-8 h-8 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-[1200ms]"
        onClick={handleMenuClick}
      >
        {/* Menu icon */}
        <img
          src={menu}
          alt="menu"
          className={`w-full h-full absolute top-0 left-0 transition-opacity duration-[1200ms] ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />

        {/* Close icon */}
        <img
          src={close}
          alt="close"
          className={`absolute top-1/2 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1200ms] ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />
      </div>




      {/* Navbar Contents - toggled on mobile */}
      <div className={`absolute top-full right-0 bg-black text-white z-10 p-4 w-full h-[calc(100vh-5rem)] flex flex-col gap-10 justify-center items-center transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} lg:hidden`}>
       
        <NavbarContents onScrollTo={onScrollTo} closeMenu={handleMenuClick}/>

      </div>



    </div>


  )
}

export default Navbar