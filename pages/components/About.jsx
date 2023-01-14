import React from 'react'
import Image from 'next/image'
import pcImage from '../../public/assets/codingpic.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p>
                    I worked the last 5 years as an electrical engineer,
                    always had special interest in automation technologies, process control and user interfaces.
                    Started programming low level assembler and C scripts during my engineering studies.
                </p>
                <p>
                    For the last 3 years I have achieved to automate some daily,
                    time consuming tasks with Python libraries as tkinter,
                    openpyxl, pyautocad and pandas. I got motivated to research more about
                    the most popular programming technologies and how they could improve
                    my team's productivity, this finally got me into web development.
                </p>
                <p>
                    I'm confident that working full-time in the IT industry, I will deliver more value as I
                    continue to grow as a professional.
                </p>
                <p>
                    I'm currently developing frontend apps with React,
                    Next.js, Emotion,
                    Tailwind, and full-stack apps with the MERN stack.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl flex w-full h-auto m-auto' src={pcImage} alt='/' width='256' height='171' quality={100} unoptimized={true} priority='true'/>
            </div>
        </div>
    </div>
  )
}

export default About