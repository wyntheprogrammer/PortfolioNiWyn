import React from 'react'
import mlMap from '../../assets/ml-map2.png'
import wynLogo from '../../assets/wyn-logo.png'
import facebook from '../../assets/facebook-yellow.png'
import linkedin from '../../assets/linkedin-yellow.png'
import github from '../../assets/github-yellow.png'
import phone from '../../assets/phone-yellow.png'
import email from '../../assets/email-yellow.png'
import location from '../../assets/location-yellow.png'


const Footer = () => {
    return (

        <div className="flex justify-center items-center px-16 py-10 text-white md:snap-start">
            <div className='flex flex-col xl:flex-row justify-between lg:w-4/6 gap-5 xl:gap-0'>

                <div className='flex flex-col w-full xl:w-5/12 gap-4 hidden-animate-fade'>
                    <div className="h-20 flex flex-row text-3xl font-bold gap-2 items-center md:justify-start justify-center w-full">
                        <img src={wynLogo} alt="Logo" className="h-full object-contain" />
                        <span>Portfolio ni Wyn</span>
                    </div>
                    <span className='w-full text-center md:text-start'>Welcome to Wyn's world of creativity — where ideas come to life. It may not be as perfect as others, but I'm always willing to learn, adapt, and grow through feedback and criticism.</span>
                    <div className="flex flex-row gap-2 mt-1 md:justify-start justify-center w-full">
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

                <div className='hidden-animate-fade'>
                    <span className='text-xl font-bold text-center md:text-start block'>Get In Touch</span>

                    <ul className='flex flex-col gap-2 mt-6 items-center md:items-start w-full mb-10 xl:mb-0'>
                        <li className='flex flex-row gap-2 items-center w-fit'>
                            <div className="w-6c h-6">
                                <img src={phone} alt="Facebook" className='w-full h-full' />
                            </div>0995-773-3887
                        </li>
                        <li className='flex flex-row gap-2 items-center w-fit'>
                            <div className="w-6c h-6">
                                <img src={location} alt="Facebook" className='w-full h-full' />
                            </div>Makati City, Philippines
                        </li>
                        <li className='flex flex-row gap-2 items-center w-fit'>
                            <div className="w-6c h-6">
                                <img src={email} alt="Facebook" className='w-full h-full' />
                            </div>jlemuellbacolod.gmail.com
                        </li>
                    </ul>

                </div>

                <div className='flex justify-center w-full md:w-2/12 hidden-animate-fade'>
                    <div className='h-36 w-fit' >
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