import React from 'react'
import { Link } from 'react-scroll';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants/index';
const Navbar = () => {
    return (
        <div className='w-full sticky top-0 h-24 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 '>
            <div className='flex flex-row gap-5 items-center'>
                <img className='h-[60px] w-[60px] rounded-[50%]' src={logo} alt="logo" />
                <span className='text-2xl bold'>Peter</span>
            </div>
            <div>
                <ul className='flex item-center gap-10'>
                    {
                        navLinksdata.map(({ _id, title, link }) => (
                            <li key={_id} className="text-base fonr-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                                <Link activeClass='active' to={link} spy={true} smooth={true} offset={-70} duration={500}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
