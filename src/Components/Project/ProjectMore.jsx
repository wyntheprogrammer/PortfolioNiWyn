import React from 'react'


import { useNavigate } from 'react-router-dom'


import lms from '../../assets/lms.png'
import bms from '../../assets/bms.png'
import gms from '../../assets/gms.png'



import mw1 from '../../assets/Project/MakatiLibros/Website/m1.jpeg';
import mw2 from '../../assets/Project/MakatiLibros/Website/m2.jpeg';
import mw3 from '../../assets/Project/MakatiLibros/Website/m3.jpeg';
import mw4 from '../../assets/Project/MakatiLibros/Website/m4.jpeg';
import mw5_0 from '../../assets/Project/MakatiLibros/Website/m5.0.jpeg';
import mw5_1 from '../../assets/Project/MakatiLibros/Website/m5.1.png';
import mw5_2 from '../../assets/Project/MakatiLibros/Website/m5.2.png';
import mw5_3 from '../../assets/Project/MakatiLibros/Website/m5.3.png';
import mw5_4 from '../../assets/Project/MakatiLibros/Website/m5.4.png';
import mw5_5 from '../../assets/Project/MakatiLibros/Website/m5.5.png';
import mw5_6 from '../../assets/Project/MakatiLibros/Website/m5.6.png';
import mw5_7 from '../../assets/Project/MakatiLibros/Website/m5.7.png';
import mw5_8 from '../../assets/Project/MakatiLibros/Website/m5.8.png';
import mw5_9 from '../../assets/Project/MakatiLibros/Website/m5.9.png';
import mw5_10 from '../../assets/Project/MakatiLibros/Website/m5.10.png';
import mw5_11 from '../../assets/Project/MakatiLibros/Website/m5.11.png';
import mw5_12 from '../../assets/Project/MakatiLibros/Website/m5.12.png';
import mw5_13 from '../../assets/Project/MakatiLibros/Website/m5.13.png';
import mw5_14 from '../../assets/Project/MakatiLibros/Website/m5.14.png';
import mw6_0 from '../../assets/Project/MakatiLibros/Website/m6.0.png';
import mw6_1 from '../../assets/Project/MakatiLibros/Website/m6.1.png';
import mw7_0 from '../../assets/Project/MakatiLibros/Website/m7.0.jpeg';
import mw7_1 from '../../assets/Project/MakatiLibros/Website/m7.1.png';
import mw7_2 from '../../assets/Project/MakatiLibros/Website/m7.2.png';
import mw7_3 from '../../assets/Project/MakatiLibros/Website/m7.3.png';
import mw7_4 from '../../assets/Project/MakatiLibros/Website/m7.4.png';
import mw8 from '../../assets/Project/MakatiLibros/Website/m8.jpeg';
import mw9 from '../../assets/Project/MakatiLibros/Website/m9.jpeg';
import mw10 from '../../assets/Project/MakatiLibros/Website/m10.jpeg';
import mw11 from '../../assets/Project/MakatiLibros/Website/m11.jpeg';
import mw12 from '../../assets/Project/MakatiLibros/Website/m12.jpeg';
import mw13 from '../../assets/Project/MakatiLibros/Website/m13.jpeg';
import mw14 from '../../assets/Project/MakatiLibros/Website/m14.jpeg';
import mw15 from '../../assets/Project/MakatiLibros/Website/m15.jpeg';

