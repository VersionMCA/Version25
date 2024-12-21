import React from 'react'
import CyberButton from '../ui/CyberButton'

const Home = () => {
  return (
   <div className='h-screen w-screen'>
     <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-3/4 h-full bg-[#1a2e35] opacity-30 blur-[100px] transform -rotate-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-[#3fff00] opacity-20 blur-[120px]" />
      </div>
   </div>

  )
}

export default Home