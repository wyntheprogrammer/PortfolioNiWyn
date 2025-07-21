import React from 'react'

import { useInView } from '../UseInView';

const EducationCard = ({ src, alt, school, location, course, major, year, style }) => {
    const [ref, isVisible] = useInView();

    return (
        <div
            ref={ref}
            className={`flex flex-row items-center gap-5 text-white ${isVisible ? 'stag' : ''}`}
            style={style} >
            <div className='w-24'>
                <a href={src} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={alt} className='w-full' />
                </a>
            </div>
            <div className='flex flex-col gap-2 w-[calc(100%-6rem)]'>
                <div className="flex flex-row justify-between">
                    <span className='text-lg text-#63C5DA'>{school}</span>
                    <span>{location}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <div className='flex flex-col w-3/4'>
                        <span className='text-xs'>{course}</span>
                        <span className='text-xs'>{major}</span>
                    </div>
                    <span className='text-xs'>{year}</span>
                </div>
            </div>
        </div>
    )
}

export default EducationCard