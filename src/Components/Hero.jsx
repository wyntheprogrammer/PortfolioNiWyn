import React from 'react'
import SanjiProfile from '../assets/sanji.png'


const Hero = () => {
    return (
        <div className="snap-start flex flex-row gap-14 items-center justify-center bg-black pt-10 px-10 my-10 h-[calc(100vh-5rem)]" >
            <img src={SanjiProfile} alt="SanjiSmoke" className=' h-full hidden-animate-swipe' />
            <div className='flex flex-col w-3/6 gap-4'>
                <span className='text-6xl text-white hidden-animate-swipe'>Hi, I'm John Bacolod</span>
                <span className='text-4xl text-#63C5DA hidden-animate-swipe'>Web Developer</span>
            </div>
        </div>
    )
}

export default Hero