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
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
// Native Modal Component
import { login, logout } from '../features/AuthSlice'
import { toggleAuthModal } from '../features/AuthModalSlice'

const CreateModal = ({toggleCreateModal, createModalOpen}) => {
  return ( 

  createModalOpen ? (

    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div 
    className="fixed inset-0 bg-black bg-opacity-50" 
    onClick={toggleCreateModal}
    />
    <div className={`relative w-8/12 max-md:w-11/12 bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto `}>
    <button
    onClick={toggleCreateModal}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold z-10"
    >
    ×
    </button>
    <div className='flex flex-col items-center w-full'>
    <header className='py-4 border-b-2 w-full text-center font-semibold border-gray-100'>
    Create new post
    </header>
    <div className='w-full h-full mt-24 flex flex-col items-center pb-8'>
    <Image src={createPost} className='w-3/12 mb-4' alt="Create post" />
    <p className='text-lg mb-2'>Drag photos and videos here</p>
    <button className='bg-blue-500 text-sm font-semibold text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600'>
    Select from device
    </button>
    </div>
    </div>
    </div>
    </div>
  ) : (
    null
  )
  

    )

}

const SearchModal = ({toggleSearchModal, searchModalOpen}) => {
  return (
    searchModalOpen ? ( 

      <div className="fixed  inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={toggleSearchModal}
        />
      <div className={`relative w-8/12 max-md:w-11/12 bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto `}>
        <button
         onClick={toggleSearchModal}
         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold z-10"
         >
          ×
        </button>
        <div className='p-4 '>
          <div>
            <header><h1 className='text-2xl font-bold'>Search</h1></header>
            <div className='mt-4'>
              <input 
                placeholder='Search' 
                className='text-base font-normal w-full p-4 border-0 focus:outline-none focus:ring-0 bg-gray-100 border-gray-300 rounded-md' 
                type="text" 
                />
            </div>
            <div className='min-h-56 p-8'>
              <div className='flex items-center my-4 gap-2'>
                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full" />
                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl" />
              </div>
              <div className='flex items-center my-4 gap-2'>
                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full" />
                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl" />
              </div>
              <div className='flex items-center my-4 gap-2'>
                <Skeleton className="h-[40px] w-[40px] m-0 rounded-full" />
                <Skeleton className="h-[10px] w-[15%] m-0 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
) : (null)
) }

// Native Popover Component
const Popover = ({ trigger, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0" 
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg ${className}`}>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

// Native Skeleton Component
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-300 ${className}`} />
);

