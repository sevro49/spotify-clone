import React, { useState } from 'react'

// components
import SideDrawerMenu from './SideDrawerMenu';
import SearchBar from './SearchBar';
import JoinAndDownloadBtn from './JoinAndDownloadBtn';

// icons
import { GiHamburgerMenu } from "react-icons/gi";

// imgs
import spotifyIcon from "../assets/img/png/spotify-icon.png";
import profileIcon from "../assets/img/png/profile-icon.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const updateSideMenu = newValue => {
    setNav(newValue);
  }

  return (
    <div className='flex items-center justify-between mt-2 px-4 '>

      {/* Burger Menu and Brand */}
      <div className='flex items-center w-15 gap-2'>
        <button className='text-3xl' onClick={() => setNav(!nav)}>
          <GiHamburgerMenu />
        </button>
        <button className='w-10'>
          <img src={spotifyIcon} alt="spotify-icon" className='' />
        </button>
      </div>

      <SearchBar/>

      {/* Buttons */}
      {/* <JoinAndDownloadBtn/> */}

      {/* Profile */}
      <div className='flex items-center'>
        <button className='w-10'>
          <img src={profileIcon} alt="profile-icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <SideDrawerMenu nav={nav} updateSideMenu={updateSideMenu}/>
    </div>
  )
}

export default Header