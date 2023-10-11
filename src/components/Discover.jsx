import React, { useState, useRef } from 'react'

// img
import testImg from "../assets/img/png/test-music-img.jpg";

// icons
import { AiFillPlayCircle } from "react-icons/ai";

const Discover = (props) => {

    return (
        <div className='mt-16 '>

            {/* Section Header */}
            <div className='discover__header flex items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Discover</h1>

            </div>

            {/*Section Body */}
            <div id='discover' className='discover__body w-full h-[262px] overflow-y-auto mt-5 p-2 grid grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-3 gap-5 scroll-smooth' >


                    {/* Song */}
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-12 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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
                    <div className='bg-[#181818] p-1 group rounded-md shadow-lg duration-300  cursor-pointer me-5 flex items-center w-full min-w-[350px]'>

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