function Sidebar( ) {
  const [bolded, setBolded] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  






const dispatch = useDispatch()
const isLoggedIn = useSelector(state => state.auth.isAuthenticated)

const handleToggleLogin = () => {
  dispatch(toggleAuthModal())
 }

const handleLogout = () => {
  dispatch(logout())
}
















  const handleCreateModal = () => {

    setCreateModalOpen(!createModalOpen)
    handleZIndex()
  }
  const handleSearchModal = () => { 
    setSearchModalOpen(!searchModalOpen)
    handleZIndex()
  }
  const handleBold = () => {
    setBolded(bolded === "" ? "font-bold" : "");
  };
  const [zIndex , setZIndex] = useState(0);
  const handleZIndex = () => {zIndex === 0 ? setZIndex(50): setZIndex(0) }
  const toggleSearchModal = () => { setSearchModalOpen(!searchModalOpen) 
    handleZIndex()
  }

  const toggleCreateModal = () => { 
    handleZIndex()
    setCreateModalOpen(!createModalOpen) 
  }
  return (
    <div className={`z-${zIndex} w-[30%]  max-xl:min-w-[80px] max-xl:px-0 px-4 pt-8 h-screen sticky top-0 max-md:h-[80px] max-md:hidden max-md:bottom-0 bottoms max-md:w-full bg-white border-r-gray-300 border-r`}>
      
      <Link href={'/'} className='max-xl:hidden'>
        <Image src={logo} alt="Instagram logo" width={2500} height={900} className='w-[60%] mb-9 px-3 max-lg:hidden' />
      </Link>
      <Link href={'/'} className='max-xl:flex hidden justify-center'>
        <FaInstagram className='w-full mb-4 text-2xl' />
      </Link>
      
      <div className='flex flex-col gap-4 px-2 max-xl:w-full'>
        <Link href={"/"}>
          <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-xl: max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
            <GoHomeFill className=' max-xl:w-full text-2xl' />
            <p className='font-bold max-xl:hidden'>Home </p>
          </div>
        </Link>

        <div 
          className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'
          onClick={handleSearchModal}
        >
          <IoSearchOutline className='max-xl:w-full text-2xl' />
          <p className='max-xl:hidden'>Search</p>
        </div>

        <Link href={"/explore"}>
          <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
            <FaRegCompass className='max-xl:w-full text-2xl' />
            <p className='max-xl:hidden'>Explore</p>
          </div>
        </Link>

        <Link href={"/reels"}>
          <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
            <PiVideoBold className='max-xl:w-full text-2xl' />
            <p className='max-xl:hidden'>Reels</p>
          </div>
        </Link>

        <Link href={"/messages"}>
          <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
            <RiMessengerLine className='max-xl:w-full text-2xl' />
            <p className='max-xl:hidden'>Messages</p>
          </div>
        </Link>

        <Popover 
          trigger={
            <div className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
              <TbHeart className='max-xl:w-full text-2xl' />
              <p className='max-xl:hidden'>Notifications</p>
            </div>
          }
          className="p-0 bottom-0 mt-40 min-h-[50vh] w-80"
        >
          <header className='p-4 border-b-2 w-full font-bold text-2xl border-gray-100'>
            Notifications
          </header>
          <div className='flex h-full mt-20 flex-col gap-2 p-4 items-center'>
            <TbBellCheck className='text-[2.2rem]' />
            <p>You are all caught up!</p>
          </div>
        </Popover>

        <div 
          className='flex gap-2 items-center w-11/12 max-lg:w-full max-md:w-fit hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'
          onClick={handleCreateModal}
        >
          <FaRegSquarePlus className='max-xl:w-full text-2xl' />
          <p className='max-xl:hidden'>Create</p>
        </div>
          {
            isLoggedIn ? ( 

              <Link href={"/user"}>
            <div className='flex gap-2 max-xl:w-full max-md:w-fit max-xl:justify-center items-center w-11/12 hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer'>
                <Image src={profile} alt="Profile" width={25} height={25} className='rounded-full' />
                <p className='max-xl:hidden'>Profile</p>
            </div>
           </Link>
            ) : (
              <div onClick={handleToggleLogin} className='mt-4 bg-blue-500 hover:bg-blue-700 w-fit rounded-sm py-2 text-white text-center cursor-pointer px-4'>Sign in</div>
            )
        }

        <Popover 
          trigger={
            <div 
              onClick={handleBold} 
              className={`${bolded} bottom-6 max-md:w-fit  flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer`}
            >
              <HiMiniBars3 className='max-xl:w-full w-fit text-2xl' />
              <p className='max-xl:hidden'>More</p>
            </div>
          }
          className="p-4 w-64"
        >
          <div className='flex flex-col gap-2'>
            <div>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <BsGearWide className='text-2xl' />
                <p>Settings</p>
              </div>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <PiPulseBold className='text-2xl' />
                <p>Your activity</p>
              </div>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <FiBookmark className='text-2xl' />
                <p>Saved</p>
              </div>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <FiSun className='text-2xl' />
                <p>Switch appearance</p>
              </div>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <BiMessageAltError className='text-2xl' />
                <p>Report a problem</p>
              </div>
            </div>
            <div className='border-t-4 border-t-gray-100'>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <RiThreadsFill className='text-2xl' />
                <p>Threads</p>
              </div>
            </div>
            <div className='border-t-4 border-t-gray-100'>
              <div className='flex gap-2 items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <p>Switch accounts</p>
              </div>
              <div className='flex gap-2 border-t-2 border-t-gray-100'></div>
              <div onClick={handleLogout} className='items-center w-11/12 hover:bg-gray-100 py-2 pl-2 rounded-md cursor-pointer'>
                <p>Log out</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>

      {/* Search Modal */}
     <SearchModal toggleSearchModal={toggleSearchModal} searchModalOpen= {searchModalOpen}  isOpen={searchModalOpen} />

        <CreateModal toggleCreateModal={toggleCreateModal} createModalOpen= {createModalOpen} isOpen={createModalOpen} />
        
      
    </div>
  )
}

export default Sidebar


