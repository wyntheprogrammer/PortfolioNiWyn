import React, { useState } from 'react';
import SkillsContent from './SkillsContent';
import EducationContent from './EducationContent';


// Personal assets
import SanjiSmoke from '../../assets/sanji-smoke.gif';


const About = () => {
    const [selectedTab, setSelectedTab] = useState('skills');

    return (
        <div className="flex flex-col lg:flex-row sm:gap-10 items-center justify-center bg-black pt-10 px-6 sm:px-10 my-10 min-h-[calc(100vh-5rem)] snap-start">

            {/* Image */}
            <img
                src={SanjiSmoke}
                alt="SanjiSmoke"
                className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-[30%] xl:w-[28%] h-auto rounded-2xl hidden-animate-swipe"
            />

            {/* Text Content */}
            <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-[60%] gap-4 text-center sm:text-left mt-10 sm:mt-0">

                {/* Heading */}
                <span className="text-3xl sm:text-4xl md:text-5xl text-white hidden-animate-fade">
                    About Me
                </span>

                {/* Description */}
                <span className="text-sm sm:text-base md:text-lg text-white leading-relaxed hidden-animate-fade">
                    Hardworking and committed to completing tasks efficiently and on time, with a solid foundation from several programming projects. Eager to learn and grow through hands-on experience and mentorship in your company.
                </span>

                {/* Tabs */}
                <ul className="flex flex-row gap-4 sm:gap-8 justify-center sm:justify-start text-white hidden-animate-fade mt-4 sm:mt-2">
                    <li
                        className={`border-b-2 text-base sm:text-xl cursor-pointer 
        ${selectedTab === 'skills' ? 'border-[#63C5DA]' : 'border-transparent'}`}
                        onClick={() => setSelectedTab('skills')}
                    >
                        Skills
                    </li>
                    <li className="text-base sm:text-xl">|</li>
                    <li
                        className={`text-base sm:text-xl cursor-pointer 
        ${selectedTab === 'education' ? 'border-b-2 border-[#63C5DA]' : 'border-transparent'}`}
                        onClick={() => setSelectedTab('education')}
                    >
                        Education
                    </li>
                </ul>

                {/* Conditional Content */}
                <div className="mt-4">
                    {selectedTab === 'skills' ? <SkillsContent /> : <EducationContent />}
                </div>

            </div>
        </div>

    )
}

export default About