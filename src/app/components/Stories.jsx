'use client';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import defaultP from '../assets/Stories/default.jpg';
import p1 from '../assets/Stories/p1.jpg';
import p2 from '../assets/Stories/p2.jpg';
import p3 from '../assets/Stories/p3.jpg';
import p4 from '../assets/Stories/p4.jpg';
import p5 from '../assets/Stories/p5.jpg';
import story1 from '../assets/Stories/content/1.jpg';
import story2 from '../assets/Stories/content/2.jpg';
import story3 from '../assets/Stories/content/3.jpg';
import story4 from '../assets/Stories/content/4.jpg';
import story5 from '../assets/Stories/content/5.jpg';
import story6 from '../assets/Stories/content/6.jpg';
import story7 from '../assets/Stories/content/7.jpg';
import story8 from '../assets/Stories/content/8.jpg';
import story9 from '../assets/Stories/content/9.jpg';
import story10 from '../assets/Stories/content/10.jpg';
import { IoMdClose } from "react-icons/io";
import { FaAngleRight, FaAngleLeft, FaPause, FaPlay } from "react-icons/fa6";
import whiteLogo from '../../../public/whiteLogo.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';
import Link from 'next/link';

function Stories() {
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressBarRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get('https://dummyjson.com/users');
        const users = usersResponse.data.users;


        const uniqueIndices = new Set();
        while (uniqueIndices.size < 10) {
          const randomIndex = Math.floor(Math.random() * users.length);
          uniqueIndices.add(randomIndex);
        }

        const photosArray = [p1, defaultP, p2, p3, p4, p5, defaultP, defaultP, defaultP, defaultP];
        const storyContents = [story1, story2, story3, story4, story5, story6, story7, story8, story9, story10];
        const time = ["1h","38m","3h", "1h", "38m", "7h", "23h", "7m", "3h", "8h"]
        console.log(storyContents);
        
        const newStories = Array.from(uniqueIndices).map((index, id) => ({
          id: id + 2,
          user: users[index].username,
          userPhoto: photosArray[id] || defaultP, 
          content: storyContents[id] || defaultP, 
          timestamp: time[id]
        }));

        setStories(newStories);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
      
    fetchUsers();
  }, []); 

  useEffect(() => {
    if (currentStory && !isPaused) {
      startTimer();
    }
    return () => clearTimer();
  }, [currentStory, isPaused]);

  const startTimer = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
      progressBarRef.current.style.transition = 'none';
      setTimeout(() => {
        progressBarRef.current.style.transition = 'width 5s linear';
        progressBarRef.current.style.width = '90%';
      }, 10);
    }
    timerRef.current = setTimeout(nextStory, 5000); 
  };

  const clearTimer = () => {
    clearTimeout(timerRef.current);
  };

  const openStory = (index) => {
    console.log('Opening story at index:', index);
    setCurrentStory(stories[index]);
    setCurrentIndex(index);
  };

  const nextStory = () => {
    clearTimer();
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentStory(stories[currentIndex + 1]);
      console.log('Next story:', stories[currentIndex + 1]);
    } else {
      setCurrentStory(null);
    }
  };

  const prevStory = () => {
    clearTimer();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentStory(stories[currentIndex - 1]);
      console.log('Previous story:', stories[currentIndex - 1]);
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      startTimer();
    } else {
      clearTimer();
    }
  };

  return (
    <div className='w-9/12 mt-12'>
      <style jsx>{`
        .gradient-border {
          border: 2px solid;
          border-image-slice: 1;
          border-width: 4px;
          border-image-source: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
          border-radius: 50%;
          overflow: hidden; 
          width: 70px;
          height: 70px;
        }
        .progress-bar {
          
          height: 2px;
          background-color: #fff;
          width: 0%;
        }
      `}</style>
      
      <Carousel>
        <CarouselContent className="gap-2 max-md:mt-12">
          {stories.map((story, index) => (
            <CarouselItem key={story.id} className='cursor-pointer border-2 border-l-[#feda75] border-t-[#fa7e1e] border-r-[#d62976] border-b-[#4f5bd5] flex justify-center items-center rounded-full p-0 md:basis-[12%] sm:basis-[12%] max-md:basis-[15%] lg:basis-[12%]' onClick={() => openStory(index)}>
              <div className='rounded-full w-full'>
                <div className='p-[0.18rem] flex justify-center items-center rounded-full w-full bg-white'>
                  <Image 
                    src={story.userPhoto} 
                    alt={`user ${story.id}`} 
                    width={70} 
                    height={70} 
                    className='rounded-full w-full '
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {currentStory && (
        <div  className='fixed inset-0 p-4 bg-neutral-900 flex items-center justify-center z-50'>
          <button className='fixed top-4 right-4 text-white  text-4xl' onClick={() => setCurrentStory(null)}><IoMdClose className='text-white'/></button>
          <Link href={'/'} className='fixed top-4 left-4' >
            <Image src={whiteLogo} alt={'logo'} width={120} className='ml-auto mr-auto' />
          </Link>
          <div className='bg-black bg-gradient-to-b from-gray-800 to-white rounded-md max-w-md w-full h-[90vh] max-md:h-[80vh] relative'>
            <div className='progress-bar w-8/12 ml-[5%] mt-4 ' ref={progressBarRef}></div>
            <div className='gap-2 p-4  text-white flex items-center justify-between '>
              <div className='flex items-center gap-2'>
               <Image className='rounded-full' src={currentStory.userPhoto} alt='user' width={40} />
                <p className=' text-base'>
                {currentStory.user}
                </p>
                <p className=' text-sm text-gray-300  '>
                  {currentStory.timestamp}
                </p>
              </div>
              <div className='flex gap-2 items-center text-xl'>
                <button onClick={togglePause} className='ml-2'>
                  {isPaused ? <FaPlay /> : <FaPause />}
                </button>
                <HiOutlineDotsHorizontal className='text-2xl ' />
              </div>
            </div>
            <div className='flex justify-between items-center text-2xl relative w-full z-[60]' >
              <button className='absolute top-60 rounded-full w-8 h-8 flex justify-center items-center max-md:-left-0 -left-20 bg-white' onClick={prevStory} disabled={currentIndex === 0}><FaAngleLeft /></button>
              <button className='absolute top-60 rounded-full w-8 h-8 flex justify-center items-center max-md:-right-0 -right-20 bg-white' onClick={nextStory} disabled={currentIndex === stories.length - 1}><FaAngleRight /></button>
            </div>
            <div className='mt-4 w-full h-5/6 flex justify-center items-center'>
              
                <Image 
                  src={
                    currentStory.content === '' ? story2 :
                    currentStory.content
                  } 
                  alt={`user ${currentStory.id}`} 
                
                  className='rounded-lg w-full max-h-[70vh] object-contain'
                />
           
            </div>
         </div>
        </div>
      )}
      
    </div>
  );
}

export default Stories;

