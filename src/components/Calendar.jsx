import React from 'react'
import { RiExpandLeftRightLine } from 'react-icons/ri'

const Calendar = () => {
  return (
    <div className='absolute w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4 top-20 right-2 mx-4 overflow-hidden'>
      <div className='flex justify-between items-center'>
        <p className='font-medium text-lg'>November 2021</p>
        <RiExpandLeftRightLine className='size-8 ' />
        </div>
        <div className='mt-6'>
          <ul className='flex flex-shrink items-center justify-evenly text-gray-400 gap-1'>
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>SUN <span className='text-sm'>2</span></li>  
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>MON <span className='text-sm'>2</span></li>            
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>TUE <span className='text-sm'>2</span></li>  
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>WED <span className='text-sm'>2</span></li>
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>THU <span className='text-sm'>2</span></li>
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>FRI <span className='text-sm'>2</span></li>
            <li className='flex flex-col items-center text-xs border-2 border-gray-300 p-1 lg:p-2 hover:text-white hover:bg-black'>SAT <span className='text-sm'>2</span></li>
          </ul>
        </div>
    </div>
  )
}

export default Calendar