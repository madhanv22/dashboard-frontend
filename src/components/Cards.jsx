import React from 'react'
import { GiStaryu } from 'react-icons/gi'
import { FaRegStar } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import { RiBarcodeBoxLine } from 'react-icons/ri'
import { TbTimeDuration10 } from 'react-icons/tb'

const Cards = () => {
  return (
    <div className='overflow-hidden'>
      {/* card1 */}
      <div className="flex flex-col gap-2 lg:gap-1 lg:flex-row items-center border-b-2 border-gray-300 py-6">
        <div className="flex flex-col w-1/3 md:w-full lg:w-1/2 xl:w-1/3 bg-purple-300 p-4">
          <div className="flex items-center justify-start text-purple-600">
            <GiStaryu className='size-8 text-black'/>
          </div>
          <div className="mt-4 text-base text-gray-600 font-medium">
            <p className='pb-2'>Start:</p>
            <p>15 November - 17 January</p>
          </div>
          <div className="flex  items-center justify-around mt-4 text-sm text-gray-600 border-t-2 border-gray-400">
            <p className='text-lg text-gray-500'>Price</p>
            <p className="text-lg font-bold">$1600</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">UX/UI: Web Interfaces</h3>
        <div className="flex items-center text-gray-600 gap-2">
            <FaRegStar className="ml-1" />
            <span className="text-sm font-medium">5.0</span>
        </div>
      </div>
        <div className='flex justify-between items-center'>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              An online course for those who want to delve into UX/UI design
          </p>
          <button className="w-8 h-8 flex items-center justify-center bg-black text-white">
            <FaArrowRight className='w-10'/>
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
          <span className="cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-sm bg-gray-100 text-gray-500">
            UX/UI Design
          </span>
          <span className="cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-sm bg-gray-100 text-gray-500">
            Web Design
          </span>
        </div>
        </div>
      </div>

      {/* card2 */}
      <div className="flex flex-col gap-2 lg:gap-1 lg:flex-row items-center border-b-2 border-gray-300 py-6">
        <div className="flex flex-col w-1/3 md:w-full lg:w-1/2 xl:w-1/3 bg-green-200 p-4">
          <div className="flex items-center justify-start text-purple-600">
            <RiBarcodeBoxLine className='size-8 text-black' />
          </div>
          <div className="mt-4 text-base text-gray-600 font-medium">
            <p className='pb-2'>Start:</p>
            <p>23 November - 18 January</p>
            </div>
          <div className="flex  items-center justify-around mt-4 text-sm text-gray-600 border-t-2 border-gray-400">
            <p className='text-lg text-gray-500'>Price</p>
            <p className="text-lg font-bold">$2800</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">Creative Director</h3>
          <div className="flex items-center text-gray-600 gap-2">
            <FaRegStar className="ml-1" />
            <span className="text-sm font-medium">4.9</span>
          </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                You will understand how to work with the team, client, productions, festivals
            </p>
            <button className="w-8 h-8 flex items-center justify-center bg-black text-white">
                <FaArrowRight className='w-10'/>
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            <span className="cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-sm bg-gray-100 text-gray-500">
                Innovative Solutions
            </span>
            </div>
        </div>
      </div>
      {/* card3 */}
      <div className="flex flex-col gap-2 lg:gap-1 lg:flex-row items-center border-b-2 border-gray-300 py-6">
        <div className="flex flex-col w-1/3 md:w-full lg:w-1/2 xl:w-1/3 bg-orange-300 p-4">
          <div className="flex items-center justify-start text-purple-600">
            <TbTimeDuration10 className='size-8 text-black' />
            </div>
            <div className="mt-4 text-base text-gray-600 font-medium">
            <p className='pb-2'>Start:</p>
            <p>2 November - 10 January</p>
          </div>
          <div className="flex  items-center justify-around mt-4 text-sm text-gray-600 border-t-2 border-gray-400">
            <p className='text-lg text-gray-500'>Price</p>
            <p className="text-lg font-bold">$2000</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">Motion Design, Basic</h3>
            <div className="flex items-center text-gray-600 gap-2">
                <FaRegStar className="ml-1" />
                <span className="text-sm font-medium">4.0</span>
            </div>
            </div>
            <div className='flex justify-between items-center'>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                An online course for those who want to switch to motion design 
            </p>
            <button className="w-8 h-8 flex items-center justify-center bg-black text-white">
              <FaArrowRight className='w-10'/>
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            <span className="cursor-pointer hover:bg-black hover:text-white px-3 py-1 text-sm bg-gray-100 text-gray-500">
                Adobe After Effects
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards