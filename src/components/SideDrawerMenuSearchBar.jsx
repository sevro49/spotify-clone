import React from 'react'

// icons
import { LiaSearchSolid } from "react-icons/lia";

const SideDrawerMenuSearchBar = () => {
    return (
        <div className='block md:hidden p-4'>
            <div className='flex items-center gap-1 relative'>
                <button className='ml-2 text-xl inset-y-0 left-0 absolute text-gray-400'>
                    <LiaSearchSolid />
                </button>
                <input type="text" placeholder='Search for a song, album, artist or podcast' className='block w-[28rem] h-8 pl-10 p-4 text-black rounded-lg leading-normal placeholder:text-gray-400 border border-gray-400 bg-white focus:ring-1 focus:ring-green-500 focus:border-green-600 focus:outline-none' />
            </div>
        </div>
    )
}

export default SideDrawerMenuSearchBar