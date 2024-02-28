'use client'
import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { global } from 'styled-jsx/css'
import Link from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500'>
        <div className='sm:text-3xl text-xl font-bold inline-block'><a href="/" className='inline-block'>Portfolio</a></div>
        <div className='sm:hidden' onClick={()=> setShowNav(!showNav)}><GiHamburgerMenu size={24}/></div>
        <nav className={`max-sm:absolute max-sm:w-full left-[-30px] transition ease-in duration-300 ${showNav ? "top-16 visible": "max-sm:invisible top-0"}`}>
             <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-8": "max-sm:translate-x-32"}`}>
                    <a href="./Service" className='px-2'>Services</a>
                </li>
                <li className={`py-1 cursor-pointer hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-8": "max-sm:translate-x-32"}`}>
                    <a href="./Projects" className='px-4'>Projects</a>
                </li>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-8": "max-sm:translate-x-32"}`}>
                    <a href="/Tools" className='px-2'>Tools</a>
                </li>
                </ul>   
        </nav>
    </div>
  )
}

export default Navbar