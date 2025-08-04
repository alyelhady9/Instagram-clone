import React from 'react'
import Sidebar from './Sidebar'
import FeedSection from './FeedSection'
import RightSidebar from './RightSidebar'

function MainPage({handleZIndex}) {
  return (
    <div className='w-full flex relative z-0 justify-between px-2 ' >
       
        <FeedSection handleZIndex={handleZIndex} />
        <RightSidebar />
    </div>
  )
}

export default MainPage