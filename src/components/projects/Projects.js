import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../data/ProjectsData'

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-block'>
            <div className='w-full flex justify-center items-center text-center'>
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                {projectsData.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                ))}
            </div>
        </section >
    )
}

export default Projects
