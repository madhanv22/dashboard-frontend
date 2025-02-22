import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {

  const images = {
    profile: 'src/assets/profile.png'
  }

  return (
    <div className='fixed z-20 bg-white left-0 xl:left-60 right-0 top-0 h-14 grid grid-cols-2 gap-8 px-10'>
        <div className='flex w-auto items-center'>
          <p className='text-2xl font-medium'>Courses.</p>
        </div>
        <div className='flex gap-3 items-center justify-end'>
          <IoNotificationsOutline className='text-xl'/>
          <p className='text-lg'>Grace Water</p>
          <img src={images.profile} alt="" className='h-10 rounded-full' />
        </div>
    </div>
  )
}

export default Navbar