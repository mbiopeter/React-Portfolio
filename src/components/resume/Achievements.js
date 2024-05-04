import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion"
import { JobExperienceData, CompanyExperienceData } from '../../data/ResumeData'
const Achievements = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full gap-20">
            <div className="w-1/2">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
                    <h2 className='text-4xl font-bold'>Company Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    {CompanyExperienceData && CompanyExperienceData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className="w-1/2">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    {JobExperienceData && JobExperienceData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Achievements