import ma1 from '../../assets/Project/MakatiLibros/Admin/m1.png';
import ma2_0 from '../../assets/Project/MakatiLibros/Admin/m2.0.png';
import ma2_1 from '../../assets/Project/MakatiLibros/Admin/m2.1.png';
import ma2_2 from '../../assets/Project/MakatiLibros/Admin/m2.2.png';
import ma2_3 from '../../assets/Project/MakatiLibros/Admin/m2.3.png';
import ma2_4 from '../../assets/Project/MakatiLibros/Admin/m2.4.png';
import ma2_5 from '../../assets/Project/MakatiLibros/Admin/m2.5.png';
import ma3_0 from '../../assets/Project/MakatiLibros/Admin/m3.0.png';
import ma3_1 from '../../assets/Project/MakatiLibros/Admin/m3.1.png';
import ma3_2 from '../../assets/Project/MakatiLibros/Admin/m3.2.png';
import ma4_0 from '../../assets/Project/MakatiLibros/Admin/m4.0.png';
import ma4_1 from '../../assets/Project/MakatiLibros/Admin/m4.1.png';
import ma4_2 from '../../assets/Project/MakatiLibros/Admin/m4.2.png';
import ma5_0 from '../../assets/Project/MakatiLibros/Admin/m5.0.png';
import ma5_1 from '../../assets/Project/MakatiLibros/Admin/m5.1.png';
import ma5_2 from '../../assets/Project/MakatiLibros/Admin/m5.2.png';
import ma5_3 from '../../assets/Project/MakatiLibros/Admin/m5.3.png';
import ma5_4 from '../../assets/Project/MakatiLibros/Admin/m5.4.png';
import ma5_5 from '../../assets/Project/MakatiLibros/Admin/m5.5.png';
import ma5_6 from '../../assets/Project/MakatiLibros/Admin/m5.6.png';
import ma5_7 from '../../assets/Project/MakatiLibros/Admin/m5.7.png';
import ma5_8 from '../../assets/Project/MakatiLibros/Admin/m5.8.png';
import ma5_9 from '../../assets/Project/MakatiLibros/Admin/m5.9.png';
import ma5_10 from '../../assets/Project/MakatiLibros/Admin/m5.10.png';
import ma5_11 from '../../assets/Project/MakatiLibros/Admin/m5.11.png';
import ma5_12 from '../../assets/Project/MakatiLibros/Admin/m5.12.png';
import ma5_13 from '../../assets/Project/MakatiLibros/Admin/m5.13.png';
import ma5_14 from '../../assets/Project/MakatiLibros/Admin/m5.14.png';
import ma5_15 from '../../assets/Project/MakatiLibros/Admin/m5.15.png';
import ma5_16 from '../../assets/Project/MakatiLibros/Admin/m5.16.png';
import ma5_17 from '../../assets/Project/MakatiLibros/Admin/m5.17.png';
import ma5_18 from '../../assets/Project/MakatiLibros/Admin/m5.18.png';
import ma5_19 from '../../assets/Project/MakatiLibros/Admin/m5.19.png';
import ma5_20 from '../../assets/Project/MakatiLibros/Admin/m5.20.png';
import ma5_21 from '../../assets/Project/MakatiLibros/Admin/m5.21.png';
import ma5_22 from '../../assets/Project/MakatiLibros/Admin/m5.22.png';
import ma5_23 from '../../assets/Project/MakatiLibros/Admin/m5.23.png';
import ma5_24 from '../../assets/Project/MakatiLibros/Admin/m5.24.png';
import ma5_25 from '../../assets/Project/MakatiLibros/Admin/m5.25.png';
import ma6_0 from '../../assets/Project/MakatiLibros/Admin/m6.0.png';
import ma6_1 from '../../assets/Project/MakatiLibros/Admin/m6.1.png';
import ma6_2 from '../../assets/Project/MakatiLibros/Admin/m6.2.png';
import ma7_0 from '../../assets/Project/MakatiLibros/Admin/m7.0.png';
import ma7_1 from '../../assets/Project/MakatiLibros/Admin/m7.1.png';
import ma7_2 from '../../assets/Project/MakatiLibros/Admin/m7.2.png';
import ma7_3 from '../../assets/Project/MakatiLibros/Admin/m7.3.png';
import ma7_4 from '../../assets/Project/MakatiLibros/Admin/m7.4.png';
import ma7_5 from '../../assets/Project/MakatiLibros/Admin/m7.5.png';
import ma8_0 from '../../assets/Project/MakatiLibros/Admin/m8.0.png';
import ma8_1 from '../../assets/Project/MakatiLibros/Admin/m8.1.png';
import ma8_2 from '../../assets/Project/MakatiLibros/Admin/m8.2.png';
import ma9_0 from '../../assets/Project/MakatiLibros/Admin/m9.0.png';
import ma9_1 from '../../assets/Project/MakatiLibros/Admin/m9.1.png';
import ma9_2 from '../../assets/Project/MakatiLibros/Admin/m9.2.png';
import ma9_3 from '../../assets/Project/MakatiLibros/Admin/m9.3.png';
import ma10_0 from '../../assets/Project/MakatiLibros/Admin/m10.0.png';
import ma10_1 from '../../assets/Project/MakatiLibros/Admin/m10.1.png';
import ma11_0 from '../../assets/Project/MakatiLibros/Admin/m11.0.png';
import ma11_1 from '../../assets/Project/MakatiLibros/Admin/m11.1.png';
import ma12_0 from '../../assets/Project/MakatiLibros/Admin/m12.0.png';
import ma12_1 from '../../assets/Project/MakatiLibros/Admin/m12.1.png';
import ma12_2 from '../../assets/Project/MakatiLibros/Admin/m12.2.png';
import ma12_3 from '../../assets/Project/MakatiLibros/Admin/m12.3.png';
import ma12_4 from '../../assets/Project/MakatiLibros/Admin/m12.4.png';
import ma12_5 from '../../assets/Project/MakatiLibros/Admin/m12.5.png';
import ma12_6 from '../../assets/Project/MakatiLibros/Admin/m12.6.png';
import ma12_7 from '../../assets/Project/MakatiLibros/Admin/m12.7.png';
import ma12_8 from '../../assets/Project/MakatiLibros/Admin/m12.8.png';
import ma12_9 from '../../assets/Project/MakatiLibros/Admin/m12.9.png';
import ma13_0 from '../../assets/Project/MakatiLibros/Admin/m13.0.png';
import ma13_1 from '../../assets/Project/MakatiLibros/Admin/m13.1.png';
import ma13_2 from '../../assets/Project/MakatiLibros/Admin/m13.2.png';
import ma14_0 from '../../assets/Project/MakatiLibros/Admin/m14.0.png';
import ma14_1 from '../../assets/Project/MakatiLibros/Admin/m14.1.png';
import ma14_2 from '../../assets/Project/MakatiLibros/Admin/m14.2.png';
import ma14_3 from '../../assets/Project/MakatiLibros/Admin/m14.3.png';
import ma14_4 from '../../assets/Project/MakatiLibros/Admin/m14.4.png';
import ma14_5 from '../../assets/Project/MakatiLibros/Admin/m14.5.png';
import ma14_6 from '../../assets/Project/MakatiLibros/Admin/m14.6.png';
import ma14_7 from '../../assets/Project/MakatiLibros/Admin/m14.7.png';
import ma14_8 from '../../assets/Project/MakatiLibros/Admin/m14.8.png';
import ma14_9 from '../../assets/Project/MakatiLibros/Admin/m14.9.png';
import ma14_10 from '../../assets/Project/MakatiLibros/Admin/m14.10.png';
import ma15_0 from '../../assets/Project/MakatiLibros/Admin/m15.0.png';
import ma15_1 from '../../assets/Project/MakatiLibros/Admin/m15.1.png';
import ma16_0 from '../../assets/Project/MakatiLibros/Admin/m16.0.png';
import ma16_1 from '../../assets/Project/MakatiLibros/Admin/m16.1.png';
import ma16_2 from '../../assets/Project/MakatiLibros/Admin/m16.2.png';
import ma16_3 from '../../assets/Project/MakatiLibros/Admin/m16.3.png';
import ma17_0 from '../../assets/Project/MakatiLibros/Admin/m17.0.png';
import ma17_1 from '../../assets/Project/MakatiLibros/Admin/m17.1.png';
import ma17_2 from '../../assets/Project/MakatiLibros/Admin/m17.2.png';
import ma17_3 from '../../assets/Project/MakatiLibros/Admin/m17.3.png';






