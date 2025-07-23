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
        <div className='flex flex-col items-center text-white'>

            <div className='flex flex-col w-3/5 gap-5'>
                <span className='text-5xl font-bold hidden-animate-fade'>{title}</span>
                <span className='text-justify hidden-animate-fade'>
                    {description}
                </span>

                <div className="flex flex-row text-white gap-10">
                    <div className="flex flex-col w-4/6">
                        <span className="font-bold text-lg mb-2 hidden-animate-fade">Features:</span>
                        <ul className="list-disc pl-5 space-y-2 hidden-animate-fade">
                            {features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col w-2/6">
                        <span className="font-bold text-lg mb-2 hidden-animate-fade">Tools & Technologies Used:</span>
                        <ul className="list-disc pl-5 space-y-1 hidden-animate-fade">
                            {tools.map((tool, idx) => (
                                <li key={idx}>{tool}</li>
                            ))}
                        </ul>
                    </div>


                </div>

            </div>



            <div className="w-4/6 p-10">
                <div className="columns-3 gap-5">
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