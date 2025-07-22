import React from 'react'
import lms from '../../assets/lms.png'
import bms from '../../assets/bms.png'
import gms from '../../assets/gms.png'

import g1 from '../../assets/Project/G/g1.png';
import g2 from '../../assets/Project/G/g2.png';
import g3 from '../../assets/Project/G/g3.png';
import g4 from '../../assets/Project/G/g4.png';
import g5_0 from '../../assets/Project/G/g5.0.png';
import g5_1 from '../../assets/Project/G/g5.1.png';
import g6_0 from '../../assets/Project/G/g6.0.png';
import g6_1 from '../../assets/Project/G/g6.1.png';
import g7_0 from '../../assets/Project/G/g7.0.png';
import g7_1 from '../../assets/Project/G/g7.1.png';
import g7_2 from '../../assets/Project/G/g7.2.png';
import g7_3 from '../../assets/Project/G/g7.3.png';
import g7_4 from '../../assets/Project/G/g7.4.png';
import g8 from '../../assets/Project/G/g8.png';
import g9 from '../../assets/Project/G/g9.png';
import g10 from '../../assets/Project/G/g10.png';
import g11_0 from '../../assets/Project/G/g11.0.png';
import g11_1 from '../../assets/Project/G/g11.1.png';
import g11_2 from '../../assets/Project/G/g11.2.png';
import g11_3 from '../../assets/Project/G/g11.3.png';
import g11_4 from '../../assets/Project/G/g11.4.png';
import g11_5 from '../../assets/Project/G/g11.5.png';


import ProjectBox from './ProjectBox'

const Project = () => {
    return (
        <div className='snap-start flex flex-col justify-center items-center gap-10 text-white my-10 h-[calc(100vh-5rem)] snap-start'>

            <span className='text-5xl text-white text-center block hidden-animate-fade'>Projects</span>

            <div className="flex flex-row justify-center gap-10">

                <ProjectBox
                    src={lms}
                    alt="LMS"
                    title="MakatiLibros"
                    description="A system for Makati City Hall Library developed using PHP and MySQL, with Python used for implementing hybrid filtering techniques to recommend books. This thesis project is still in progress, started in 2024 during my fourth year at University of Makati (UMAK). It is challenging because it involves managing the entire library system for Makati citizens and visitors, including non-residents. Additionally, the algorithm used for hybrid filtering is complex and requires careful implementation."
                    style={{ "--delay": "300ms" }} />
                <ProjectBox
                    src={bms}
                    alt="BMS"
                    title="NuevoLink"
                    description="A barangay website for Barangay Nuevo, Makati City, developed using CodeIgniter, PHP, and MySQL to manage records, provide announcements, and facilitate resident services. Created during my third-year project at University of Makati (UMAK) in 2023, it was a challenging experience as it was my first major project for a barangay, accommodating both residents and barangay officials."
                    style={{ "--delay": "600ms" }} />
                <ProjectBox
                    src={gms}
                    alt="GMS"
                    title="GMS"
                    description="A Gym management system developed using PHP and MySQL to handle memberships, payments, and equipment inventory. It is a fully functional web application created during my second year in 2022 to efficiently manage gym operations."
                    features={[
                        "User Authentication & Role Management: Secure login system for admins and staff with role-based access control.",
                        "Input Validation: Ensures user input is correct and meets defined rules for accuracy.",
                        "Member & Staff Management (CRUD): Manage creation, updates, and deletion of member, coach, and staff records.",
                        "Search & Filtering: Locate member, coach, staff, profiles and payments.",
                        "Data Analytics: Visual summaries of monthly income for members and non-members.",
                        "Report Generation: Creates summary reports for daily, weekly, monthly, and yearly income, as well as total counts of staff, coaches, members (active and inactive), and non-members.",
                        "Print Support: Allows printing of organized lists such as members, coaches, staff, and payment records in a clean, print-ready format.",
                    ]}
                    tools={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "MySQL",
                    ]}
                    images={[
                        g1, g2, g3, g4, g5_0, g5_1, g6_0, g6_1,
                        g7_0, g7_1, g7_2, g7_3, g7_4, g8, g9,
                        g10, g11_0, g11_1, g11_2, g11_3, g11_4,
                        g11_5
                    ]}
                    style={{ "--delay": "900ms" }} />

            </div>


            <button className='rounded-sm border border-[#3b82f6] w-max py-2 px-10 font-bold cursor-pointer hover:scale-110 transition-transform duration-300 hidden-animate-fade'>View more</button>

        </div>

    )
}

export default Project