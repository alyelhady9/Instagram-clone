"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TbHeart } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbHeartFilled } from "react-icons/tb";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"




function Post({post}) {
    
    const [liked , setLiked] = useState(false)
    const toggleLike = () => { 
        setLiked(!liked)
        post.likes += liked ? -1 : 1
    }
  return (
      <div className='text-gray-900 w-full text-sm mt-4' key={post.id}>
        <Dialog>
            <div className='w-full flex justify-between items-center mb-4' >
                <div className='flex items-center'>

                    <div className='w-full mr-3 rounded-full border-gray-300 border-[1px]'>
                        <Image className=' rounded-full' src={post.user.photo} width={30} height={30} alt={post.caption} />
                    </div>
                    <div className='flex'>  
                            <HoverCard>
                                <HoverCardTrigger>

                                  <p className='cursor-pointer mr-1 font-semibold'>{post.user.name}</p>
                                </HoverCardTrigger>
                                <HoverCardContent className="bg-white">
                                   <div className='flex items-center'>
                                        <div className=' mr-3 rounded-full border-gray-300 border-[1px]'>
                                         <Image className=' rounded-full' src={post.user.photo} width={30} height={30} alt={post.caption} />
                                        </div>
                                        <p className='cursor-pointer mr-1 font-semibold'>{post.user.name}</p>
                                   </div>
                                </HoverCardContent>
                            </HoverCard>
                        <p className='mr-1 text-gray-500'>•</p>
                        <p className='mr-1 text-gray-500'>{post.timestamp}</p>
                    </div>
                </div>
                <div>
                <HiOutlineDotsHorizontal className=' cursor-pointer text-2xl' />
                </div>
            </div>
            <div className='w-full rounded-md'>
                {   
                    post.photos.length > 1 ? ( 
                        <Carousel className='relative'>
                        <CarouselContent className="gap-2 max-md:mt-12">
                          {

                            post.photos.map((photo, i) => ( 
                                <CarouselItem key={i}>

                                    <Image key={i} src={photo} className='w-full rounded-sm' alt={post.caption} />
                                </CarouselItem>
                            ))
                          }
                        </CarouselContent>
                        <CarouselPrevious className="bg-white z-30 absolute left-2" />
                        <CarouselNext className="bg-white z-30 absolute right-2"/>
                      </Carousel>
                    ) 
                    : ( 

                        
                        post.photos.map((photo, i)=> (
                            photo ?(
                                <div className='bg-white'  key={i}>
    
                                <Image key={i} src={photo} className='w-full rounded-sm ' alt={post.caption} />
                                </div>
                            )
                            : null
                            
                        ))

                    )




                    
                }

            </div>
    
            <div className='flex justify-between mt-2 mb-2'>
                <div className='flex '>
                    <div className='mr-2' onClick={toggleLike}>
                        {
                            liked === false ? (

                                <TbHeart className='hover:text-gray-500 cursor-pointer text-3xl' />
                            ): (
                                
                                <TbHeartFilled className='text-red-500 cursor-pointer text-3xl' />
                            )
                        }
                        
                    </div>
                    <div  className='mr-2'>

                    <DialogTrigger>
                        
                   
                    <FiMessageCircle className='hover:text-gray-500 cursor-pointer text-3xl' />
                    </DialogTrigger>
                    </div>
                    <div  className='mr-2'>
                    <PiPaperPlaneTiltBold className='hover:text-gray-500 cursor-pointer text-[1.7rem]' />

                    </div>

                </div>
                <div>
                    <FiBookmark className='hover:text-gray-500 cursor-pointer text-3xl' />

                </div>
            </div>
            <div className='font-semibold my-2 '>
                {post.likes} likes
            </div>
            <div className='flex'>
                <span className='mr-2 font-semibold'>
                    {post.user.name} 
                </span>
                <span>{post.caption}</span>
                
            </div>
            <div className='flex text-gray-500 my-2'>
                <span className='mr-2'>
                    <DialogTrigger>
                        
                    View all {post.comments.length} comments
                    </DialogTrigger>
                </span>
            </div>
            
            <div>
                <input type="text" className='placeholder-gray-500 border-0 focus:outline-none pb-4' placeholder='Add a comment...' />
            </div>
            <hr className='border-gray-300'/>
        <DialogContent className="bg-white max-md:mt-12" >
           

                <div className='flex max-md:flex-col  max-md:max-h-[70vh] w-full h-full bg-white relative'>
                        <div className='w-1/2 max-md:w-full max-h-full max-md:max-h-[50%]  relative bg-black flex items-center'>
                            <div className=' flex justify-center px-2'>
                                
                                {
                                    post.photos.length > 1 ? (
                                        

                                        <Carousel className='relative'>
                                        <CarouselContent className="gap-2 max-md:mt-12">
                                          {

                                            post.photos.map((photo, i) => ( 
                                                <CarouselItem key={i}>

                                                    <Image key={i} src={photo} className='w-full rounded-sm' alt={post.caption} />
                                                </CarouselItem>
                                            ))
                                          }
                                        </CarouselContent>
                                        <CarouselPrevious className="bg-white z-30 absolute left-2" />
                                        <CarouselNext className="bg-white z-30 absolute right-2"/>
                                      </Carousel>




                                    ): (

                                        
                                        post.photos.map((photo, i) => (
                                            photo ? (
                                        <div className='bg-white w-full h-full max-md:max-h-[3%] ' key={i}>
                                            <Image key={i} src={photo} className='w-full  rounded-sm' alt={post.caption} />
                                        </div>
                                    ) : null
                                ))
                                
                            )
                            
                            }
                            </div>
                        </div>
                        <div className='w-1/2 max-md:w-full bg-white px-2 h-[620px] max-md:h-fit overflow-y-auto relative'>
                            <header className='flex w-full justify-between py-4 sticky top-0 bg-white'>
                                <div className='flex'>
                                    <div className='mr-3 rounded-full border-gray-300 border-[1px]'>
                                        <Image className='rounded-full' src={post.user.photo} width={30} height={30} alt={post.caption} />
                                    </div>
                                    <p>{post.user.name}</p>
                                </div>
                                <div>
                                    <HiOutlineDotsHorizontal className='cursor-pointer text-2xl' />
                                </div>
                            </header>
                            <hr />
                            <div className='bg-white min-h-[470px]'>
                                <div>{post.caption}</div>
                                {
                                post.comments.length === 0 ? (
                                    <p className='text-center mt-12'>No comments yet</p>
                                ) : 
                            
                                
                                post.comments.map((comment, i) => (
                                    <div className='flex justify-between items-center my-2' key={i}>
                                        <div className='flex justify-between items-start'>

                                            <div className='mr-3 rounded-full border-gray-300 border-[1px]'>
                                                <Image className='rounded-full' src={comment.user.photo} width={30} height={30} alt={comment.user.name} />
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{comment.user.name}</p>
                                                <p>{comment.body}</p>
                                            </div>
                                        </div>
                                        <TbHeart />
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center sticky bottom-0 w-full bg-white py-4 px-2'>
                                <input type="text" className='w-full placeholder-gray-500 border-0 focus:outline-none pb-4' placeholder='Add a comment...' />
                                <div className='text-blue-500 font-semibold text-[0.75rem] hover:text-blue-700 cursor-pointer'>Send</div>
                            </div>
                        </div>
                    </div>
          
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default Post