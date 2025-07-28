import React, { useRef, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';

import L from "leaflet";
import "leaflet/dist/leaflet.css";


const { BaseLayer } = LayersControl;


import email from '../../assets/email.png';
import phone from '../../assets/phone.png';


import emailjs from '@emailjs/browser';
import Alert from '../../Components/Alert'; // adjust the path


const Contact = () => {

    const position = [14.5547, 121.0244]; // Makati

    const formRef = useRef();
    const [alert, setAlert] = useState(null);

    const hasSentToday = () => {
        const lastSent = localStorage.getItem('lastEmailSent');
        if (!lastSent) return false;

        const lastDate = new Date(lastSent).toDateString();
        const today = new Date().toDateString();
        return lastDate === today;
    };

    const markEmailSent = () => {
        localStorage.setItem('lastEmailSent', new Date().toISOString());
    };



    // TEMPORARY testing function
    const testSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Check for blank fields
        if (!name || !email || !message) {
            setAlert({ message: 'Please fill out all fields.', type: 'error' });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        // Check localStorage limit (per device, per browser)
        const lastSent = localStorage.getItem("lastEmailSent");
        const today = new Date().toDateString();

        if (lastSent === today) {
            setAlert({ message: 'You can only send one message per day.', type: 'error' });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        // Simulate success/failure
        const success = true;

        if (success) {
            localStorage.setItem("lastEmailSent", today);
            setAlert({ message: 'Test: Message sent successfully!', type: 'success' });
            form.reset();
        } else {
            setAlert({ message: 'Test: Failed to send message.', type: 'error' });
        }

        setTimeout(() => setAlert(null), 3000);
    };


    const sendEmail = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Check for blank fields
        if (!name || !email || !message) {
            setAlert({ message: 'Please fill out all fields.', type: 'error' });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        // Check localStorage limit (per device, per browser)
        const lastSent = localStorage.getItem("lastEmailSent");
        const today = new Date().toDateString();

        if (lastSent === today) {
            setAlert({ message: 'You can only send one message per day.', type: 'error' });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        emailjs
            .sendForm(
                'service_9ul2wkh',
                'template_x6jzzgq',
                form,
                'ULrFVBV8Ly9r6wOpA'
            )
            .then(
                (result) => {
                    localStorage.setItem("lastEmailSent", today);
                    setAlert({ message: 'Message sent successfully!', type: 'success' });
                    form.reset();
                },
                (error) => {
                    setAlert({ message: 'Failed to send message. Try again later.', type: 'error' });
                }
            );

        setTimeout(() => setAlert(null), 3000);
    };


    return (
        <div className='flex flex-col justify-center items-center gap-10 p-10 my-10 text-white h-[calc(100vh-5rem)] snap-start'>

            <div className="flex flex-row w-full justify-center">


                {/* Contact Form */}

                <div className="w-5/12">

                    {alert && <Alert message={alert.message} type={alert.type} />}

                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="max-w-md mx-auto space-y-4 p-6 flex flex-col bg-gray-800 gap-5 rounded-lg hidden-animate-fade">

                        <span className='text-5xl text-white'>Contact Me</span>

                        <div>
                            <label htmlFor="name" className="block text-white font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-600 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-600 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name='message'
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-600 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>

                </div>


                <div className=' w-5/12 flex flex-col justify-center items-center gap-5 hidden-animate-fade'>
                    
                    
                    <span>
                        I'd love to hear from you! Whether it’s a project, feedback, or just a hello — feel free to reach out. Let’s build something great together. Drop a message and let’s talk!
                    </span>


                    {/* Contact Info*/}

                    <div className="flex gap-10">
                        <div className='flex flex-col m-5 items-center gap-2'>
                            <div className='w-14 h-14'>
                                <img src={email} alt="Email" className='w-full h-full' />
                            </div>
                            <span className='font-bold'>Email Address</span>
                            <span>jlemuellbacolod@gmail.com</span>
                        </div>

                        <div className='flex flex-col m-5 items-center gap-2'>
                            <div className='w-14 h-14'>
                                <img src={phone} alt="Phone" className='w-full h-full' />
                            </div>
                            <span className='font-bold'>Phone Number</span>
                            <span>09957733887</span>
                        </div>
                    </div>



                    {/* Map Container */}

                    <div className="h-[250px] w-full z-0 rounded-lg overflow-hidden"> {/* Outer wrapper sets dimensions */}
                        <MapContainer
                            center={position}
                            zoom={13}
                            scrollWheelZoom={true}
                            className="h-full w-full"
                        >
                            <LayersControl position="topright">
                                {/* 1. Default: OpenStreetMap */}
                                <LayersControl.BaseLayer name="OpenStreetMap">
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                </LayersControl.BaseLayer>

                                {/* 2. Esri Satellite View */}
                                <LayersControl.BaseLayer name="Esri Satellite">
                                    <TileLayer
                                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                        attribution="Tiles © Esri"
                                    />
                                </LayersControl.BaseLayer>

                                {/* 3. Carto Dark */}
                                <LayersControl.BaseLayer name="Carto Dark">
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                        attribution="&copy; Carto"
                                    />
                                </LayersControl.BaseLayer>

                                {/* 4. Carto Light */}
                                <LayersControl.BaseLayer checked name="Carto Light">
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                        attribution="&copy; Carto"
                                    />
                                </LayersControl.BaseLayer>

                                {/* 5. Stamen Toner */}
                                <LayersControl.BaseLayer name="Stamen Toner (via Carto)">
                                    <TileLayer
                                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                                        attribution='&copy; Stadia Maps, OpenMapTiles & OpenStreetMap contributors'
                                    />
                                </LayersControl.BaseLayer>


                                {/* 6. Stamen Watercolor */}
                                <LayersControl.BaseLayer name="OpenTopoMap">
                                    <TileLayer
                                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                                        attribution='Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap'
                                    />
                                </LayersControl.BaseLayer>


                            </LayersControl>

                            {/* Marker */}
                            <Marker position={position}>
                                <Popup>📍 Makati, Philippines</Popup>
                            </Marker>
                        </MapContainer>


                    </div>

                </div>


            </div>





        </div>
    )
}

export default Contact