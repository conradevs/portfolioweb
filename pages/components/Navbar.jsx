import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

const Navbar = () => {

    const [shadow,setShadow] = useState(false);
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >=90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    },[])
  return (
    <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>    
                <Image src='/../public/assets/conradevs.png' alt='/' width='100' height='100'  priority='true'/>
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/#home'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={40}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={
                            nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dcf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div className='flex w-full items-center justify-between'>
                    <Image src='/../public/assets/conradevs.png' alt='/' width='87' height='87'  priority='true'/>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose size={30}/>
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build something together</p>
                </div>
                <div className='py-4 flex-col'>
                    <ul className='uppercase'>
                        <Link href='/#home'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                    </div>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaWhatsapp/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Navbar