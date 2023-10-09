import React, { useState, useRef } from 'react'

// img
import testImg from "../assets/img/png/test-playlist-img.jpg";

const RecommendedPlaylist = (props) => {
    const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
    const [scrollRightDisabled, setScrollRightDisabled] = useState(false);

    const playlistsRef = useRef(null);

    // Moves horizontal scroll
    const handleScroll = (direction) => {
        const scrollAmount = 1090;
        const playlists = document.getElementById("playlists");

        if (direction === "left") {
            playlists.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            playlists.scrollLeft += scrollAmount;
        }
    };

    // Runs whenever scoll position changes, actives and disables scroll buttons
    const handleScrollChange = () => {
        const playlists = document.getElementById("playlists");
        const scrollLeftButton = document.getElementById("scrollLeft");
        const scrollRightButton = document.getElementById("scrollRight");

        if (playlists.scrollLeft === 0) {
            // Reached the beginning
            setScrollLeftDisabled(true);
            scrollLeftButton.classList.add("opacity-20")
            scrollLeftButton.classList.remove("hover:bg-[#404040]")
        } else if (playlists.scrollLeft >= playlists.scrollWidth - playlists.clientWidth) {
            // Reached the end
            setScrollRightDisabled(true);
            scrollLeftButton.classList.add("hover:bg-[#404040]")
            scrollLeftButton.classList.remove("opacity-20")
            scrollRightButton.classList.add("opacity-20")
            scrollRightButton.classList.remove("hover:bg-[#404040]")
        } else {
            // Enable both buttons
            setScrollLeftDisabled(false);
            setScrollRightDisabled(false);
            scrollLeftButton.classList.remove("opacity-20")
            scrollRightButton.classList.remove("opacity-20")
            scrollLeftButton.classList.add("hover:bg-[#404040]")
            scrollRightButton.classList.add("hover:bg-[#404040]")
        }
    }

    return (
        <div className='mt-12 '>

            {/* Section Header */}
            <div className='recommended-playlists__header flex items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Recommended Playlists</h1>

                {/* right/left icons */}
                <div className='flex items-center gap-2'>
                    <button id='scrollLeft' disabled={scrollLeftDisabled} onClick={() => handleScroll("left")} className='rounded-full p-1 duration-300 border border-[#404040] opacity-20'>
                        <props.AiOutlineLeft size={30} />
                    </button>
                    <button id='scrollRight' disabled={scrollRightDisabled} onClick={() => handleScroll("right")} className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]'>
                        <props.AiOutlineRight size={30} />
                    </button>
                </div>

            </div>

            {/*Section Body */}
            <div id="playlists" className="reacommended-playlists__body flex items-center gap-5 mt-5 overflow-y-hidden scrollbar-hide overflow-x-scroll scroll-smooth"
                onScroll={handleScrollChange} ref={playlistsRef}>
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

export default RecommendedPlaylist