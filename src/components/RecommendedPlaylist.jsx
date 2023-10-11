import React, {useState} from 'react'

// functions
import { handleScroll, handleScrollChange } from './functions/scrollFunctions';

// img
import testImg from "../assets/img/png/test-playlist-img.jpg";

const RecommendedPlaylist = (props) => {

    const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
    const [scrollRightDisabled, setScrollRightDisabled] = useState(false);

    const handleRecommendedPlaylistsScroll = (direction) => {
        handleScroll(direction, "recommendedPlaylists");
    }

    const handleRecommendedPlaylistsScrollChange = () => {
        handleScrollChange("recommendedPlaylists", setScrollLeftDisabled, setScrollRightDisabled, )
    }

    return (
        <div className='mt-16 max-[450px]:p-[10px]'>

            {/* Section Header */}
            <div className='recommended-playlists__header flex flex-col min-[365px]:flex-row items-center justify-between'>

                {/* Section Title */}
                <h1 className='text-3xl font-bold'>Recommended Playlists</h1>

                {/* right/left icons */}
                <div className='flex items-center gap-2 max-[364px]:w-full max-[364px]:mt-2'>
                    <button id='recommendedPlaylists-scrollLeft' disabled={scrollLeftDisabled} onClick={() => handleRecommendedPlaylistsScroll("left")} className='rounded-full p-1 duration-300 border border-[#404040] opacity-20'>
                        <props.AiOutlineLeft size={30} />
                    </button>
                    <button id='recommendedPlaylists-scrollRight' disabled={scrollRightDisabled} onClick={() => handleRecommendedPlaylistsScroll("right")} className='rounded-full p-1 duration-300 hover:bg-[#404040] border border-[#404040]'>
                        <props.AiOutlineRight size={30} />
                    </button>
                </div>

            </div>

            {/*Section Body */}
            <div id="recommendedPlaylists" className="h-[300px] reacommended-playlists__body flex items-center gap-5 mt-5 overflow-y-hidden scrollbar-hide overflow-x-scroll scroll-smooth"
                onScroll={handleRecommendedPlaylistsScrollChange} ref={props.playlistsRef}>
                {/* Playlist */}
                <div className="block recommended-playlists__body-playlist bg-[#181818] p-2 rounded-md max-w-[200px] max-h-[300px] hover:-translate-y-2 duration-300 cursor-pointer shadow-lg">

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