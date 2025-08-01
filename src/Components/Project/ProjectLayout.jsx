import React from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

const ProjectLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, features, tools, images = [] } = location.state || {};

    const handleImageClick = (index) => {
        navigate('/home/imageview', {
            state: {
                images,
                currentIndex: index,
            },
        });
    };

    return (
        <div className='flex flex-col pt-5 items-center text-white'>

            <div className='flex flex-col w-3/5 gap-5'>

                <span className='text-3xl sm:text-4xl md:text-5xl font-bold hidden-animate-fade'>{title}</span>

                <span className='text-sm sm:text-base md:text-lg lg:text-xl text-justify hidden-animate-fade'>
                    {description}
                </span>

                <div className="flex flex-col md:flex-row text-white gap-5 md:gap-10">

                    <div className="flex flex-col w-full md:w-4/6">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl mb-2 hidden-animate-fade">Features:</span>
                        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg hidden-animate-fade">
                            {features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col w-full md:w-2/6">
                        <span className="font-bold text-lg sm:text-xl md:text-2xl mb-2 hidden-animate-fade">Tools & Tech:</span>
                        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base md:text-lg hidden-animate-fade">
                            {tools.map((tool, idx) => (
                                <li key={idx}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <span className="block font-bold text-lg hidden-animate-fade">System Screenshots:</span>
               
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 w-full">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Project ${images.length - index}`}
                            onClick={() => handleImageClick(index)}
                            className="mb-5 rounded-lg border border-gray-500 break-inside-avoid cursor-pointer transition-transform duration-200 hover:scale-105 w-full"
                        />
                    ))}
                </div>


            </div>


            {/* ✅ This renders nested route (ImageView) */}
            <Outlet />
        </div>
    )
}

export default ProjectLayout