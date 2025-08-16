import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectBox from './ProjectBox'

import { LibrosImages } from './../../assets/Images.js';
import { ZhiImages } from './../../assets/Images.js';
import { NuevoImages } from './../../assets/Images.js';
import { FinanImages } from './../../assets/Images.js';
import { GMSImages } from './../../assets/Images.js';
import { A8Images } from './../../assets/Images.js';
import { RitzyImages } from './../../assets/Images.js';

import { PosterImages } from './../../assets/Images.js';

const Project = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center gap-10 text-white my-10 min-h-[calc(100vh-5rem)] sm:snap-start'>

            <span className='text-3xl sm:text-4xl md:text-5xl text-white text-center block hidden-animate-fade'>Projects</span>

            <div className="flex flex-wrap justify-center gap-10 ml-10 mr-10">

                {/* MakatiLibros Project */}
                <ProjectBox
                    src={PosterImages.librosposter}
                    alt="LMS"
                    title="MakatiLibros"
                    description="A system for Makati City Hall Library developed using PHP and MySQL, with Python used for implementing hybrid filtering techniques to recommend books. This thesis project is still in progress, started in 2024 during my fourth year at University of Makati (UMAK). It is challenging because it involves managing the entire library system for Makati citizens and visitors, including non-residents. Additionally, the algorithm used for hybrid filtering is complex and requires careful implementation."
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
                        "PHP",
                        "MySQL",
                    ]}
                    images={[
                        LibrosImages.mw1, LibrosImages.mw2, LibrosImages.mw3, LibrosImages.mw4, LibrosImages.mw5_0, LibrosImages.mw5_1, LibrosImages.mw5_2, LibrosImages.mw5_3, LibrosImages.mw5_4, LibrosImages.mw5_5,
                        LibrosImages.mw5_6, LibrosImages.mw5_7, LibrosImages.mw5_8, LibrosImages.mw5_9, LibrosImages.mw5_10, LibrosImages.mw5_11, LibrosImages.mw5_12, LibrosImages.mw5_13,
                        LibrosImages.mw5_14, LibrosImages.mw6_0, LibrosImages.mw6_1, LibrosImages.mw7_0, LibrosImages.mw7_1, LibrosImages.mw7_2, LibrosImages.mw7_3, LibrosImages.mw7_4,
                        LibrosImages.mw8, LibrosImages.mw9, LibrosImages.mw10, LibrosImages.mw11, LibrosImages.mw12, LibrosImages.mw13, LibrosImages.mw14, LibrosImages.mw15, LibrosImages.ma1, LibrosImages.ma2_0,
                        LibrosImages.ma2_1, LibrosImages.ma2_2, LibrosImages.ma2_3, LibrosImages.ma2_4, LibrosImages.ma2_5, LibrosImages.ma3_0, LibrosImages.ma3_1, LibrosImages.ma3_2,
                        LibrosImages.ma4_0, LibrosImages.ma4_1, LibrosImages.ma4_2, LibrosImages.ma5_0, LibrosImages.ma5_1, LibrosImages.ma5_2, LibrosImages.ma5_3, LibrosImages.ma5_4, LibrosImages.ma5_5,
                        LibrosImages.ma5_6, LibrosImages.ma5_7, LibrosImages.ma5_8, LibrosImages.ma5_9, LibrosImages.ma5_10, LibrosImages.ma5_11, LibrosImages.ma5_12, LibrosImages.ma5_13, LibrosImages.ma5_14,
                        LibrosImages.ma5_15, LibrosImages.ma5_16, LibrosImages.ma5_17, LibrosImages.ma5_18, LibrosImages.ma5_19, LibrosImages.ma5_20, LibrosImages.ma5_21, LibrosImages.ma5_22, LibrosImages.ma5_23,
                        LibrosImages.ma5_24, LibrosImages.ma5_25, LibrosImages.ma6_0, LibrosImages.ma6_1, LibrosImages.ma6_2, LibrosImages.ma7_0, LibrosImages.ma7_1, LibrosImages.ma7_2, LibrosImages.ma7_3,
                        LibrosImages.ma7_4, LibrosImages.ma7_5, LibrosImages.ma8_0, LibrosImages.ma8_1, LibrosImages.ma8_2, LibrosImages.ma9_0, LibrosImages.ma9_1, LibrosImages.ma9_2, LibrosImages.ma9_3, LibrosImages.ma10_0,
                        LibrosImages.ma10_1, LibrosImages.ma11_0, LibrosImages.ma11_1, LibrosImages.ma12_0, LibrosImages.ma12_1, LibrosImages.ma12_2, LibrosImages.ma12_3, LibrosImages.ma12_4,
                        LibrosImages.ma12_5, LibrosImages.ma12_6, LibrosImages.ma12_7, LibrosImages.ma12_8, LibrosImages.ma12_9, LibrosImages.ma13_0, LibrosImages.ma13_1, LibrosImages.ma13_2, LibrosImages.ma14_0,
                        LibrosImages.ma14_1, LibrosImages.ma14_2, LibrosImages.ma14_3, LibrosImages.ma14_4, LibrosImages.ma14_5, LibrosImages.ma14_6, LibrosImages.ma14_7, LibrosImages.ma14_8, LibrosImages.ma14_9,
                        LibrosImages.ma14_10, LibrosImages.ma15_0, LibrosImages.ma15_1, LibrosImages.ma16_0, LibrosImages.ma16_1, LibrosImages.ma16_2, LibrosImages.ma16_3, LibrosImages.ma17_0, LibrosImages.ma17_1, LibrosImages.ma17_2, LibrosImages.ma17_3
                    ]}
                    color1="#D9D3C0"
                    color2="#B0A78E"

                    style={{ "--delay": "300ms" }} />


                {/* Zhi Inventory Project */}
                <ProjectBox
                    src={PosterImages.zhiposter}
                    alt=""
                    title="Zhiyuan Inventory"
                    description="Zhiyuan Inventory is a web-based inventory system developed during my internship in 2025 at Zhiyuan Enterprise Group Inc., a company that specializes in providing high-quality products to its customers. The system manages a wide variety of products, including different brands of billiard equipment, motorcycle accessories, and anime figurines. The project was built using PHP, MySQL, and JavaScript, and is designed to help the company manage its inventory more efficiently."
                    features={[
                        "User Authentication & Role Management: Secure login system for admins and staff with role-based access control.",
                        "Input Validation: Ensures that user input is accurate and meets defined rules.",
                        "Shop & Employee Management (CRUD): Create, read, update, and delete shop and employee records.",
                        "Audit Trails: Logs system activities for accountability and transparency.",
                        "Search & Filtering: Quickly locate records using dynamic filters and search functions.",
                        "Data Analytics: Provides visual summaries of monthly sales and performance.",
                        "Report Generation: Generates summary reports for daily, weekly, monthly, and yearly income, including total counts of sales, stock levels, repaired items, and damaged items.",
                        "Print Support: Enables printing of clean, organized lists such as shop inventories, product records, and sales reports."
                    ]}

                    tools={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "PHP",
                        "MySQL"
                    ]}

                    images={[
                        ZhiImages.z1, ZhiImages.z2, ZhiImages.z3_0, ZhiImages.z3_1, ZhiImages.z3_2, ZhiImages.z3_3, ZhiImages.z3_4, ZhiImages.z3_5,
                        ZhiImages.z3_6, ZhiImages.z3_7, ZhiImages.z3_8, ZhiImages.z3_9, ZhiImages.z3_10, ZhiImages.z3_11, ZhiImages.z3_12,
                        ZhiImages.z3_13, ZhiImages.z3_14, ZhiImages.z4_0, ZhiImages.z4_1, ZhiImages.z4_2, ZhiImages.z4_3, ZhiImages.z5,
                        ZhiImages.z6_0, ZhiImages.z6_1, ZhiImages.z6_2, ZhiImages.z6_3, ZhiImages.z6_4, ZhiImages.z6_5, ZhiImages.z6_6,
                        ZhiImages.z6_7, ZhiImages.z6_8, ZhiImages.z7_0, ZhiImages.z7_1, ZhiImages.z7_2
                    ]}
                    color1="#A68F75"
                    color2="#8C715B"
                    style={{ "--delay": "300ms" }} />


                {/* NuevoLink Project */}
                <ProjectBox
                    src={PosterImages.nuevoposter}
                    alt="BMS"
                    title="NuevoLink"
                    description="A barangay website for Barangay Nuevo, Makati City, developed using CodeIgniter, PHP, and MySQL to manage records, provide announcements, and facilitate resident services. Created during my third-year project at University of Makati (UMAK) in 2023, it was a challenging experience as it was my first major project for a barangay, accommodating both residents and barangay officials."
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
                        "PHP",
                        "MySQL",
                    ]}
                    images={[
                        NuevoImages.nw1, NuevoImages.nw2, NuevoImages.nw3, NuevoImages.nw4, NuevoImages.nw5, NuevoImages.nw6, NuevoImages.nw7,
                        NuevoImages.nw8_0, NuevoImages.nw8_1, NuevoImages.nw8_2, NuevoImages.nw8_3, NuevoImages.nw8_4,
                        NuevoImages.nw9_0, NuevoImages.nw9_1, NuevoImages.nw9_2, NuevoImages.nw10_0, NuevoImages.nw10_1,
                        NuevoImages.nw11_0, NuevoImages.nw11_1, NuevoImages.na1, NuevoImages.na2_0, NuevoImages.na2_1,
                        NuevoImages.na2_2, NuevoImages.na2_3, NuevoImages.na3_0, NuevoImages.na3_1, NuevoImages.na3_2,
                        NuevoImages.na4_0, NuevoImages.na4_1, NuevoImages.na5_0, NuevoImages.na5_1, NuevoImages.na6_0,
                        NuevoImages.na6_1, NuevoImages.na7_0, NuevoImages.na7_1, NuevoImages.na7_2, NuevoImages.na8_0,
                        NuevoImages.na8_1, NuevoImages.na8_2, NuevoImages.na9_0, NuevoImages.na9_1, NuevoImages.na10,
                        NuevoImages.na11, NuevoImages.na12, NuevoImages.na13_0, NuevoImages.na13_1, NuevoImages.na14_0,
                        NuevoImages.na14_1, NuevoImages.na15_0, NuevoImages.na15_1, NuevoImages.na16
                    ]}
                    color1="#1e3a8a"
                    color2="#3b82f6"
                    style={{ "--delay": "600ms" }} />

            </div>


            <button className='rounded-sm border border-[#E9D676] w-max py-2 px-10 font-bold cursor-pointer hover:scale-110 transition-transform duration-300 hidden-animate-fade' onClick={() => navigate('projmore')}>View more</button>

        </div>

    )
}

export default Project