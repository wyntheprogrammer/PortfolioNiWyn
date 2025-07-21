import React from 'react'
import lms from '../../assets/lms.png'
import bms from '../../assets/bms.png'
import gms from '../../assets/gms.png'

import ProjectBox from './ProjectBox'

const Project = () => {
    return (
        <div className='snap-start flex flex-col justify-center items-center gap-10 text-white my-10 h-[calc(100vh-5rem)] snap-start'>

            <span className='text-5xl text-white text-center block hidden-animate-fade'>Projects</span>

            <div className="flex flex-row justify-center gap-10">

                <ProjectBox src={lms} alt="LMS" style={{ "--delay": "300ms" }}/>
                <ProjectBox src={bms} alt="BMS" style={{ "--delay": "600ms" }}/>
                <ProjectBox src={gms} alt="GMS" style={{ "--delay": "900ms" }}/>

            </div>


            <button className='rounded-sm border border-[#3b82f6] w-max py-2 px-10 font-bold cursor-pointer hover:scale-110 transition-transform duration-300 hidden-animate-fade'>View more</button>

        </div>

    )
}

export default Project