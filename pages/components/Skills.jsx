import React from 'react'
import Image from 'next/image'
import htmlLogo from '../../public/assets/skills/HTML_Logo.png'
import cssLogo from '../../public/assets/skills/CSS_logo.png'
import tailwindLogo from '../../public/assets/skills/tailwind_logo.png'
import emotionLogo from '../../public/assets/skills/emotion_logo.png'
import jsLogo from '../../public/assets/skills/js_logo.png'
import gitLogo from '../../public/assets/skills/git_logo.png'
import nodeLogo from '../../public/assets/skills/node_logo.png'
import reactLogo from '../../public/assets/skills/react_logo.png'
import reduxLogo from '../../public/assets/skills/redux_logo.svg'
import nextLogo from '../../public/assets/skills/next_logo.png'
import pythonLogo from '../../public/assets/skills/python_logo.png'
import firebaseLogo from '../../public/assets/skills/firebase_logo.png'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
            <p className='text-xl tracking-width uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>Technologies</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={htmlLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cssLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={jsLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pythonLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwindLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={emotionLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Emotion</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reactLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div> 
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reduxLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Redux</h3>
                        </div>
                    </div>
                </div> 
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={firebaseLogo} alt='/' width='64' height='64' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={gitLogo} alt='/' width='80' height='80' quality={100} unoptimized={true} priority='true'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills