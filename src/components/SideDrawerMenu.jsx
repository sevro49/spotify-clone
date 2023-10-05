import React, { useState } from 'react'

// components
import SidebarDiscover from './SidebarDiscover';
import SidebarLibrary from './SidebarLibrary';
import SidebarMenuPlaylists from './SidebarMenuPlaylists';

// icons
import { AiOutlineClose, AiOutlineHome, AiFillHome } from "react-icons/ai";

const SideDrawerMenu = (props) => {

    const [isHome, setIsHome] = useState(true);
    const [isDiscover, setIsDiscover] = useState(false);
    const [isLibrary, setIsLibrary] = useState(false);

    // toggles side drawer menu
    const toggleSideMenu = () => {
        props.updateSideMenu(!props.nav);
    }

    // choose home
    const setHome = () => {
        setIsHome(true);
        setIsDiscover(false);
        setIsLibrary(false);
        toggleSideMenu(false);
    }

    // choose discover
    const setDiscover = () => {
        setIsHome(false);
        setIsDiscover(true);
        setIsLibrary(false);
    }

    // choose library
    const setLibrary = () => {
        setIsHome(false);
        setIsDiscover(false);
        setIsLibrary(true);
    }

    return (
        <>
            {/* Overlay */}
            {props.nav ? (
                <div className=' opacity-50 h-screen w-full fixed z-10 top-0 left-0 duration-300 bg-[#212121]' ></div>
            ) : (
                ""
            )}

            {/* Side Drawer Menu */}
            <div className={
                props.nav
                    ? "fixed top-0 left-0 w-[300px] h-screen bg-[#252525] z-10 duration-300"
                    : "fixed top-0 left-[-100%] w-[300px] h-screen bg-[#252525] z-10 duration-300"
            }>

                <AiOutlineClose onClick={toggleSideMenu} className='text-3xl text-white absolute right-4 top-4 cursor-pointer rounded-sm active:bg-[#212121]' />


                {/* Elements */}
                <div className='absolute ps-4 pe-4 top-14 w-full'>
                    <ul>

                        {/* Sidebar Home */}
                        {isHome
                            ?
                            <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 bg-[#181818] duration-150' onClick={setHome}>
                                <AiFillHome size={30} className='text-[#1DB954]' />
                                <span>Home</span>
                            </a></li>

                            :
                            <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 hover:bg-[#212121] duration-150' onClick={setHome}>
                                <AiOutlineHome size={30} className='text-[#1DB954]' />
                                <span>Home</span>
                            </a></li>}


                        <SidebarDiscover isDiscover={isDiscover} setDiscover={setDiscover} toggleSideMenu={toggleSideMenu} />


                        <SidebarLibrary isLibrary={isLibrary} setLibrary={setLibrary} toggleSideMenu={toggleSideMenu} />


                    </ul>
                </div>

                <div className='relative top-48'>
                    {/* Divider */}
                    <div className='relative border-t-2 my-4 mx-auto w-[240px] border-[#303030]'></div>

                    <SidebarMenuPlaylists/>
                </div>
            </div>
        </>

    )
}

export default SideDrawerMenu