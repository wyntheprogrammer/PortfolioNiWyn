import React from 'react';


import { useInView } from '../UseInView';
import { useNavigate } from 'react-router-dom';

import open from '../../assets/open.png'

const ProjectBox = ({ src, alt, title, description, features, tools, images, style }) => {

    const [ref, isVisible] = useInView();

    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate('projlayout', {
            state: { title, description, features, tools, images }
        });
    };

    return (
        <div className="h-96 rounded-xl overflow-hidden group relative">
            {/* Image */}
            <img
                ref={ref}
                src={src}
                alt={alt}
                className={`w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110 ${isVisible ? 'stag' : ''}`}
                style={style}

            />

            {/* Overlay Gradient */}
            <div
                className="absolute bottom-0 left-0 w-full h-full rounded-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                style={{
                    background: 'linear-gradient(to top, #1e3a8a, #3b82f6, transparent)'
                }}
            />

            {/* Open Button at Bottom Center */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                <button onClick={handleViewClick} className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:text-white hover:scale-110 transition-transform  duration-300">
                    <img src={open} alt="Open" className="w-6 h-6" />
                </button>
            </div>


        </div>
    );
};

export default ProjectBox;
