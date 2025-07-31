import React from 'react'
import SanjiProfile from '../assets/sanji.png'


const Hero = () => {
    return (
        <div className="snap-start flex flex-col sm:flex-row gap-10 sm:gap-14 items-center justify-center bg-black pt-10 px-6 sm:px-10 my-10 min-h-[calc(100vh-5rem)]">

            {/* Profile Image */}
            <img
                src={SanjiProfile}
                alt="SanjiSmoke"
                className="w-40 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[28rem] h-auto hidden-animate-swipe"
            />

            {/* Text Content */}
            <div className="flex flex-col w-full sm:w-4/6 md:w-3/6 gap-3 sm:gap-4 text-center sm:text-left">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white hidden-animate-swipe">
                    Hi, I'm John Bacolod
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#63C5DA] hidden-animate-swipe">
                    Web Developer
                </span>
            </div>

        </div>

    )
}

export default Hero