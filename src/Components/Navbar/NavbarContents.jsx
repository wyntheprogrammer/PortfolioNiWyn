import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

import resumePDF from "../../assets/Bacolod -Resume.pdf";

const NavbarContents = ({ onScrollTo, closeMenu }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (section) => {

        closeMenu?.();

        if (section === 'projects') {
            if (location.pathname.includes('/projlayout')) {
                // From projlayout, go directly to projmore
                navigate('/home/projmore');
            } else if (location.pathname === '/home') {
                // If already on home, just scroll
                onScrollTo[section]();
            } else {
                // Else, go to /home and scroll after
                navigate('/home', { state: { scrollTo: section } });
            }
        } else {
            // For all other sections
            if (location.pathname === '/home') {
                onScrollTo[section]();
            } else {
                navigate('/home', { state: { scrollTo: section } });
            }
        }
    };


    return (
        <>
            <ul className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-center text-white">
                <li className="hover:text-[#E9D676] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('home')}>Home</li>
                <li className="hover:text-[#E9D676] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('about')}>About Me</li>
                <li className="hover:text-[#E9D676] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('accomplishment')}>Accomplishment</li>
                <li className="hover:text-[#E9D676] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('projects')}>Projects</li>
                <li className="hover:text-[#E9D676] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => handleClick('contact')}>Contact</li>
            </ul>
            <a href={resumePDF} download="Bacolod_Resume.pdf">
                <button className='bg-[#A3871D] py-2 px-3 text-white font-bold rounded-full text-sm hover:scale-110 transition-transform duration-300'>
                    DOWNLOAD CV
                </button>
            </a>
        </>
    )
}

export default NavbarContents