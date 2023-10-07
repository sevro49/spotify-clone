import React, {useRef} from 'react'

import testImg from "../assets/img/png/test-playlist-img.jpg";

const RecommendedPlaylist = (props) => {

    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='mt-12 '>

            {/* Section Header */}
            <div className='recommended-playlists__header flex items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Recommended Playlists</h1>

                {/* right/left icons */}
                <div className='flex items-center gap-2'>
                    <button className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]' onClick={() => scroll(-20)}>
                        <props.AiOutlineLeft size={30} />
                    </button>
                    <button className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]' onClick={() => scroll(20)}>
                        <props.AiOutlineRight size={30} />
                    </button>
                </div>

            </div>

            {/*Section Body */}
            <div className="reacommended-playlists__body flex items-center gap-5 mt-5 overflow-y-hidden scrollbar-hide overflow-x-scroll">
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