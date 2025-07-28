import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import max from '../assets/maximize.png'
import min from '../assets/minimize.png'
import prev from '../assets/left-arrow.png'
import next from '../assets/right-arrow.png'
import close from '../assets/close.png'

import { div, img } from 'framer-motion/client';


const ImageView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { images = [], currentIndex = 0 } = location.state || {};
    const [index, setIndex] = useState(currentIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const viewerRef = useRef(null);

    const goNext = () => {
        if (index < images.length - 1) setIndex(index + 1);
    };

    const goPrev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const handleFullscreen = () => {
        if (viewerRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                viewerRef.current.requestFullscreen().catch((err) => {
                    console.error("Failed to enter fullscreen:", err);
                });
            }
        }
    };

    // Listen to fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);

            // Trigger recenter check
            setTimeout(() => {
                if (imageRef.current) {
                    const imageHeight = imageRef.current.naturalHeight * (imageRef.current.clientWidth / imageRef.current.naturalWidth);
                    setIsCentered(imageHeight < (window.innerHeight - 200));
                }
            }, 300); // delay to allow layout update
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);



    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                goNext();
            } else if (e.key === 'ArrowLeft') {
                goPrev();
            } else if (e.key === 'F11') {
                e.preventDefault(); // optional: prevent browser dev tools if needed
                handleFullscreen();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [index, isFullscreen]); // depend on index and fullscreen state



    const imageRef = useRef(null);
    const containerHeight = window.innerHeight - 200;
    const [isCentered, setIsCentered] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            if (imageRef.current) {
                const imageHeight = imageRef.current.naturalHeight * (imageRef.current.clientWidth / imageRef.current.naturalWidth);
                setIsCentered(imageHeight < containerHeight);
            }
        };

        const img = imageRef.current;
        if (img?.complete) {
            handleLoad();
        } else {
            img?.addEventListener('load', handleLoad);
            return () => img?.removeEventListener('load', handleLoad);
        }
    }, [index]);



    return (
        <div ref={viewerRef} className='flex flex-col text-white p-10 gap-5 bg-black '>

            <div className="flex justify-between items-start w-full hidden-animate-fade">

                <button onClick={handleFullscreen}>

                    {isFullscreen ?

                        <div className='w-8 h-8'>
                            <img
                                src={min}
                                alt="Ext Full Screen"
                                className="w-full h-full"
                            />
                        </div>

                        :

                        <div className='w-8 h-8'>
                            <img
                                src={max}
                                alt="Full Screen"
                                className="w-full h-full"
                            />
                        </div>
                    }
                </button>

                <button onClick={() => navigate(-1)}>
                    <div className='w-6 h-6'>
                        <img
                            src={close}
                            alt="Close"
                            className="w-full h-full"
                        />
                    </div>
                </button>
            </div>

            <div className="flex flex-row justify-between items-center gap-10 w-full h-full hidden-animate-fade ">

                {index > 0 ? (
                    <button onClick={goPrev}>
                        <div className='w-8 h-8'>
                            <img
                                src={prev}
                                alt="Prev"
                                className="w-full h-full"
                            />
                        </div>
                    </button>
                ) : (
                    <div className="w-[60px]" />
                )}

                <div className={`w-5/6 h-[calc(100vh-200px)] flex overflow-y-auto custom-scrollbar ${isCentered ? 'items-center' : 'items-start'}`}>
                    <img
                        ref={imageRef}
                        src={images[index]}
                        alt={`Image ${index + 1}`}
                        className="w-full rounded-lg border"
                    />
                </div>

                {index < images.length - 1 ? (
                    <button onClick={goNext}>
                        <div className='w-8 h-8'>
                            <img
                                src={next}
                                alt="Next"
                                className="w-full h-full"
                            />
                        </div>
                    </button>
                ) : (
                    <div className="w-[60px]" />
                )}
            </div>
        </div>
    );
};

export default ImageView;
