import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-u-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD some AWESOME APPs
                </p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Conrado Silveira</span></h1>
                <h1 className='py-4 text-gray-700'>Fullstack Web developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a full stack web developer specializing in MERN stack.
                    Currently focused on building responsive front-end web applications while continue learning backend technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineGithub size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaWhatsapp size={20}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main