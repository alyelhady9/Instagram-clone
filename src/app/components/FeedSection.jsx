import React from 'react'
import { posts } from '../data/posts'

import Post from './Post';
import Stories from './Stories';
import { Skeleton } from '@/components/ui/skeleton';
function FeedSection({handleZIndex}) {

    const shufflePosts = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
         }
         return arr
    }

    const shuffledPosts = shufflePosts([...posts])
  return (

    <div className='max-md:w-full max-lg:w-full  w-8/12 flex flex-col z-[1] items-center'>

      <Stories handleZIndex={handleZIndex} />
      <div className='w-full flex z-0 justify-center '>
          <div className='w-7/12 max-md:w-full z-0'>

            {
              shuffledPosts.map((post, index, i) => (
                
                  <Post post={post} key={index} />
                ))
              }
      
      </div>
      
      
      </div>
     
    </div>
      
  )
}

export default FeedSection