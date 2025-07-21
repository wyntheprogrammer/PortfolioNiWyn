import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About/About';
import Accomplishment from './Accomplishment/Accomplishment';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Music from './Music';

const Layout = () => {
    const aboutRef = useRef(null);
    const accomplishmentRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    const scrollTo = (ref) => {
        if (ref.current && scrollContainerRef.current) {
            const offsetTop = ref.current.offsetTop;
            scrollContainerRef.current.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const scrollHandlers = {
        home: () => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' }),
        about: () => scrollTo(aboutRef),
        accomplishment: () => scrollTo(accomplishmentRef),
        projects: () => scrollTo(projectsRef),
        contact: () => scrollTo(contactRef),
    };

    // 1. Smooth scrolling if navigated from /certlayout
    useEffect(() => {
        const scrollTarget = location.state?.scrollTo;
        if (scrollTarget && scrollHandlers[scrollTarget]) {
            setTimeout(() => {
                scrollHandlers[scrollTarget]();
                navigate(location.pathname, { replace: true, state: null });
            }, 100);
        }
    }, [location]);

    // 2. Animation observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-animate-swipe', 'show-animate-fade');
                } else {
                    entry.target.classList.remove('show-animate-swipe', 'show-animate-fade');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-animate-swipe, .hidden-animate-fade');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [location.pathname]);



    // 3. Reset scroll on route change (for non-main routes like /certlayout)
    useEffect(() => {
        if (location.pathname !== '/' && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0 });
        }
    }, [location.pathname]);


    return (
        <div className="h-screen bg-black flex flex-col">
            <Music />
            <Navbar onScrollTo={scrollHandlers} />
            <div
                ref={scrollContainerRef}
                className={`flex-1 overflow-y-scroll custom-scrollbar ${location.pathname === '/' ? 'snap-y snap-mandatory' : ''
                    }`}
            >
                {location.pathname === '/' && (
                    <>
                        <Hero />
                        <section ref={aboutRef}><About /></section>
                        <section ref={accomplishmentRef}><Accomplishment /></section>
                        <section ref={projectsRef}><Project /></section>
                        <section ref={contactRef}><Contact /></section>
                    </>
                )}
                <Outlet />
                <Footer snap={location.pathname !== '/certlayout'} />

            </div>
        </div>
    );
};

export default Layout;
