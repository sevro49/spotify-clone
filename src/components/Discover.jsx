import React, { useState, useRef } from 'react'

// img
import testImg from "../assets/img/png/test-music-img.jpg";

// icons
import { AiFillPlayCircle } from "react-icons/ai";

const Discover = (props) => {
    const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
    const [scrollRightDisabled, setScrollRightDisabled] = useState(false);
    const [isHoveredSong, setIsHoveredSong] = useState(false);

    const playlistsRef = useRef(null);

    // Moves horizontal scroll
    const handleScroll = (direction) => {
        const scrollAmount = 1090;
        const playlists = document.getElementById("discover");

        if (direction === "left") {
            playlists.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            playlists.scrollLeft += scrollAmount;
        }
    };

    // Runs whenever scoll position changes, actives and disables scroll buttons
    const handleScrollChange = () => {
        const playlists = document.getElementById("discover");
        const scrollLeftButton = document.getElementById("discover-scrollLeft");
        const scrollRightButton = document.getElementById("discover-scrollRight");

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
        <div className='mt-16 '>

            {/* Section Header */}
            <div className='discover__header flex items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Discover</h1>

                {/* right/left icons */}
                <div className='flex items-center gap-2'>
                    <button id='discover-scrollLeft' disabled={scrollLeftDisabled} onClick={() => handleScroll("left")} className='rounded-full p-1 duration-300 border border-[#404040] opacity-20'>
                        <props.AiOutlineLeft size={30} />
                    </button>
                    <button id='discover-scrollRight' disabled={scrollRightDisabled} onClick={() => handleScroll("right")} className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]'>
                        <props.AiOutlineRight size={30} />
                    </button>
                </div>

            </div>

            {/*Section Body */}
            <div id='discover' className='discover__body w-full mt-5 p-2 grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3 gap-5 scroll-smooth scrollbar-hide' onScroll={handleScrollChange} ref={playlistsRef}>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>

                {/* Song */}
                <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer flex items-center w-full min-w-[350px]'>

                    {/* song img */}
                    <div className='relative song-img w-full max-h-[60px]'>

                        <div className='bg-black w-full h-full absolute opacity-0 group-hover:opacity-100 bg-opacity-[.60]'>
                            <AiFillPlayCircle className='absolute h-full w-full p-2 opacity-100' />
                        </div>


                        <img src={testImg} alt="test-img" className=' h-[60px] w-[60px] max-w-full aspect-auto rounded-md object-cover' />
                    </div>

                    {/* song info */}
                    <div className='song-info w-[90%] md:w-[85%] min-[1100px]:w-[80%] flex items-center justify-between ms-2'>
                        <div className='break-all overflow-hidden whitespace-nowrap text-ellipsis'>
                            <h4 className='text-sm '>Song TitleEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h4>
                            <h5 className='text-xs break-all overflow-hidden whitespace-nowrap text-ellipsis'>Artist</h5>
                        </div>
                        <h4 className='ms-2 relative z-10'>02:54</h4>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Discover