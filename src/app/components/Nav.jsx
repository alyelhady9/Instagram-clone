"use client"
import React from 'react'
import logo from '../../../public/Instagram_logo.svg.png'
import profile from '../../../public/default.jpg'
import Image from 'next/image'
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import { RiMessengerLine } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsGearWide } from "react-icons/bs";
import { PiPulseFill } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { BiMessageAltError } from "react-icons/bi";
import { RiThreadsFill } from "react-icons/ri";
import { PiPulseBold } from "react-icons/pi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TbBellCheck } from "react-icons/tb";
import createPost from '../../../public/create.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleAuthModal } from '../features/AuthModalSlice'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
function Nav() {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
    const handleLogin = () => { dispatch(toggleAuthModal()) }
  return (
    <nav className='fixed bottom-0 z-10 items-center justify-between w-full h-16 px-4 hidden max-md:flex bg-white border-t border-gray-200'>
       <Link href={"/"}>
                <GoHomeFill className=' max-xl:w-full text-2xl' />
        </Link>
        <Link href={"/explore"}>
            <FaRegCompass className='max-xl:w-full  text-2xl' />
        </Link>
        <Link href={"/reels"}>
            <PiVideoBold className='max-xl:w-full  text-2xl' />
        </Link>
        <Dialog>
                <DialogTrigger>

                <div className='flex gap-2 items-center w-11/12 max-md:w-fit py-2 pl-2 rounded-md cursor-pointer'>
                        <FaRegSquarePlus className='max-xl:w-full  text-2xl' />
                </div>
                    
                </DialogTrigger>
                <DialogContent className='w-[40%] max-md:w-[80%] min-h-[70vh] max-sm:min-h-[50vh] bg-white rounded-md'>
                    <div className='flex flex-col items-center w-full '>
                        <header className='py-4 border-b-2 w-full text-center font-semibold border-gray-100'>Create new post </header>
                        
                        <div className='w-full h-full mt-24 flex flex-col items-center'>
                            <Image src={createPost} className='w-3/12 mb-4 ' />
                            <p className='text-lg mb-2'>Drag photos and videos here</p>
                             <button className='bg-blue-500 text-sm font-semibold text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600'>Select form computer</button>
                        </div>
                    </div>
                    
                </DialogContent>
          </Dialog>
        <Link href={"/messages"}>
            <RiMessengerLine className='max-xl:w-full  text-2xl' />
        </Link>
        {
            isLoggedIn ? (

                <Link href={"/user"}> 
            <Image src={profile} alt="Profile" width = {25} height = {25} className='rounded-full ' />      
        </Link>
            ): (
                <div onClick={handleLogin} className=' bg-blue-500 hover:bg-blue-700 w-fit rounded-sm py-2 text-white text-center cursor-pointer px-4'>Sign in</div>
            )
        }
    </nav>
  )
}

export default Nav



export
 function Header() { 
    return (
        <header className='p-4 fixed top-0 left-0 w-full hidden max-md:flex bg-white z-10  items-center justify-between  border-b border-gray-200 '>
            <Link href={"/"} className='w-1/4 '>
            <Image src={logo} alt="Instagram logo" width = {300} height = {300} className=' w-full' />
            </Link>

            <div className='flex bg-gray-100 rounded-md p-2 px-4 items-center gap-2 '>
            <IoSearchOutline className='text-gray-400 text-xl'/>
            <input type="search" placeholder='Search' className='bg-gray-100' />
            </div>
            <Popover>
                <PopoverTrigger>
                    <TbHeart className=' text-3xl cursor-pointer'  />
                   
                </PopoverTrigger>
                
                <PopoverContent className="bg-white p-0  bottom-0  min-h-[50vh]">
                    <header className='p-4  border-b-2 w-full  font-bold text-2xl border-gray-100'>Notificatoins</header>
                    <div className='flex h-full mt-20 flex-col gap-2 p-4 items-center'>
                        <TbBellCheck  className='text-[2.2rem]' />
                        <p>You are all caught up!</p>
                    </div>
                </PopoverContent>
            </Popover>
        </header>
    )
    
}