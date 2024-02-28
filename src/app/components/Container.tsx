import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook } from 'react-icons/fa'
type Props = {}

const container = (props: Props) => {
  return (
    <div className='lg:pt-28 pt-14 relative top-20 w-9/12 mx-auto'>
        <div className='md:flex items-center justify-center flex-row-reverse'>
            <div className='flex justify-end items-end max-md:pt-2'>
                <div className='relative '>
                    <img className='w-full h-auto transform'width={500} src="man3.png" alt="Hero" />
                    {/* <div className='w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 absolute'></div> */}
                </div>
            </div>
                <div className='p-4 pl-0 mt-5 sm:mt-20'>
                    <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>Hello</p>
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6'>I&apos;m Tayyab
                    <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A FrontEnd Developer</p>
                    </h1>
                    <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>bringing imagination to live website</p>
                    <div className='flex items-center mt-6 md:mt-4'>
                        <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4'>
                            <li><a href="https://github.com/gh-tayyab" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub  size={24}/></a></li>
                            <li><a href="https://www.linkedin.com/in/muhammad-tayyab-6661102a1/" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><GrLinkedin  size={24}/></a></li>
                            <li><a href="https://www.instagram.com/ig.tayyab/" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><GrInstagram  size={24}/></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100081053644114" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><FaFacebook  size={24}/></a></li>
                        </ul>
                        <a href="mailto:muhammadtayyabmt0@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email Me</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default container