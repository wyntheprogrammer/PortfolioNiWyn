import React from 'react'

import { useInView } from '../UseInView';

const SkillsIcon = ({ src, alt, label, style }) => {
    const [ref, isVisible] = useInView();

    return (
        <div
            ref={ref}
            className={`relative group hover:scale-110 transition-transform duration-300 shadow-xl ${
                isVisible ? 'stag' : ''
            }`}
            style={style}
        >
            <div className="h-8 w-8 bg-white rounded-full overflow-hidden">
                <a href={src} target="_blank" rel="noopener noreferrer">
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover pointer-events-auto"
                    />
                </a>
            </div>

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
                {label}
            </span>
        </div>
    );
};


export default SkillsIcon