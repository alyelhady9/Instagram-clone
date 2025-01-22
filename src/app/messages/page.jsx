"use client"
import React, { useState } from 'react'
import { TbEdit } from "react-icons/tb";
import defaultP from '../assets/Stories/default.jpg'
import Image from 'next/image';
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa6";
import logo from '../../../public/Instagram_logo.svg.png'
import { Checkbox } from "@/components/ui/checkbox"
import { BiPhone } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { SlInfo } from "react-icons/sl";
import { BsEmojiSmile } from "react-icons/bs";
import { TbMicrophone } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { PiSticker } from "react-icons/pi";
import { TbHeart } from "react-icons/tb";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



function page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [message,setMessage] = useState("")
  const [sent , setSent] = useState([])
  const openChat = () => {
    setOpen(!open)
    setSelected(open ? "" : "bg-gray-200")

  }

  const sendMessage = (m,e) => {
      setSent([...sent,m])
      console.log(sent)
      setMessage("")
      e.preventDefault()
  }
  
  return (
    <div className='w-full flex min-h-screen max-md:mt-[4.5rem] z-0  '>
      <Dialog>
      <div className='w-1/3 max-md:w-fit border-r-gray-300 border-r'>
        <header className='flex px-6 max-md:justify-center justify-between mt-8 mb-4 '>

            <DialogTrigger>
            <div className='flex gap-2 items-center max-md:hidden '>
              <p className=' cursor-pointer text-xl font-bold'>alyelhady1</p>
              <FaChevronDown  className='text-sm'/>
            </div>
           </DialogTrigger>
          

          <TbEdit className='text-3xl cursor-pointer' />
        </header>
        <div className='px-6 max-md:hidden'>
          <Image src={defaultP} className={`rounded-full  border-[1px] cursor-pointer border-gray-300 `} alt='default' width={80} height={300} />
        </div>

        <div className='mt-4 '>
          <div className='px-4 max-md:hidden  flex justify-between'>
            <p className='font-bold'>Messages</p>
            <p className='text-blue-500 cursor-pointer'>Request</p>
          </div>
          <div className='mt-4'>
            <div className={`${selected} flex items-center gap-4 w-full px-6 py-2 max-md:justify-center max-md:px-2 cursor-pointer hover:bg-gray-100`} onClick={openChat}>
 
                <Image src={defaultP} className='rounded-full  border-[1px]  border-gray-300' alt='default' width={60} height={60} />
                <div className='max-md:hidden'>
                  <p>Hossam Yasser</p>
                  <p className='text-gray-500 text-xs'>Active 1h ago</p>
                </div>
                
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/3 h-full max-md:w-full  flex flex-col relative justify-center items-center'>

        {
          open === false ? 

          <>
            
            <div className='text-6xl border-2 border-black rounded-full p-4 max-md:mt-12'><LiaFacebookMessenger/></div>
            <div className='mt-4 text-lg'>Your messages</div>
            <p className='text-gray-500'>Send a message to start a chat.</p>
            <button className='bg-blue-500 text-sm font-semibold text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600'>Send message</button>
          </>
          : 
            <div className='relative w-full h-full  flex flex-col'>
                <header className='flex justify-between sticky top-0 p-4 border-b-[1px] border-b-gray-300 '>   
                  <div className='flex items-center gap-4'>
                      <Image src={defaultP} className='rounded-full  border-[1px] border-gray-300' alt='default' width={40} height={40} />
                      <div className=''>
                        <p>Hossam Yasser</p>
                        <p className='text-gray-500 text-xs'>Active 1h ago</p>
                      </div>
                    </div>         
                    <div className='flex gap-4 text-3xl items-center'>
                      <BiPhone className='cursor-pointer'/>
                      <HiOutlineVideoCamera className='cursor-pointer'/>
                      <SlInfo className='text-2xl cursor-pointer'/>
                    </div>
                </header>
                <div className='px-4 flex-grow overflow-y-auto max-md:min-h-[80vh]'>
                  <div className='font-semibold text-base text-center mb-2 p-4'>Today 10:30 AM</div>
                    <div className='my-2 flex items-end gap-2 w-full'>
                      <div>
                        <Image src={defaultP} className='rounded-full  border-[1px] aspect-square border-gray-300' alt='default' width={25} height={25} />

                      </div>
                      <p className='bg-gray-200 text-base px-4 py-2 rounded-full w-fit'>
                        Hello
                      </p>
                    </div>

                    {
                      sent.map((m,i)=> (
                        <div key={i} className='w-full flex justify-end mb-2'>
                          <p className='bg-blue-500 text-white text-base px-4 py-2 rounded-full w-fit'>{m}</p>
                        </div>
                      ))
                    }
                </div>
                <div className='flex justify-start items-center w-full px-4 py-2  sticky bottom-0 max-md:bottom-16'>
                  <div className='w-full flex justify-between gap-4 border-gray-300 border-[1px] rounded-full p-4 '>

                    <BsEmojiSmile className='text-3xl min-w-[5%] cursor-pointer'/>
                    <form onSubmit={(e) =>sendMessage(message,e)} className='w-full'>

                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Message...' className=' placeholder-gray-400 p-0 w-full focus:outline-none'   />
                    </form>
                      {
                        message === '' ?
                        <div className='flex gap-3 max-md:gap-2  text-3xl max-md:text-2xl items-center'>

                          <TbMicrophone className=' cursor-pointer'/>
                          <CiImageOn className='cursor-pointer'/>
                          <PiSticker className=' cursor-pointer'/>
                          <TbHeart className=' cursor-pointer'/>
                        </div> : 
                        
                        <div onClick={() => sendMessage(message)} className='text-blue-500 cursor-pointer hover:text-blue-600'>
                          Send
                        </div>


                      }
                  </div>
                  
                </div>
            </div>
          

        }

      </div>
  <DialogContent className="bg-white flex justify-center w-[30%] max-lg:w-[50%] max-md:w-[60%] max-sm:w-[90%]">
    <DialogHeader>
      <DialogTitle className="">
      </DialogTitle>
      <DialogDescription className="bg-white m-0">
       
      </DialogDescription>
    </DialogHeader>
        <div className='w-8/12 '>

            <div className='w-full flex justify-center py-8'>
              <Image src={logo} width={400} className='w-7/12 m-0'/>

            </div>
            <div>
              <input type="text" className='bg-gray-100 font-normal w-full mb-3 focus:outline-none focus:border-gray-400 placeholder-gray-500 border-2 border-gray-300 rounded-[4px] p-4' placeholder='Phone number, username, or email' />
              <input type="password" className='bg-gray-100 font-normal w-full mb-3 focus:outline-none focus:border-gray-400 placeholder-gray-500 border-2 border-gray-300 rounded-[4px] p-4' placeholder='Password' />
              <div className='flex gap-2 items-center'>
              <Checkbox />
                <p className='font-normal'>Save login info</p>
              </div>
            </div>
            <div className='pb-8'>
              <button className='bg-blue-500 text-sm font-semibold text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 w-full'>Log in</button>
              <p className='mt-4 cursor-pointer text-center'>Forgot password?</p>
            </div>  
            <div>

            </div>
            </div>
  </DialogContent>
</Dialog>
    </div>
    
    
  )
}

export default page