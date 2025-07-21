import React from 'react'
import EducationCard from './EducationCard'
import umakLogo from '../../assets/umak-logo.png'
import amaLogo from '../../assets/ama-logo.png'


const EducationContent = () => {
  return (
    <>
      <EducationCard src={umakLogo} school="University of Makati" course="Bachelor of Science in Computer Science" major=" (Application Development Elective Track)" location="Taguig City, Metro Manila" year="2021-2025" style={{ "--delay": "100ms" }}/>
      <EducationCard src={amaLogo} school="AMA Makati" course="Information and Communication Technology" major="(Programming)" location="Makati City, Metro Manila" year="2019-2021" style={{ "--delay": "300ms" }}/>
    </>
  )
}

export default EducationContent