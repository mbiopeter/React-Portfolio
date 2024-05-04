import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({ item }) => {
    return (
        <div className="w-full px-12 py-10 rounded-lg shadow-shadowOne flex  flex-col  bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-1000 trasition-colors duration-1000">
            <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={item.img} alt={item.img} />
            </div>
            <div className='w-full mt-5 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-base uppercase text-designColor font-normal'>{item.title}</h3>
                    <div className='flex flex-row gap-2'>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                            <BsGithub />
                        </span>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                            <FaGlobe />
                        </span>
                    </div>
                </div>
                <div>
                    <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{item.des}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
