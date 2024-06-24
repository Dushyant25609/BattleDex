import React from 'react'
import loader from "./Static/Loader.gif"

export default function Loading() {
  return (
    <div className='absolute z-20 flex h-screen w-screen justify-center items-center bg-white ' >
      <img src={loader} alt="" className="w-1/3 md:w-1/5 " />
    </div>
  )
}
