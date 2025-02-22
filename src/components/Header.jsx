import React from 'react'
import Calendar from './Calendar';
import Cards from './Cards';
import Profiles from './Profiles';
import LearningProgress from './LearningProgress';

const Header = () => {
  return (
    <div className='grid grid-cols-2 overflow-hidden'>
      <div className='absolute w-1/2 h-auto top-16 left-0 xl:left-60 right-4 mx-10'>
        <ul className='flex gap-4 justify-between p-6 border-b-2 border-gray-200 text-gray-400'>
          <li className='hover:text-black cursor-pointer'>Advertising</li>
          <li className='hover:text-black cursor-pointer'>Design</li>
          <li className='hover:text-black cursor-pointer'>Marketing</li>
          <li className='hover:text-black cursor-pointer'>Illustration</li>
          <li className='hover:text-black cursor-pointer'>Brand</li>
        </ul>
        {/* cards */}
        <Cards />
      </div>
      {/* calendar */}
      <Calendar />
      {/* profiles */}
      <Profiles />
      {/* progress */}
      <LearningProgress />
    </div>
  )
}

export default Header