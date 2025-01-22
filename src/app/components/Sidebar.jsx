"use client"
import React, { useState } from 'react'
import logo from '../../../public/Instagram_logo.svg.png'
import profile from '../../../public/default.jpg'
import createPost from '../../../public/create.jpg'
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
import { FaInstagram } from "react-icons/fa";
import { TbBellCheck } from "react-icons/tb";


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


function Sidebar() {
    const [bolded,setBolded] = useState("")
    const handleBold = () => {
        if (bolded === "") {
            setBolded("font-bold")
        }else {
            
            setBolded("")
        }
    }
  return (
      <div className='w-[20%] max-md:z-40 max-xl:w-[80px] max-xl:px-0 px-8 pt-8 h-screen sticky top-0 max-md:h-[80px] max-md:hidden max-md:bottom-0 bottoms max-md:w-full bg-white border-r-gray-300 border-r'>
        <Dialog>
        <Link href={'/'} className='max-xl:hidden'>
            <Image src={logo} alt="Instagram logo" width = {2500} height = {900} className='w-[60%] mb-9 px-3 max-lg:hidden' />
        </Link>
        <Link href={'/'} className='max-xl:flex hidden justify-center'>
            <FaInstagram className='w-[60%] mb-12  text-2xl ' />
        </Link>
        <div className='flex max-md:flex-row flex-col gap-4 max-lg:px-2 max-xl:w-full '>
            <Link href={"/"}>

                <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-xl: max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                    <GoHomeFill className=' max-xl:w-full text-2xl' />
                    <p className='font-bold max-xl:hidden'>Home</p>
                </div>
            </Link>
            <DialogTrigger>

            <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                <IoSearchOutline className='max-xl:w-full  text-2xl' />
                <p className='max-xl:hidden'>Search</p>
            </div>
            </DialogTrigger>
            <Link href={"/explore"}>
                <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                    <FaRegCompass className='max-xl:w-full  text-2xl' />
                    <p className='max-xl:hidden'>Explore</p>
                </div>
            </Link>
            <Link href={"/reels"}>
                <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                    <PiVideoBold className='max-xl:w-full  text-2xl' />
                    <p className='max-xl:hidden'>Reels</p>
                </div>
            </Link>
            <Link href={"/messages"}>
                <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                    <RiMessengerLine className='max-xl:w-full  text-2xl' />
                    <p className='max-xl:hidden'>Messages</p>
                </div>
            </Link>
            <Popover>
                <PopoverTrigger>
                    <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                        <TbHeart className='max-xl:w-full  text-2xl' />
                        <p className='max-xl:hidden'>Notifications</p>
                    </div>
                </PopoverTrigger>
                
                <PopoverContent className="bg-white p-0  bottom-0 mt-40 min-h-[50vh]">
                    <header className='p-4  border-b-2 w-full  font-bold text-2xl border-gray-100'>Notificatoins</header>
                    <div className='flex h-full mt-20 flex-col gap-2 p-4 items-center'>
                        <TbBellCheck  className='text-[2.2rem]' />
                        <p>You are all caught up!</p>
                    </div>
                </PopoverContent>
            </Popover>





            <Dialog>
                <DialogTrigger>

                    <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                        <FaRegSquarePlus className='max-xl:w-full  text-2xl' />
                        <p className='max-xl:hidden'>Create</p>
                    </div>
                </DialogTrigger>
                <DialogContent className='w-[40%] min-h-[70vh] bg-white rounded-md'>
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
            <Link href={"/alyelhady1"}>

                <div className='flex gap-2 max-xl:w-full max-md:w-fit max-xl:justify-center items-center w-11/12 hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer'>
                    <Image src={profile} alt="Profile" width = {25} height = {25} className='rounded-full ' />
                    <p className='max-xl:hidden'>Profile</p>
                </div>
            </Link>
            <Popover>
            <PopoverTrigger>
            <div onClick={handleBold} className={`${bolded} bottom-6 max-md:w-fit absolute flex gap-2 items-center w-9/12  hover:bg-gray-100 py-2 pl-2 max-lg:pl-0 rounded-md cursor-pointer`}>
              
                <HiMiniBars3 className='max-xl:w-full w-fit text-2xl' />
                <p className='max-xl:hidden'>More</p>
            </div>
              </PopoverTrigger>
            <PopoverContent className='p-4 bg-white '>
                <div className=' flex flex-col gap-2 '> 
                    <div>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <BsGearWide className=' text-2xl' />
                            <p className=''>Settings</p>
                        </div>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <PiPulseBold className=' text-2xl' />
                            <p className=''>Your activity</p>
                        </div>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <FiBookmark className=' text-2xl' />
                            <p className=''>Saved</p>
                        </div>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <FiSun className=' text-2xl' />
                            <p className=''>Switch appearance</p>
                        </div>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <BiMessageAltError className=' text-2xl' />
                            <p className=''>Report a problem</p>
                        </div>
                    </div>
                    <div className='border-t-4 border-t-gray-100'>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            <RiThreadsFill className=' text-2xl' />
                            <p className=''>Threads</p>
                        </div>
                       
                    </div>
                    <div className='border-t-4 border-t-gray-100'>
                        <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            
                            <p className=''>Switch accounts</p>
                        </div>
                        <div className='flex gap-2 border-t-2 border-t-gray-100'></div>
                        <div className=' items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                            
                            <p className=''>Log out</p>
                        </div>
                       
                    </div>
                </div>
            </PopoverContent>
            </Popover>
        </div>
         
        <DialogContent className=' bg-white rounded-md'>
            <DialogHeader >
            <DialogTitle className='rounded-xl'>
            </DialogTitle>
            <DialogDescription className={'p-0 h-0'}>
              
            </DialogDescription>
            </DialogHeader>
                <div className='p-4'>
                    <div>
                        <header><h1 className='text-2xl font-bold'>Search</h1></header>
                        <div className='mt-4'>
                            <input placeholder='Search' className='text-base font-normal w-full p-4 border-0 focus:outline-none focus:ring-0 bg-gray-100 border-gray-300 rounded-md' type="text" name="" id="" />
                        </div>
                        <div className='min-h-56 p-8'>
                            <div className='flex items-center my-4 gap-2'>
                                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full bg-gray-300 " />
                                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl bg-gray-300 " />

                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full bg-gray-300 " />
                                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl bg-gray-300 " />

                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full bg-gray-300 " />
                                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl bg-gray-300 " />

                            </div>

                        </div>
                    </div>
                </div>
        </DialogContent>
        </Dialog>
        
    </div>

  )
}

export default Sidebar






