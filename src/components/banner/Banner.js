import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
    return (
        <section id="home" className="w-full  pb-20 flex item-center font-titleFont border-b-[1px] border-b-black">
            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Banner
