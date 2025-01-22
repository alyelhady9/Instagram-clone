import React from 'react'
import Sidebar from './Sidebar'
import FeedSection from './FeedSection'
import RightSidebar from './RightSidebar'

function MainPage() {
  return (
    <div className='w-full flex justify-between px-2 ' >
       
        <FeedSection />
        <RightSidebar />
    </div>
  )
}

export default MainPage