import z1 from '../../assets/Project/ZhiList/z1.png';
import z2 from '../../assets/Project/ZhiList/z2.png';
import z3_0 from '../../assets/Project/ZhiList/z3.0.png';
import z3_1 from '../../assets/Project/ZhiList/z3.1.png';
import z3_2 from '../../assets/Project/ZhiList/z3.2.png';
import z3_3 from '../../assets/Project/ZhiList/z3.3.png';
import z3_4 from '../../assets/Project/ZhiList/z3.4.png';
import z3_5 from '../../assets/Project/ZhiList/z3.5.png';
import z3_6 from '../../assets/Project/ZhiList/z3.6.png';
import z3_7 from '../../assets/Project/ZhiList/z3.7.png';
import z3_8 from '../../assets/Project/ZhiList/z3.8.png';
import z3_9 from '../../assets/Project/ZhiList/z3.9.png';
import z3_10 from '../../assets/Project/ZhiList/z3.10.png';
import z3_11 from '../../assets/Project/ZhiList/z3.11.png';
import z3_12 from '../../assets/Project/ZhiList/z3.12.png';
import z3_13 from '../../assets/Project/ZhiList/z3.13.png';
import z3_14 from '../../assets/Project/ZhiList/z3.14.png';
import z4_0 from '../../assets/Project/ZhiList/z4.0.png';
import z4_1 from '../../assets/Project/ZhiList/z4.1.png';
import z4_2 from '../../assets/Project/ZhiList/z4.2.png';
import z4_3 from '../../assets/Project/ZhiList/z4.3.png';
import z5 from '../../assets/Project/ZhiList/z5.png';
import z6_0 from '../../assets/Project/ZhiList/z6.0.png';
import z6_1 from '../../assets/Project/ZhiList/z6.1.png';
import z6_2 from '../../assets/Project/ZhiList/z6.2.png';
import z6_3 from '../../assets/Project/ZhiList/z6.3.png';
import z6_4 from '../../assets/Project/ZhiList/z6.4.png';
import z6_5 from '../../assets/Project/ZhiList/z6.5.png';
import z6_6 from '../../assets/Project/ZhiList/z6.6.png';
import z6_7 from '../../assets/Project/ZhiList/z6.7.png';
import z6_8 from '../../assets/Project/ZhiList/z6.8.png';
import z7_0 from '../../assets/Project/ZhiList/z7.0.png';
import z7_1 from '../../assets/Project/ZhiList/z7.1.png';
import z7_2 from '../../assets/Project/ZhiList/z7.2.png';





