import React from 'react'
import { BiSolidCamera } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { IoMdGrid } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { LuSquareUserRound } from "react-icons/lu";
import { LuCamera } from "react-icons/lu";


import profile from '../../../public/default.jpg'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
function page() {
  return (
    <div className='max-md:mt-[4.5rem] flex justify-center p-0 w-full'>
      <div className='flex justify-center flex-col w-10/12 p-0 max-xl:w-full max-md:w-full '>
        <div className='flex gap-28 max-md:gap-6 w-8/12 max-lg:w-10/12 p-4 max-md:w-11/12 ml-[10%] max-md:ml-0 mt-12'>
          <div className='relative w-36 z-0 cursor-pointer'>
            <div className='w-36 max-lg:w-28 max-md:w-20 aspect-square rounded-full bg-opacity-40 bg-black z-20  absolute top-0'><BiSolidCamera className='absolute text-white -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] text-[3rem] max-md:text-2xl'/></div>
            <Image className='rounded-full max-w-36 max-md:max-w-20 max-lg:max-w-28 z-10 absolute top-0' width={144} src={profile} alt="profile"  />
          </div>
          <div className='w-8/12 max-xl:w-full flex-col flex'>
            <div className='flex gap-2 w-full max-md:flex-col max-md:items-start items-center'>
              <h1 className='text-xl'>alyelhady1</h1>
              <div className='flex gap-2 items-center'>

                <button className='bg-gray-200 rounded-md p-2 font-semibold text-sm'>Edit profile</button>
                <button className='bg-gray-200 rounded-md p-2 font-semibold text-sm'>View archive</button>
                <BsGearWide className='text-2xl'/>
              </div>
            </div>
            <div className='flex w-full max-md:hidden justify-between mt-6'>
              <div className='flex gap-2'>
                <p className='font-semibold'>0</p>
                <p>posts</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-semibold'>58</p>
                <p>followers</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-semibold'>510</p>
                <p>folowing</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='font-semibold '>Aly Elhady</p>
            </div>
          </div>
        </div>
        <div className='mt-10 ml-8 flex flex-col w-2/12  justify-start'>
          <div className='border-[1px] w-28 h-28 max-lg:w-20 max-md:w-18 max-lg:h-20 max-md:h-18 rounded-full flex justify-center items-center border-gray-100 p-1'>
            <p className='bg-gray-100 p-0 m-0 text-center text-gray-300 w-full h-full rounded-full flex justify-center items-center font-thin text-[6rem] max-lg:text-[4rem] max-md:text-[3rem]'>+</p>
          </div>
          <p className=' font-semibold mt-2 w-full text-center'>New</p>
        </div>
        <hr className='mt-12 max-md:block hidden'/>
        <div className='hidden max-md:flex w-11/12 ml-[5%] justify-between mt-8'>
          <div className='flex max-md:flex-col items-center gap-2 max-md:gap-1'>
            <p className='font-semibold'>0</p>
            <p>posts</p>
          </div>
          <div className='flex max-md:flex-col items-center gap-2 max-md:gap-1'>
            <p className='font-semibold'>58</p>
            <p>followers</p>
          </div>
          <div className='flex max-md:flex-col items-center gap-2 max-md:gap-1'>
            <p className='font-semibold'>510</p>
            <p>folowing</p>
          </div>
        </div>
        <hr className='mt-12'/>
        <div className='w-full flex justify-center '>


          <Tabs defaultValue="account" className="w-[300px] gap-16" >
            <TabsList>
              <TabsTrigger value="posts">
                <IoMdGrid className='mr-2'/>
                POSTS
              </TabsTrigger>
              <TabsTrigger value="saves">
                <FaRegBookmark className='mr-2' />
                SAVES
              </TabsTrigger>
              <TabsTrigger value="tagged">
                <LuSquareUserRound className='mr-2' />
                TAGGED
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <div className='flex flex-col items-center gap-4 text-center w-full mt-12'>
                <div className='text-5xl border-2 border-black rounded-full p-4 max-md:mt-12 w-fit'><LuCamera/></div>
                <div className='font-bold text-3xl '>Share Photos</div>
                <div className=' '>When you share photos, they will appear on your profile.</div>
                <div className='text-blue-500 font-bold text-base hover:text-blue-900 cursor-pointer'>Share your first photo</div>
              </div>


            </TabsContent>
            <TabsContent value="saves">

              <div className='flex flex-col items-center gap-4 text-center w-full mt-12'>
                <div className='text-5xl border-2 border-black rounded-full p-4 max-md:mt-12 w-fit'><FaRegBookmark/></div>
                <div className='font-bold text-3xl '>Save posts</div>
                <div className=' '>Save posts to your profile to find them later.</div>
              </div>

            </TabsContent>
            <TabsContent value="tagged">


              <div className='flex flex-col items-center gap-4 text-center w-full mt-12'>
                <div className='text-5xl border-2 border-black rounded-full p-4 max-md:mt-12 w-fit'><LuSquareUserRound/></div>
                <div className='font-bold text-3xl '>Photos of you</div>
                <div className=' '>When people tag you in photos, they'll appear here.</div>
              </div>

            </TabsContent>
          </Tabs>

        </div>
        <footer className='mt-20 mb-10 text-sm text-center text-gray-400 '>
          <div>
            Meta
            About
            Blog
            Jobs
            Help
            API
            Privacy
            Terms
            Locations
            Instagram Lite
            Threads
            Contact Uploading & Non-Users
            Meta Verified

          </div>
          <div className='mt-4'>
            English
            © 2025 Instagram from Meta
          </div>
        </footer>
      </div>
    </div>
  )
}

export default page