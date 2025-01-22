'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import defaultP from '../assets/Stories/default.jpg'
import p1 from '../assets/Stories/p1.jpg'
import p2 from '../assets/Stories/p2.jpg'
import p3 from '../assets/Stories/p3.jpg'
import p4 from '../assets/Stories/p4.jpg'
import p5 from '../assets/Stories/p5.jpg'
import Link from 'next/link'




function RightSidebar() {



  
    const [stories, setStories] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const usersResponse = await axios.get('https://dummyjson.com/users');
          const users = usersResponse.data.users;
  
          const uniqueIndices = new Set();
          while (uniqueIndices.size < 5) {
            const randomIndex = Math.floor(Math.random() * users.length);
            uniqueIndices.add(randomIndex);
          }
  
          const photosArray = [ p2, p5, defaultP, p4, defaultP];
          const newStories = Array.from(uniqueIndices).map((index, id) => ({
            id: id + 1,
            user: users[index].username,
            userPhoto: photosArray[id] 
          }));
  
          setStories(newStories);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []); 
  
  



  return (
    <div className='w-3/6 max-xl:hidden h-screen sticky top-0'>
      <div className='w-[70%]'>

          <Link href={'/alyelhady1'}>
        <div className='flex items-center justify-between w-full mt-16 text-sm'>
          <div className='flex items-center w-full'>

            <Image className='rounded-full border-[1px] cursor-pointer border-gray-300'  src={defaultP} alt='default' width={50} height={50} />
            <div className='ml-4'>
              <h1 className='font-semibold cursor-pointer '>alyelhady1</h1>
              <p className='text-sm text-gray-500'>Aly Elhady</p>
            </div>
          </div>
          <div className='text-blue-500 font-semibold text-[0.75rem] hover:text-blue-700 cursor-pointer'>Switch</div>
          
        </div>
          </Link>
        <div>
          <header className='flex items-center justify-between w-full mt-6 mb-4 text-sm'>
            <p className='font-semibold text-gray-500 '>Suggested for you</p>
            <p className='text-[0.75rem] font-semibold'>See All</p>
          </header>
          <div>
            {
              stories.map((story,i)=> (
                <div key={i} className='flex items-center justify-between w-full mt-2 text-sm'>
                <div className='flex items-center w-full'>
      
                  <Image className='rounded-full border-[1px] cursor-pointer border-gray-300'  src={story.userPhoto} alt='default' width={50} height={50} />
                  <div className='ml-4'>
                    <h1 className='font-semibold cursor-pointer '>{story.user}</h1>
                    <p className='text-sm text-gray-500'>Suggested for you</p>
                  </div>
                </div>
                <div className='text-blue-500 font-semibold text-[0.75rem] hover:text-blue-700 cursor-pointer'>Follow</div>
                
              </div>
              ))
            }
          </div>
        </div>
        <footer className='text-xs mt-6 text-gray-400'>About
          Help •
          Press •
          API •
          Jobs •
          Privacy •
          Terms •
          Locations •
          Language •
          Meta Verified •
          <div className='mt-4 text-[0.8rem]'>
                {

                   "© 2025 Instagram from Meta".toLocaleUpperCase()
                }
          </div>
      </footer>
      </div>
    </div>
  )
}

export default RightSidebar