import nw1 from '../../assets/Project/NuevoLink/Website/n1.jpeg';
import nw2 from '../../assets/Project/NuevoLink/Website/n2.jpeg';
import nw3 from '../../assets/Project/NuevoLink/Website/n3.jpeg';
import nw4 from '../../assets/Project/NuevoLink/Website/n4.jpeg';
import nw5 from '../../assets/Project/NuevoLink/Website/n5.jpeg';
import nw6 from '../../assets/Project/NuevoLink/Website/n6.jpeg';
import nw7 from '../../assets/Project/NuevoLink/Website/n7.jpeg';
import nw8_0 from '../../assets/Project/NuevoLink/Website/n8.0.jpeg';
import nw8_1 from '../../assets/Project/NuevoLink/Website/n8.1.jpeg';
import nw8_2 from '../../assets/Project/NuevoLink/Website/n8.2.jpeg';
import nw8_3 from '../../assets/Project/NuevoLink/Website/n8.3.jpeg';
import nw8_4 from '../../assets/Project/NuevoLink/Website/n8.4.jpeg';
import nw9_0 from '../../assets/Project/NuevoLink/Website/n9.0.jpeg';
import nw9_1 from '../../assets/Project/NuevoLink/Website/n9.1.jpeg';
import nw9_2 from '../../assets/Project/NuevoLink/Website/n9.2.jpeg';
import nw10_0 from '../../assets/Project/NuevoLink/Website/n10.0.jpeg';
import nw10_1 from '../../assets/Project/NuevoLink/Website/n10.1.jpeg';
import nw11_0 from '../../assets/Project/NuevoLink/Website/n11.0.jpeg';
import nw11_1 from '../../assets/Project/NuevoLink/Website/n11.1.jpeg';

