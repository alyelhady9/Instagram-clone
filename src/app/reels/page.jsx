import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
function page() {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-8/12 mt-6 grid grid-cols-4 max-lg:grid-cols-1 max-md:mt-28 max-sm:w-10/12 gap-2'>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg"/>
        <Skeleton className="h-[270px] max-md:h-[350px] w-[100%] m-0 bg-gray-300 rounded-lg" />
      </div>
    </div>
  )
}

export default page