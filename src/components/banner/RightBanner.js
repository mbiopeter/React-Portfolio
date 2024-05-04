import React from 'react'
import { bannerImg } from '../../assets';

const RightBanner = () => {
    return (
        <div className='w-1/2 flex justify-center items-center relative'>
            <img className='h-[680px] w-[500px] z-10' src={bannerImg} alt="bannerImg" />
            <div className="absolute bottom-0 w-[450px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    )
}

export default RightBanner