import na1 from '../../assets/Project/NuevoLink/Admin/n1.jpeg';
import na2_0 from '../../assets/Project/NuevoLink/Admin/n2.0.png';
import na2_1 from '../../assets/Project/NuevoLink/Admin/n2.1.png';
import na2_2 from '../../assets/Project/NuevoLink/Admin/n2.2.png';
import na2_3 from '../../assets/Project/NuevoLink/Admin/n2.3.png';
import na3_0 from '../../assets/Project/NuevoLink/Admin/n3.0.png';
import na3_1 from '../../assets/Project/NuevoLink/Admin/n3.1.png';
import na3_2 from '../../assets/Project/NuevoLink/Admin/n3.2.png';
import na4_0 from '../../assets/Project/NuevoLink/Admin/n4.0.png';
import na4_1 from '../../assets/Project/NuevoLink/Admin/n4.1.png';
import na5_0 from '../../assets/Project/NuevoLink/Admin/n5.0.png';
import na5_1 from '../../assets/Project/NuevoLink/Admin/n5.1.png';
import na6_0 from '../../assets/Project/NuevoLink/Admin/n6.0.png';
import na6_1 from '../../assets/Project/NuevoLink/Admin/n6.1.png';
import na7_0 from '../../assets/Project/NuevoLink/Admin/n7.0.png';
import na7_1 from '../../assets/Project/NuevoLink/Admin/n7.1.png';
import na7_2 from '../../assets/Project/NuevoLink/Admin/n7.2.png';
import na8_0 from '../../assets/Project/NuevoLink/Admin/n8.0.png';
import na8_1 from '../../assets/Project/NuevoLink/Admin/n8.1.png';
import na8_2 from '../../assets/Project/NuevoLink/Admin/n8.2.png';
import na9_0 from '../../assets/Project/NuevoLink/Admin/n9.0.png';
import na9_1 from '../../assets/Project/NuevoLink/Admin/n9.1.png';
import na10 from '../../assets/Project/NuevoLink/Admin/n10.png';
import na11 from '../../assets/Project/NuevoLink/Admin/n11.png';
import na12 from '../../assets/Project/NuevoLink/Admin/n12.png';
import na13_0 from '../../assets/Project/NuevoLink/Admin/n13.0.png';
import na13_1 from '../../assets/Project/NuevoLink/Admin/n13.1.png';
import na14_0 from '../../assets/Project/NuevoLink/Admin/n14.0.png';
import na14_1 from '../../assets/Project/NuevoLink/Admin/n14.1.png';
import na15_0 from '../../assets/Project/NuevoLink/Admin/n15.0.png';
import na15_1 from '../../assets/Project/NuevoLink/Admin/n15.1.png';
import na16 from '../../assets/Project/NuevoLink/Admin/n16.png';


import f1 from '../../assets/Project/FinanZen/f1.jpg';
import f2 from '../../assets/Project/FinanZen/f2.jpg';
import f3 from '../../assets/Project/FinanZen/f3.jpg';
import f4 from '../../assets/Project/FinanZen/f4.jpg';
import f5 from '../../assets/Project/FinanZen/f5.jpg';
import f6 from '../../assets/Project/FinanZen/f6.jpg';
import f7 from '../../assets/Project/FinanZen/f7.jpg';
import f8 from '../../assets/Project/FinanZen/f8.jpg';
import f9_0 from '../../assets/Project/FinanZen/f9.0.jpg';
import f9_1 from '../../assets/Project/FinanZen/f9.1.jpg';
import f10 from '../../assets/Project/FinanZen/f10.jpg';
import f11 from '../../assets/Project/FinanZen/f11.jpg';
import f12 from '../../assets/Project/FinanZen/f12.jpg';
import f13 from '../../assets/Project/FinanZen/f13.jpg';
import f14 from '../../assets/Project/FinanZen/f14.jpg';









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


import a1 from '../../assets/Project/A8/a1.png';
import a2 from '../../assets/Project/A8/a2.png';
import a3 from '../../assets/Project/A8/a3.png';
import a4_0 from '../../assets/Project/A8/a4.0.png';
import a4_1 from '../../assets/Project/A8/a4.1.png';
import a4_2 from '../../assets/Project/A8/a4.2.png';
import a4_3 from '../../assets/Project/A8/a4.3.png';
import a5_0 from '../../assets/Project/A8/a5.0.png';
import a5_1 from '../../assets/Project/A8/a5.1.png';
import a5_2 from '../../assets/Project/A8/a5.2.png';
import a6_0 from '../../assets/Project/A8/a6.0.png';
import a6_1 from '../../assets/Project/A8/a6.1.png';
import a6_2 from '../../assets/Project/A8/a6.2.png';
import a6_3 from '../../assets/Project/A8/a6.3.png';
import a7_0 from '../../assets/Project/A8/a7.0.png';
import a7_1 from '../../assets/Project/A8/a7.1.png';
import a7_2 from '../../assets/Project/A8/a7.2.png';
import a8_0 from '../../assets/Project/A8/a8.0.png';
import a8_1 from '../../assets/Project/A8/a8.1.png';
import a8_2 from '../../assets/Project/A8/a8.2.png';
import a8_3 from '../../assets/Project/A8/a8.3.png';
import a9_0 from '../../assets/Project/A8/a9.0.png';
import a9_1 from '../../assets/Project/A8/a9.1.png';
import a10_0 from '../../assets/Project/A8/a10.0.png';
import a10_1 from '../../assets/Project/A8/a10.1.png';
import a10_2 from '../../assets/Project/A8/a10.2.png';
import a10_3 from '../../assets/Project/A8/a10.3.png';
import a11 from '../../assets/Project/A8/a11.png';
import a12 from '../../assets/Project/A8/a12.png';
import a13 from '../../assets/Project/A8/a13.png';



import ar1 from '../../assets/Project/AliRitzy/ar1.png';
import ar2 from '../../assets/Project/AliRitzy/ar2.png';
import ar3 from '../../assets/Project/AliRitzy/ar3.png';
import ar4 from '../../assets/Project/AliRitzy/ar4.png';
import ar5 from '../../assets/Project/AliRitzy/ar5.png';
import ar6 from '../../assets/Project/AliRitzy/ar6.png';


import ProjectBox from './ProjectBox'
import { a } from 'framer-motion/client'


const ProjectMore = () => {

    return (
        <div className='flex flex-col items-center justify-center gap-20 text-white  h-auto m-12'>

            <span className='text-5xl text-white text-center block hidden-animate-fade'>Projects</span>

            <div className="w-4/5  flex flex-row flex-wrap justify-center gap-10">

                {/* MakatiLibros Project */}
                <ProjectBox
                    src={lms}
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
                        mw1, mw2, mw3, mw4, mw5_0, mw5_1, mw5_2, mw5_3, mw5_4, mw5_5,
                        mw5_6, mw5_7, mw5_8, mw5_9, mw5_10, mw5_11, mw5_12, mw5_13,
                        mw5_14, mw6_0, mw6_1, mw7_0, mw7_1, mw7_2, mw7_3, mw7_4,
                        mw8, mw9, mw10, mw11, mw12, mw13, mw14, mw15, ma1, ma2_0,
                        ma2_1, ma2_2, ma2_3, ma2_4, ma2_5, ma3_0, ma3_1, ma3_2,
                        ma4_0, ma4_1, ma4_2, ma5_0, ma5_1, ma5_2, ma5_3, ma5_4, ma5_5,
                        ma5_6, ma5_7, ma5_8, ma5_9, ma5_10, ma5_11, ma5_12, ma5_13, ma5_14,
                        ma5_15, ma5_16, ma5_17, ma5_18, ma5_19, ma5_20, ma5_21, ma5_22, ma5_23,
                        ma5_24, ma5_25, ma6_0, ma6_1, ma6_2, ma7_0, ma7_1, ma7_2, ma7_3,
                        ma7_4, ma7_5, ma8_0, ma8_1, ma8_2, ma9_0, ma9_1, ma9_2, ma9_3, ma10_0,
                        ma10_1, ma11_0, ma11_1, ma12_0, ma12_1, ma12_2, ma12_3, ma12_4,
                        ma12_5, ma12_6, ma12_7, ma12_8, ma12_9, ma13_0, ma13_1, ma13_2, ma14_0,
                        ma14_1, ma14_2, ma14_3, ma14_4, ma14_5, ma14_6, ma14_7, ma14_8, ma14_9,
                        ma14_10, ma15_0, ma15_1, ma16_0, ma16_1, ma16_2, ma16_3, ma17_0, ma17_1, ma17_2, ma17_3
                    ]}
                    style={{ "--delay": "300ms" }} />


                {/* Zhi Inventory Project */}
                <ProjectBox
                    src={lms}
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
                        z1, z2, z3_0, z3_1, z3_2, z3_3, z3_4, z3_5,
                        z3_6, z3_7, z3_8, z3_9, z3_10, z3_11, z3_12,
                        z3_13, z3_14, z4_0, z4_1, z4_2, z4_3, z5,
                        z6_0, z6_1, z6_2, z6_3, z6_4, z6_5, z6_6,
                        z6_7, z6_8, z7_0, z7_1, z7_2
                    ]}
                    style={{ "--delay": "300ms" }} />


                {/* NuevoLink Project */}
                <ProjectBox
                    src={bms}
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
                        nw1, nw2, nw3, nw4, nw5, nw6, nw7,
                        nw8_0, nw8_1, nw8_2, nw8_3, nw8_4,
                        nw9_0, nw9_1, nw9_2, nw10_0, nw10_1,
                        nw11_0, nw11_1, na1, na2_0, na2_1,
                        na2_2, na2_3, na3_0, na3_1, na3_2,
                        na4_0, na4_1, na5_0, na5_1, na6_0,
                        na6_1, na7_0, na7_1, na7_2, na8_0,
                        na8_1, na8_2, na9_0, na9_1, na10,
                        na11, na12, na13_0, na13_1, na14_0,
                        na14_1, na15_0, na15_1, na16
                    ]}
                    style={{ "--delay": "600ms" }} />


                {/* FinanZen Project */}
                <ProjectBox
                    src={lms}
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
                        f1, f2, f3, f4, f5, f6, f7, f8,
                        f9_0, f9_1, f10, f11, f12, f13, f14
                    ]}
                    style={{ "--delay": "300ms" }} />


                {/* Gym Management System Project */}
                <ProjectBox
                    src={gms}
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
                        g1, g2, g3, g4, g5_0, g5_1, g6_0, g6_1,
                        g7_0, g7_1, g7_2, g7_3, g7_4, g8, g9,
                        g10, g11_0, g11_1, g11_2, g11_3, g11_4,
                        g11_5
                    ]}
                    style={{ "--delay": "900ms" }} />



                {/* A8 Management */}
                <ProjectBox
                    src={lms}
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
                        a1, a2, a3, a4_0, a4_1, a4_2, a4_3,
                        a5_0, a5_1, a5_2, a6_0, a6_1, a6_2,
                        a6_3, a7_0, a7_1, a7_2, a8_0, a8_1,
                        a8_2, a8_3, a9_0, a9_1, a10_0, a10_1,
                        a10_2, a10_3, a11, a12, a13
                    ]}
                    style={{ "--delay": "300ms" }} />



                {/* AliRitzy Website */}
                <ProjectBox
                    src={lms}
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
                        ar1, ar2, ar3, ar4, ar5, ar6
                    ]}
                    style={{ "--delay": "300ms" }} />

            </div>

        </div>
    )
}

export default ProjectMore