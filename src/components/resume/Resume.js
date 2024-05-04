import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementsData, setAchievementsData] = useState(false);
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-block'>
            <div className='w-full flex justify-center items-center text-center'>
                <Title title="7+ YEARS EXPERIENCE" des="My Resume" />
            </div>
            <div>
                <ul className="w-ful grid grid-cols-4">
                    <li className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`} onClick={() => setEducationData(true) & setSkillsData(false) & setExperienceData(false) & setAchievementsData(false)}>Education</li>
                    <li className={`${skillsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`} onClick={() => setEducationData(false) & setSkillsData(true) & setExperienceData(false) & setAchievementsData(false)}>Profesional Skills</li>
                    <li className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`} onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(true) & setAchievementsData(false)}>Experience</li>
                    <li className={`${achievementsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`} onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(false) & setAchievementsData(true)}>Achivements</li>
                </ul>
            </div>
            {educationData && <Education />}
            {skillsData && <Skills />}
            {experienceData && <Experience />}
            {achievementsData && <Achievements />}
        </section>
    )
}

export default Resume
