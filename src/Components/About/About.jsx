import React, { useState}  from 'react';
import SkillsContent from './SkillsContent';
import EducationContent from './EducationContent';


// Personal assets
import SanjiSmoke from '../../assets/sanji-smoke.gif';


const About = () => {
    const [selectedTab, setSelectedTab] = useState('skills');

    return (
        <div className="flex flex-row gap-14 items-center justify-center bg-black pt-10 px-10 my-10 h-[calc(100vh-5rem)] snap-start">
            <img src={SanjiSmoke} alt="SanjiSmoke" className=' h-5/6 rounded-2xl hidden-animate-swipe' />
            <div className='flex flex-col w-3/6 gap-4'>
                <span className='text-5xl text-white hidden-animate-fade'>About Me</span>
                <span className='text-base text-white hidden-animate-fade'>Hardworking and committed to completing tasks efficiently and on time, with a solid foundation from several programming projects. Eager to learn and grow through hands-on experience and mentorship in your company.</span>
                <div></div>
                <ul className="flex flex-row gap-8 text-white hidden-animate-fade">
                    <li
                        className={`border-b-2 text-xl cursor-pointer 
                            ${selectedTab === 'skills' ? 'border-[#63C5DA]' : 'border-transparent'}`
                        }
                        onClick={() => setSelectedTab('skills')}
                    >
                        Skills
                    </li>

                    <li className='text-xl'>|</li>

                    <li
                        className={`text-xl cursor-pointer 
                            ${selectedTab === 'education' ? 'border-b-2 border-[#63C5DA]' : 'border-trasparent'}`
                        }
                        onClick={() => setSelectedTab('education')}
                    >
                        Education
                    </li>
                </ul>

                {selectedTab === 'skills' ? (

                    //Skills Content
                    <SkillsContent />

                ) : (

                    //Education Content
                    <EducationContent />

                )}

            </div>
        </div>
    )
}

export default About