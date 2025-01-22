import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

  import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Image from 'next/image'
import { TbHeart } from "react-icons/tb";

function ExplorePost({post}) {
  return (
    <div className='min-h-full'>  
        <Dialog className='min-h-full'>
            <DialogTrigger className='min-h-full'>
                <Image className='min-h-full  object-fill'  src={post.photos[0]} alt={post.id} width={300} height={300} />
            </DialogTrigger>
            <DialogContent className='bg-white max-md:mt-12'>
              
                    <div className='flex w-full  max-md:flex-col  max-md:max-h-[70vh] relative' >
                        <div className=' bg-black max-md:w-full max-h-full relative max-md:max-h-[50%] flex items-center  w-1/2'>
                           <Image className='w-full object-cover' src={post.photos[0]} alt={post.id} width={300} height={300} />
                        </div>
                        <div className='max-md:w-full  bg-white px-2 h-[620px] max-md:h-fit relative w-1/2 overflow-y-auto'>
                            <header className='flex w-full justify-between py-4 sticky top-0 bg-white'>
                                <div className='flex'>
                                    <div className='mr-3 rounded-full border-gray-300 border-[1px]'>
                                        <Image className='rounded-full' src={post.user.photo} width={30} height={30} alt={post.caption} />
                                    </div>
                                    <p className='font-semibold'>{post.user.name}</p>
                                </div>
                                <div className='z-10'>
                                    <HiOutlineDotsHorizontal className='cursor-pointer text-2xl' />
                                </div>
                            </header>
                            
                            <div className='min-h-[470px] bg-white '>
                                <p className=''>{post.caption}</p>
                                {
                                    post.comments.map((comment,i) => (
                                        <div className='flex justify-between items-center my-2' key={i}>
                                        <div className='flex justify-between items-start'>

                                            <div className='mr-3 rounded-full border-gray-300 border-[1px]'>
                                                <Image className='rounded-full  ' src={comment.user.photo} width={30} height={30} alt={comment.user.name} />
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{comment.user.name}</p>
                                                <p>{comment.body}</p>
                                            </div>
                                        </div>
                                        <TbHeart />
                                    </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center sticky bottom-0 w-full bg-white py-4 px-2'>
                                <input type="text" className='w-full placeholder-gray-500 border-0 focus:outline-none pb-4' placeholder='Add a comment...' />
                                <div className='text-blue-500 font-semibold text-[0.75rem] hover:text-blue-700 cursor-pointer'>Send</div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
            </DialogContent>
        </Dialog>
        
       
        
        
        
    </div>
  )
}


export default ExplorePost