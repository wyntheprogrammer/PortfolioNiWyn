import React from 'react'
import AccomBox from './AccomBox'
import badge from '../../assets/badge-white.png'


import imgsc1 from '../../assets/School Certificates/1.jpg';
import imgsc2 from '../../assets/School Certificates/2.jpg';
import imgsc3 from '../../assets/School Certificates/3.jpg';
import imgsc4 from '../../assets/School Certificates/4.jpg';
import imgsc5 from '../../assets/School Certificates/5.jpg';
import imgsc6 from '../../assets/School Certificates/6.jpg';
import imgsc7 from '../../assets/School Certificates/7.jpg';
import imgsc8 from '../../assets/School Certificates/8.jpg';
import imgsc9 from '../../assets/School Certificates/9.jpg';
import imgsc10 from '../../assets/School Certificates/10.jpg';
import imgsc11 from '../../assets/School Certificates/11.jpg';
import imgsc12 from '../../assets/School Certificates/12.jpg';
import imgsc13 from '../../assets/School Certificates/13.jpg';
import imgsc14 from '../../assets/School Certificates/14.jpg';
import imgsc15 from '../../assets/School Certificates/15.jpg';
import imgsc16 from '../../assets/School Certificates/16.jpg';
import imgsc17 from '../../assets/School Certificates/17.jpg';
import imgsc18 from '../../assets/School Certificates/18.jpg';
import imgsc19 from '../../assets/School Certificates/19.jpg';
import imgsc20 from '../../assets/School Certificates/20.jpg';
import imgsc21 from '../../assets/School Certificates/21.jpg';
import imgsc22 from '../../assets/School Certificates/22.jpg';
import imgsc23 from '../../assets/School Certificates/23.jpg';
import imgsc24 from '../../assets/School Certificates/24.jpg';
import imgsc25 from '../../assets/School Certificates/25.jpg';
import imgsc26 from '../../assets/School Certificates/26.jpg';
import imgsc271 from '../../assets/School Certificates/27.1.jpg';
import imgsc272 from '../../assets/School Certificates/27.2.jpg';
import imgsc273 from '../../assets/School Certificates/27.3.jpg';
import imgsc274 from '../../assets/School Certificates/27.4.jpg';
import imgsc28 from '../../assets/School Certificates/28.jpg';
import imgsc29 from '../../assets/School Certificates/29.jpg';
import imgsc30 from '../../assets/School Certificates/30.jpg';
import imgsc31 from '../../assets/School Certificates/31.jpg';
import imgsc32 from '../../assets/School Certificates/32.jpg';


import imgd1 from '../../assets/Diploma/1.jpg';
import imgd2 from '../../assets/Diploma/2.jpg';
import imgd3 from '../../assets/Diploma/3.jpg';
import imgd4 from '../../assets/Diploma/4.jpg';


import imgoc1 from '../../assets/Online Certificates/1.jpg';
import imgoc2 from '../../assets/Online Certificates/2.png';
import imgoc3 from '../../assets/Online Certificates/3.png';
import imgoc4 from '../../assets/Online Certificates/4.jpg';
import imgoc5 from '../../assets/Online Certificates/5.jpg';
import imgoc6 from '../../assets/Online Certificates/6.jpg';
import imgoc7 from '../../assets/Online Certificates/7.jpg';
import imgoc8 from '../../assets/Online Certificates/8.jpg';
import imgoc9 from '../../assets/Online Certificates/9.jpg';
import imgoc10 from '../../assets/Online Certificates/10.jpg';
import imgoc11 from '../../assets/Online Certificates/11.jpg';
import imgoc12 from '../../assets/Online Certificates/12.jpg';
import imgoc13 from '../../assets/Online Certificates/13.jpg';
import imgoc14 from '../../assets/Online Certificates/14.jpg';
import imgoc15 from '../../assets/Online Certificates/15.jpg';
import imgoc16 from '../../assets/Online Certificates/16.jpg';


const Accomplishment = () => {
    return (
        <div className='snap-start flex flex-col justify-center bg-black my-10 h-[calc(100vh-5rem)] snap-start'>
            <span className='text-5xl text-white text-center block p-10 hidden-animate-fade'>Accomplishment</span>

            <div className="flex text-white justify-center gap-10">

                <AccomBox
                    src={badge}
                    title="School Certificates"
                    alt="School Certificates"
                    description="My school certificates reflect the academic accomplishments I achieved during my formal education. These include recognitions for academic excellence, participation in school programs, and successful completion of various subjects and levels. They highlight my strong educational foundation, discipline, and commitment to achieving high standards throughout my academic journey."
                    images={[
                        imgsc32,
                        imgsc31,
                        imgsc30,
                        imgsc29,
                        imgsc28,
                        imgsc274,
                        imgsc273,
                        imgsc272,
                        imgsc271,
                        imgsc26,
                        imgsc25,
                        imgsc24,
                        imgsc23,
                        imgsc22,
                        imgsc21,
                        imgsc20,
                        imgsc19,
                        imgsc18,
                        imgsc17,
                        imgsc16,
                        imgsc15,
                        imgsc14,
                        imgsc13,
                        imgsc12,
                        imgsc11,
                        imgsc10,
                        imgsc9,
                        imgsc8,
                        imgsc7,
                        imgsc6,
                        imgsc5,
                        imgsc4,
                        imgsc3,
                        imgsc2,
                        imgsc1
                    ]}
                    style={{ "--delay": "300ms" }} />


                <AccomBox
                    src={badge}
                    title="School Diploma"
                    alt="School Diploma"
                    description="My diplomas represent the formal completion of key academic milestones throughout my educational journey. They serve as official proof of my graduation from various levels of study, reflecting my dedication, perseverance, and ability to meet academic standards. These diplomas highlight the foundation of my professional and personal growth, built through years of focused learning and achievement."
                    images={[
                        imgd4,
                        imgd3,
                        imgd2,
                        imgd1
                    ]}
                    style={{ "--delay": "300ms" }} />


                <AccomBox
                    src={badge}
                    title="Online Certificates"
                    alt="Online Certificates"
                    description="My collection of online certificates represents my dedication to continuous learning and professional development. These certificates were earned through self-paced courses and workshops from reputable platforms, covering a wide range of topics relevant to my field. They showcase my initiative to expand my skills, stay current with industry trends, and adapt to evolving technologies and practices."
                    images={[imgoc16,
                        imgoc15,
                        imgoc14,
                        imgoc13,
                        imgoc12,
                        imgoc11,
                        imgoc10,
                        imgoc9,
                        imgoc8,
                        imgoc7,
                        imgoc6,
                        imgoc5,
                        imgoc4,
                        imgoc3,
                        imgoc2,
                        imgoc1]}
                    style={{ "--delay": "100ms" }} />

            </div>

        </div>


    )
}

export default Accomplishment