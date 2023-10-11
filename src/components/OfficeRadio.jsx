import React, { useState, useRef } from 'react'

// functions
import { handleScroll, handleScrollChange } from './functions/scrollFunctions';

// img
import testImg from "../assets/img/png/test-playlist-img2.jpg";

const OfficeRadio = (props) => {
    const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
    const [scrollRightDisabled, setScrollRightDisabled] = useState(false);

    const handleOfficeRadioScroll = (direction) => {
        handleScroll(direction, "officeRadio");
    }

    const handleOfficeRadioScrollChange = () => {
        handleScrollChange("officeRadio", setScrollLeftDisabled, setScrollRightDisabled, )
    }

    return (
        <div className='mt-16 '>

            {/* Section Header */}
            <div className='office-radio__header flex items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Office Radio</h1>

                {/* right/left icons */}
                <div className='flex items-center gap-2'>
                    <button id='officeRadio-scrollLeft' disabled={scrollLeftDisabled} onClick={() => handleOfficeRadioScroll("left")} className='rounded-full p-1 duration-300 border border-[#404040] opacity-20'>
                        <props.AiOutlineLeft size={30} />
                    </button>
                    <button id='officeRadio-scrollRight' disabled={scrollRightDisabled} onClick={() => handleOfficeRadioScroll("right")} className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]'>
                        <props.AiOutlineRight size={30} />
                    </button>
                </div>

            </div>

            {/*Section Body */}
            <div id="officeRadio" className="h-[300px] office-radio__body flex items-center gap-5 mt-5 overflow-y-hidden scrollbar-hide overflow-x-scroll scroll-smooth"
                onScroll={handleOfficeRadioScrollChange} ref={props.playlistsRef}>
                {/* Playlist */}
                <div className="office-radio__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>

                {/* Playlist */}
                <div className="recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

                    {/* Playlist Header */}
                    <div className="playlist-header">
                        <img src={testImg} alt="playlist-img" className=' w-[200px] h-[200px] object-cover rounded-md' />
                    </div>

                    {/* Playlist Body */}
                    <div className='playlist-body mt-2'>
                        <h3 className='text-xl break-all overflow-hidden whitespace-nowrap text-ellipsis'>Playlist Title</h3>
                        <h4 className='text-sm mt-1 break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6 Artist 11111, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6</h4>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OfficeRadio