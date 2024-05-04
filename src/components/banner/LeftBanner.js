import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.", "Mobile Developer.", "Web Developer.", "Data Analyst.", "Blockchain Engineer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5 pt-20'>
                <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm <span className="text-designColor capitalize">Mbio Peter</span></h1>
                <h2 className='text-4xl font-bold text-white'>A <span>{text}</span> <Cursor cursorBlinking={true} cursorStyle="|" cursorColor='#ff014f' /></h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>FIND ME IN</h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaFacebookF />
                            </span>
                            <span className="bannerIcon">
                                <FaTwitter />
                            </span>
                            <span className="bannerIcon">
                                <FaLinkedinIn />
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            BEST SKILL ON
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            <span className="bannerIcon">
                                <SiNextdotjs />
                            </span>
                            <span className="bannerIcon">
                                <SiTailwindcss />
                            </span>
                            <span className="bannerIcon">
                                <SiFigma />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner
