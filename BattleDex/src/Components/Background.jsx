import React from 'react'
import bg from './Static/bg-3.mp4'

export default function Background() {
  return (
    <div  >
      <video className='videoTag h-screen w-screen  fixed z-0 inset-y-0 object-cover object-center' autoPlay loop muted>
          <source className='' src={bg} type='video/mp4' />
      </video>
    </div>
  )
}
