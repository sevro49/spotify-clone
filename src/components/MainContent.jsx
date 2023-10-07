import React from 'react'

// components
import RecommendedPlaylist from './RecommendedPlaylist'

// icons
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";




const MainContent = () => {
  return (
    <div className='max-w-[1090px] m-auto'>

      <RecommendedPlaylist AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>
    </div>
  )
}

export default MainContent