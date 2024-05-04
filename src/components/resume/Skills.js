import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion"
import { designSkills, developmentSkills } from '../../data/ResumeData'
const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="flex w-full gap-20">
            <div className="w-1/2">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
                    <h2 className='text-4xl font-bold'>Design Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    {designSkills && designSkills.map((item) => (
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>{item.name}</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    style={{ width: `${item.percentage}%` }} className={` h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}>
                                    <span className='absolute -top-8 right-0'>{item.percentage}%</span>
                                </motion.span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/2">
                <div className='py-12 font-titleFont'>
                    <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
                    <h2 className='text-4xl font-bold'>Development Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    {developmentSkills && developmentSkills.map((item) => (
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>{item.name}</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-4'>
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    style={{ width: `${item.percentage}%` }} className={` h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}>
                                    <span className='absolute -top-8 right-0'>{item.percentage}%</span>
                                </motion.span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
