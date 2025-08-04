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
import Image from 'next/image';
import Link from 'next/link';

function Stories({handleZIndex}) {
  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const progressBarRef = useRef(null);
  const timerRef = useRef(null);
  const carouselRef = useRef(null);

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
    handleZIndex()
  };
  const closeStory = () => { 
    
    setCurrentStory(null);
    handleZIndex()
  }
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

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = 100; // Adjust based on your item width
      const newScrollPosition = container.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const canScrollLeft = carouselIndex > 0;
  const canScrollRight = carouselIndex < stories.length - 5; // Assuming 5 visible items

  return (
    <div className='w-9/12 mt-8 '>
      <style jsx>{`
        .progress-bar {
          height: 2px;
          background-color: #fff;
          width: 0%;
        }
        .carousel-content::-webkit-scrollbar {
          display: none;
        }
        .carousel-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="relative  overflow-hidden">
        <div 
          ref={carouselRef}
          className="carousel-content flex gap-2 overflow-x-auto scroll-smooth max-md:mt-12"
        >
          {stories.map((story, index) => (
            <div 
              key={story.id} 
              className='cursor-pointer  p-[4px] bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] rounded-full w-full h-full' 
              onClick={() => openStory(index)}
            >
              <div className='rounded-full w-full h-full'>
                <div className='py-[0.3rem] w-20 h-20 flex justify-center items-center rounded-full  bg-white'>
                  <Image 
                    src={story.userPhoto} 
                    alt={`user ${story.id}`} 
                    width={80} 
                    height={80} 
                    className='rounded-full p-[2px] w-19 h-19 object-cover'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white border-none w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-0 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => scrollCarousel('prev')}
          disabled={!canScrollLeft}
        >
          <FaAngleLeft size={14} />
        </button>
        
        <button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white border-none w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-0 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => scrollCarousel('next')}
          disabled={!canScrollRight}
        >
          <FaAngleRight size={14} />
        </button>
      </div>

      {currentStory && (
        <div className='fixed inset-0 p-4 bg-neutral-900 flex items-center justify-center z-50'>
          <button className='fixed top-4 max-md:top-[5.5rem] z-50 right-4 text-white text-4xl' onClick={closeStory}>
            <IoMdClose className='text-white'/>
          </button>
          <Link href={'/'} className='fixed top-4 left-4'>
            <Image src={whiteLogo} alt={'logo'} width={120} className='ml-auto mr-auto' />
          </Link>
          <div className='bg-black bg-gradient-to-b z-30 from-gray-800 to-white rounded-md max-w-md w-full h-[90vh] max-md:h-[80vh] relative'>
            <div className='progress-bar w-8/12 ml-[5%] mt-4' ref={progressBarRef}></div>
            <div className='gap-2 p-4 text-white flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Image className='rounded-full' src={currentStory.userPhoto} alt='user' width={40} />
                <p className='text-base'>
                  {currentStory.user}
                </p>
                <p className='text-sm text-gray-300'>
                  {currentStory.timestamp}
                </p>
              </div>
              <div className='flex gap-2 items-center text-xl'>
                <button onClick={togglePause} className='ml-2'>
                  {isPaused ? <FaPlay /> : <FaPause />}
                </button>
                <HiOutlineDotsHorizontal className='text-2xl' />
              </div>
            </div>
            <div className='flex justify-between items-center text-2xl relative w-full z-0'>
              <button 
                className='absolute top-60 rounded-full w-8 h-8 flex justify-center items-center max-md:-left-0 -left-20 bg-white' 
                onClick={prevStory} 
                disabled={currentIndex === 0}
              >
                <FaAngleLeft />
              </button>
              <button 
                className='absolute top-60 rounded-full w-8 h-8 flex justify-center items-center max-md:-right-0 -right-20 bg-white' 
                onClick={nextStory} 
                disabled={currentIndex === stories.length - 1}
              >
                <FaAngleRight />
              </button>
            </div>
            <div className='mt-4 w-full h-5/6 flex justify-center items-center'>
              <Image 
                src={currentStory.content === '' ? story2 : currentStory.content} 
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



