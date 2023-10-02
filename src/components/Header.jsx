import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";
import { BsDownload } from "react-icons/bs";
import spotifyIcon from "../assets/img/png/spotify-icon.png";
import profileIcon from "../assets/img/png/profile-icon.png";

const Header = () => {
  return (
    <div className='flex items-center justify-between mt-2 px-4 '>

      {/* Burger Menu and Icon */}
      <div className='flex items-center gap-2'>
        <button className='text-3xl'>
          <GiHamburgerMenu />
        </button>
        <button className='w-10'>
          <img src={spotifyIcon} alt="spotify-icon" className='' />
        </button>
      </div>

      {/* SearchBar */}
      <div className='flex items-center gap-1 relative'>
        <button className='ml-2 text-xl inset-y-0 left-0 absolute text-gray-400'>
          <LiaSearchSolid />
        </button>
        <input type="text" placeholder='Search for a song, album, artist or podcast' className='block h-8 pl-10 p-4 text-black rounded-lg leading-normal placeholder:text-gray-400 border border-gray-400 bg-white focus:ring-1 focus:ring-green-500 focus:border-green-600 focus:outline-none' style={{
          width: "28rem"
        }} />
      </div>

      {/* Buttons */}
      <div className='flex items-center gap-2'>
        <button className='w-48 flex items-center justify-center gap-2 p-1.5 px-2 rounded-lg hover:scale-105' style={{
          backgroundColor: "#1DB954",
        }}>
          Download App
          <BsDownload />
        </button>
        <button className='w-48 flex items-center justify-center bg-white text-black gap-2 p-1.5 px-2 rounded-lg hover:scale-105' >
          Join Premium
        </button>
      </div>

      {/* Profile */}
      <div className='flex items-center'>
        <button className='w-10'>
          <img src={profileIcon} alt="profile-icon" />
        </button>
        
      </div>
    </div>
  )
}

export default Header