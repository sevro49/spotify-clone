import React, { useContext, useState } from 'react'

// components
import MyContext from '../MyContext';



const SidebarMenuPlaylist = () => {

    const { nav, setNav } = useContext(MyContext);

    const selectPlaylist = (id) => {
        setNav(prevState => !prevState);

        // Deselect element if there is any
        const previouslySelectedDivs = document.querySelectorAll(".selected");
        previouslySelectedDivs.forEach((div) => {
            div.classList?.remove("selected", "bg-[#181818]");
            div.classList?.add("hover:bg-[#212121]");
        });

        // Select new element
        const element = document.getElementById(id);
        element.classList.remove("hover:bg-[#212121]");
        element.classList.add("bg-[#181818]", "selected");
    }

    return (
        <>
            <div className='mt-3 overflow-auto max-h-[680px] whitespace-nowrap w-[300px]'>

                {/* Playlists */}
                <div id='0' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(0)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='1' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(1)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='2' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(2)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='3' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(3)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='4' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(4)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='5' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(5)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='6' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(6)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='7' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(7)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='8' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(8)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='9' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(9)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='10' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(10)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='11' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(11)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='12' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(12)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='13' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(13)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>

                <div id='14' className='playlist ps-3 pe-3 py-3 hover:bg-[#212121] cursor-pointer rounded-md' onClick={() => selectPlaylist(14)}>
                    <h2 className='font-bold text-lg break-all overflow-hidden whitespace-nowrap text-ellipsis'>Test Playlist</h2>
                    <h3 className='text-sm font-thin break-all overflow-hidden whitespace-nowrap text-ellipsis'>Owner</h3>
                </div>


            </div>
        </>
    )
}

export default SidebarMenuPlaylist