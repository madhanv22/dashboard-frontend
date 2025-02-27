import React from 'react'
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';

const Profiles = () => {

  const images = {
    profile1, 
    profile2, 
    profile3
  };  

  return (
    <div className='absolute w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4 top-56 right-2 mx-2 overflow-hidden'>
      <p className='font-medium text-lg'>Mentors:</p>
      <div className='py-4'>
        <div className='flex items-center justify-between border-b-2 border-gray-200 pb-2'>
          <img src={images.profile1} alt="" className='h-12 '/>
          <div className='flex flex-col items-left'>
            <p className='font-medium text-xs'>James King</p>
            <p className='text-gray-400 text-sm'>UX/UI Designer</p>
          </div>
          <div>
            <p className='text-gray-400 text-sm'>Exp. 6 years</p>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex items-center justify-between border-b-2 border-gray-200 pb-2'>
          <img src={images.profile2} alt="" className='h-12 w-12'/>
          <div className='flex flex-col items-left'>
            <p className='font-medium text-xs'>Evin Harris</p>
            <p className='text-gray-400 text-sm'>Graphic Designer</p>
          </div>
          <div>
            <p className='text-gray-400 text-sm'>Exp. 5 years</p>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex items-center justify-between border-b-2 border-gray-200 pb-2'>
          <img src={images.profile3} alt="" className='h-12 '/>
          <div className='flex flex-col items-left'>
            <p className='font-medium text-xm'>Gillbert Smith</p>
            <p className='text-gray-400 text-sm'>Creative director</p>
          </div>
          <div>
            <p className='text-gray-400 text-sm'>Exp. 7 years</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles