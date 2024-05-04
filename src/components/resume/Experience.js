import React from 'react'
import ResumeCard from './ResumeCard'
import { TrainerData, jobData } from '../../data/ResumeData'
import { motion } from "framer-motion"
const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full gap-20">
            <div className=" ">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    {jobData && jobData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className="">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                    <h2 className='text-4xl font-bold'>Trainer Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    {TrainerData && TrainerData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
