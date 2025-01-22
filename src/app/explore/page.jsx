import React from 'react'
import { posts } from '../data/posts'
import Image from 'next/image'


import ExplorePost from '../components/ExplorePost'


function page() {

  return (
      
    <div className='w-full flex flex-col items-center justify-center max-md:mt-24 p-4 '>

      <p className='text-3xl w-full font-bold text-start mb-4 '>Explore</p>
      <div className='w-8/12 max-md:w-full grid grid-cols-3 gap-1  mb-12'>


            {posts.map((post, index) => (
              <ExplorePost post = {post} />
             
            ))}
      </div>
    </div>
          
  )
}

export default page