import React from 'react'
import mlMap from '../../assets/ml-map2.png'
import shLogo from '../../assets/sh-logo.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'


const Footer = () => {
    return (

        <div className="flex justify-center items-center px-16 py-10 text-white snap-start">
            <div className='flex flex-row justify-between w-4/6'>

                <div className='flex flex-col w-5/12 gap-4 hidden-animate-fade'>
                    <div className="h-20 flex flex-row text-3xl font-bold gap-2 items-center">
                        <img src={shLogo} alt="Logo" className="h-full object-contain" />
                        <span>Portfolio ni Wyn</span>
                    </div>
                    <span>Welcome to Wyn's world of creativity — where ideas come to life. It may not be as perfect as others, but I'm always willing to learn, adapt, and grow through feedback and criticism.</span>
                    <div className="flex flex-row gap-2 mt-1">
                        <div className="w-8 h-8">
                            <img src={facebook} alt="Facebook" className='w-full h-full' />
                        </div>
                        <div className="w-8 h-8">
                            <img src={github} alt="GitHub" className='w-full h-full' />
                        </div>
                        <div className="w-8 h-8">
                            <img src={linkedin} alt="LinkedIn" className='w-full h-full' />
                        </div>
                    </div>

                </div>

                {/* <div className='hidden-animate-fade'>
                    <span className='text-xl font-bold'>Porfolio</span>
                    <ul className='flex flex-col gap-2 mt-6'>
                        <li className='hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300' >Home</li>
                        <li className='hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300' onClick={onScrollTo.about}>About</li>
                        <li className='hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300' onClick={onScrollTo.accomplishment}>Accomplishment</li>
                        <li className='hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300' onClick={onScrollTo.projects}>Projects</li>
                        <li className='hover:text-[#63C5DA] cursor-pointer hover:scale-110 transition-transform duration-300' onClick={onScrollTo.contact}>Contact</li>
                    </ul>
                </div> */}

                <div className='hidden-animate-fade'>
                    <span className='text-xl font-bold'>Get In Touch</span>
                    <ul className='flex flex-col gap-2 mt-6'>
                        <li className='flex flex-row gap-2 items-center'>
                            <div className="w-6c h-6">
                                <img src={phone} alt="Facebook" className='w-full h-full' />
                            </div>0995-773-3887
                        </li>
                        <li className='flex flex-row gap-2 items-center'>
                            <div className="w-6c h-6">
                                <img src={location} alt="Facebook" className='w-full h-full' />
                            </div>Makati City, Philippines
                        </li>
                        <li className='flex flex-row gap-2 items-center'>
                            <div className="w-6c h-6">
                                <img src={email} alt="Facebook" className='w-full h-full' />
                            </div>jlemuellbacolod.gmail.com
                        </li>
                    </ul>
                </div>

                <div className='flex items-center w-2/12 hidden-animate-fade'>
                    <div className='h-36'>
                        <img
                            src={mlMap}
                            alt="ML Map"
                            className="w-full h-full animate-bounce [animation-duration:3s]"
                        />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer