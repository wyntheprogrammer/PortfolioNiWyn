import React from 'react'
import SkillsIcon from './SkillsIcon';


// Web Development
import html from '../../assets/html-5.png';
import css from '..//../assets/css.png';
import js from '../../assets/javascript.png';
import php from '../../assets/php.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.jpg';
import laravel from '../../assets/laravel.jpg';
import codeigniter from '../../assets/codeigniter.jpg';

// Programming Languages
import java from '../../assets/java.jpg';
import python from '../../assets/python.jpg';
import csharp from '../../assets/csharp.jpg';

// Databases
import mysql from '../../assets/mysql.jpg';
import sqlite from '../../assets/sqlite.png';

// IDEs / Development Environments
import netbeans from '../../assets/netbeans.jpg';
import eclipse from '../../assets/eclipse.jpg';
import vscommunity from '../../assets/vscommunity.jpg';
import vscode from '../../assets/vscode.jpg';
import androidstud from '../../assets/androidstud.jpg';

// Tools
import github from '../../assets/github.jpg';
import cisco from '../../assets/cisco.jpg';

// Operating Systems
import windows from '../../assets/windows.jpg';
import linux from '../../assets/linux.jpg';
import macos from '../../assets/macos.jpg';

// UI/UX Design
import figma from '../../assets/figma.jpg';
import canva from '../../assets/canva.jpg';

// Office Tools
import msoffice from '../../assets/msoffice.jpg';
import gworkspace from '../../assets/gworkspace.png';


const SkillsContent = () => {
    return (
        <div className="flex flex-wrap gap-10 justify-center sm:justify-start">

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA' >Web Development</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={html} alt="html" label="HTML" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={css} alt="css" label="CSS" style={{ "--delay": "200ms" }} />
                    <SkillsIcon src={js} alt="javascript" label="JavaScript" style={{ "--delay": "300ms" }} />
                    <SkillsIcon src={php} alt="php" label="PHP" style={{ "--delay": "400ms" }}/>
                    <SkillsIcon src={tailwind} alt="tailwind" label="Tailwind CSS" style={{ "--delay": "500ms" }} />
                    <SkillsIcon src={bootstrap} alt="bootstrap" label="Bootstrap" style={{ "--delay": "600ms" }} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>PHP Frameworks</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={laravel} alt="laravel" label="Laravel" style={{ "--delay": "100ms" }}/>
                    <SkillsIcon src={codeigniter} alt="codeigniter" label="Codeigniter" style={{ "--delay": "200ms" }}/>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Progamming Language</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={java} alt="java" label="Java" style={{ "--delay": "100ms" }}/>
                    <SkillsIcon src={python} alt="python" label="Python" style={{ "--delay": "200ms" }}/>
                    <SkillsIcon src={csharp} alt="csharp" label="C#" style={{ "--delay": "300ms" }}/>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Database Mangement</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={mysql} alt="mysql" label="MySql" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={sqlite} alt="sqlite" label="SQLite" style={{ "--delay": "200ms" }} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Development Environment</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={netbeans} alt="netbeans" label="Netbeans" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={eclipse} alt="eclipse" label="Eclipse" style={{ "--delay": "200ms" }}/>
                    <SkillsIcon src={vscommunity} alt="vscommunity" label="Visual Studio Community" style={{ "--delay": "300ms" }} />
                    <SkillsIcon src={vscode} alt="vscode" label="Vs Code" style={{ "--delay": "400ms" }} />
                    <SkillsIcon src={androidstud} alt="androidstud" label="Android Studio" style={{ "--delay": "500ms" }} />
                </div>
            </div>


            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Version Control</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={github} alt="github" label="GitHub" style={{ "--delay": "100ms" }}/>
                </div>
            </div>


            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Networking Tools</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={cisco} alt="cisco" label="Cisco Packet Tracer" style={{ "--delay": "100ms" }} />
                </div>
            </div>


            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Operation System</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={windows} alt="windows" label="Windows" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={linux} alt="linux" label="Linux" style={{ "--delay": "200ms" }} />
                    <SkillsIcon src={macos} alt="macos" label="MacOS" style={{ "--delay": "300ms" }} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>UI/UX Design Tools</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={canva} alt="canva" label="Canva" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={figma} alt="figma" label="Figma" style={{ "--delay": "200ms" }} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='text-#63C5DA'>Office Productivity</span>
                <div className="flex flex-row gap-2">
                    <SkillsIcon src={msoffice} alt="msoffice" label="Microsoft Office Suite" style={{ "--delay": "100ms" }} />
                    <SkillsIcon src={gworkspace} alt="gworkspace" label="Google Workspace" style={{ "--delay": "200ms" }} />
                </div>
            </div>


        </div>
    )
}

export default SkillsContent