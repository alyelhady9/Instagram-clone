import React from 'react'
import { posts } from '../data/posts'

import Post from './Post';
import Stories from './Stories';

function FeedSection() {

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

    <div className='w-full flex flex-col items-center'>

      <Stories />
      <div className='w-full flex justify-center '>
          <div className='w-6/12 max-md:w-full'>

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