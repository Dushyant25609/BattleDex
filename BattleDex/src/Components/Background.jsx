import React from 'react'
import bg from './Static/bg-3.mp4'

export default function Background() {
  return (
    <div className=''  >
      <div className="bg-gray-600 h-screen w-screen fixed md:hidden"></div>
      <video className='videoTag hidden h-screen w-screen md:bg-transparent md:block  fixed z-0 inset-y-0 object-cover object-center' autoPlay loop muted>
          <source className='' src={bg} type='video/mp4' />
      </video>
    </div>
  )
}
