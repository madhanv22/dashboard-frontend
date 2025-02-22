import React from 'react';
import { FaSquareLetterboxd } from "react-icons/fa6";
import { MdDashboardCustomize, MdOutlineMessage, MdOutlineSchedule, MdOutlineLogout,MdOutlineFileDownload, } from "react-icons/md";
import { SiCoursera } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className='bg-gray-100 hidden xl:flex flex-col w-60 fixed bottom-0 top-0 justify-between overflow-hidden'>
      <div className='cursor-pointer flex gap-4 h-fit w-full p-6  hover:text-gray-500 items-center'>
        <FaSquareLetterboxd className='text-xl' />
        <p className='font-bold text-l'>SUCCESS</p>
      </div>
      <ul className='flex flex-col space-y-6 text-gray-400 items-left p-6'>
        <li className='flex items-center gap-2 cursor-pointer hover:text-black'><MdDashboardCustomize className='text-xl'/> Dashboard</li>
        <li className='flex items-center gap-2 cursor-pointer hover:text-black'><SiCoursera className='text-xl'/> Courses</li>
				<li className='flex items-center gap-2 cursor-pointer hover:text-black'><MdOutlineSchedule className='text-xl'/> Schedule</li>
        <li className='flex items-center gap-2 cursor-pointer hover:text-black'><MdOutlineMessage className='text-xl'/> Messages</li>
        <li className='flex items-center gap-2 cursor-pointer hover:text-black'><MdOutlineFileDownload className='text-xl'/> Resources</li>
      </ul>
			<div className='flex gap-4 h-fit w-full p-6 text-gray-400 border-t-2 border-gray-300'>
				<li className='flex cursor-pointer items-center gap-2 hover:text-black'><MdOutlineLogout className='text-xl'/> Log Out</li>
			</div>
    </div>
  )
}

export default Sidebar;