import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectBox from './ProjectBox'

import { a } from 'framer-motion/client'

import { LibrosImages } from './../../assets/Images.js';
import { ZhiImages } from './../../assets/Images.js';
import { NuevoImages } from './../../assets/Images.js';
import { FinanImages } from './../../assets/Images.js';
import { GMSImages } from './../../assets/Images.js';
import { A8Images } from './../../assets/Images.js';
import { RitzyImages } from './../../assets/Images.js';

import { PosterImages } from './../../assets/Images.js';

const ProjectMore = () => {

    return (
        <div className='flex flex-col items-center justify-center gap-20 text-white  h-auto m-12'>

            <span className='text-5xl text-white text-center block hidden-animate-fade'>Projects</span>

            <div className="w-4/5  flex flex-row flex-wrap justify-center gap-10">

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


                {/* FinanZen Project */}
                <ProjectBox
                    src={PosterImages.finanzenposter}
                    alt=""
                    title="FinanZen"
                    description="FinanZen is a mobile application calculator with additional features compared to standard calculators. It was developed during my third year, first semester (2023), in the Elective 1 (ELEC 1) subject at the University of Makati (UMak), using Java and Android Studio. The app includes tools for financial planning, unit and currency conversion, and note-taking, making it a versatile companion for everyday use."
                    features={[
                        "Basic Calculator: Perform arithmetic operations such as addition, subtraction, multiplication, and division.",
                        "Unit Conversion: Convert between various measurement units (length, weight, temperature, etc.).",
                        "Currency Conversion: Convert between different currencies with updatable rates.",
                        "History: Keeps a record of previous calculations for easy reference.",
                        "Notes with CRUD: Create, read, update, and delete personal notes.",
                        "Scan to Text: Convert handwritten or printed text into editable notes using OCR.",
                        "Voice to Text: Convert spoken words into note text for faster input.",
                        "Simple Budgeting Tool: Track income and expenses, set budgets, and monitor financial goals."
                    ]}
                    tools={[
                        "XML",
                        "Java",
                        "Android Studio",
                        "SQLite"
                    ]}
                    images={[
                        FinanImages.f1, FinanImages.f2, FinanImages.f3, FinanImages.f4, FinanImages.f5, FinanImages.f6, FinanImages.f7, FinanImages.f8,
                        FinanImages.f9_0, FinanImages.f9_1, FinanImages.f10, FinanImages.f11, FinanImages.f12, FinanImages.f13, FinanImages.f14
                    ]}
                    color1="#3286E9"
                    color2="#1F5FBF"
                    style={{ "--delay": "300ms" }} />


                {/* Gym Management System Project */}
                <ProjectBox
                    src={PosterImages.gmsposter}
                    alt="GMS"
                    title="GMS"
                    description="A Gym Management System developed using PHP and MySQL. This project is similar to my previous gym management system built with C#, but this version uses web technologies. It was created during my second year, second semester (2023) at the University of Makati (UMak) for our Application Development (AppDev) subject. The system handles memberships, payments, and equipment inventory. It is a fully functional web application designed to efficiently manage gym operations."
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
                        GMSImages.g1, GMSImages.g2, GMSImages.g3, GMSImages.g4, GMSImages.g5_0, GMSImages.g5_1, GMSImages.g6_0, GMSImages.g6_1,
                        GMSImages.g7_0, GMSImages.g7_1, GMSImages.g7_2, GMSImages.g7_3, GMSImages.g7_4, GMSImages.g8, GMSImages.g9,
                        GMSImages.g10, GMSImages.g11_0, GMSImages.g11_1, GMSImages.g11_2, GMSImages.g11_3, GMSImages.g11_4, GMSImages.g11_5
                    ]}
                    color1="#FF731C"
                    color2="#D95400"
                    style={{ "--delay": "900ms" }} />



                {/* A8 Management */}
                <ProjectBox
                    src={PosterImages.a8poster}
                    alt=""
                    title="A8 Management"
                    description="A8 Pounder Gym Management System is a desktop application developed using C# during my second year (2022) in the Object-Oriented Programming OOP (OOP) subject at the University of Makati (UMak).
                                A8 Pounder Gym, located in Pembo, Taguig City, Metro Manila, Philippines, previously relied on manual logbooks to manage their operations, which made tracking and organizing data difficult.
                                This system provides a fully functional solution for managing gym operations, including member registration, payment tracking, and more. It significantly improves efficiency and accuracy in daily gym activities."
                    features={[
                        "User Authentication & Role Management: Secure login system for admins and staff with role-based access control.",
                        "Input Validation: Ensures user input is correct and meets defined rules for accuracy.",
                        "Member & Staff Management (CRUD): Manage creation, updates, and deletion of member, coach, and staff records.",
                        "Search & Filtering: Locate member, coach, staff profiles and payment records quickly.",
                        "Data Analytics: Visual summaries of monthly income from members and non-members.",
                        "Report Generation: Generate summary reports for daily, weekly, monthly, and yearly income, as well as total counts of staff, coaches, equipment, members (active and inactive), and non-members.",
                        "Print Support: Allows printing of organized lists such as members, coaches, staff, equipment, and payment records in a clean, print-ready format.",
                        "QR Code Generation & Email: Automatically generates a QR code for each registered member and sends it to their email for easy check-in and verification.",
                        "Email Composer: Allows admins and staff to compose and send emails directly from the system to members for announcements, reminders, and updates.",
                        "Calendar & Notifications: Integrated calendar for scheduling sessions, payments, and events, with automated notifications for important dates."
                    ]}
                    tools={[
                        "C#", "SQL Server", "Windows Forms"
                    ]}

                    images={[
                        A8Images.a1, A8Images.a2, A8Images.a3, A8Images.a4_0, A8Images.a4_1, A8Images.a4_2, A8Images.a4_3,
                        A8Images.a5_0, A8Images.a5_1, A8Images.a5_2, A8Images.a6_0, A8Images.a6_1, A8Images.a6_2,
                        A8Images.a6_3, A8Images.a7_0, A8Images.a7_1, A8Images.a7_2, A8Images.a8_0, A8Images.a8_1,
                        A8Images.a8_2, A8Images.a8_3, A8Images.a9_0, A8Images.a9_1, A8Images.a10_0, A8Images.a10_1,
                        A8Images.a10_2, A8Images.a10_3, A8Images.a11, A8Images.a12, A8Images.a13
                    ]}
                    color1="#FBD34B"
                    color2="#E4B925"
                    style={{ "--delay": "300ms" }} />



                {/* AliRitzy Website */}
                <ProjectBox
                    src={PosterImages.aliritsyposter}
                    alt=""
                    title="AliRitzy Website"
                    description="This was my first project during my first year (2021) in the Web Application Development (WEBAPPS) subject at the University of Makati (UMak). We were instructed to create a website for a selected client.
                                AliRitzy is an online clothing shop that sells dresses, shorts, skirts, pants, and more through platforms like Facebook and Shopee. The client needed a website to professionally showcase their products, reach a wider audience, and improve customer accessibility beyond social media platforms.
                                This simple website highlights my skills in HTML and CSS. The project was a great learning experience, allowing me to apply the concepts learned in class to build a functional and visually appealing website."
                    features={[
                        "Responsive product gallery for clothing categories"
                    ]}

                    tools={[
                        "HTML",
                        "CSS"
                    ]}

                    images={[
                        RitzyImages.ar1, RitzyImages.ar2, RitzyImages.ar3, RitzyImages.ar4, RitzyImages.ar5, RitzyImages.ar6
                    ]}
                    color1="#E49791"
                    color2="#C86D68"
                    style={{ "--delay": "300ms" }} />

            </div>

        </div>
    )
}

export default ProjectMore