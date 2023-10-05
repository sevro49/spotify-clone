import React from 'react'

// icons
import {AiOutlinePlus} from "react-icons/ai";

const NewPlaylist = () => {
  return (
    <>
        <div className='w-full flex justify-center'>
            <button className='flex h-10 ps-4 pe-4 items-center justify-center gap-3 bg-[#1DB954] rounded-3xl transform hover:scale-125 duration-300'>
                <AiOutlinePlus size={30}/> <span className='text-xl '>New Playlist</span>
            </button>
        </div>
    </>
  )
}

export default NewPlaylist