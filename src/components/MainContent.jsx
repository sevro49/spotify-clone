import React from 'react'

// components
import RecommendedPlaylist from './RecommendedPlaylist'
import OfficeRadio from './OfficeRadio';

// icons
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";




const MainContent = () => {
  return (
    <div className='max-w-[1090px] m-auto'>

      <RecommendedPlaylist AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>

      <OfficeRadio AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>
    </div>
  )
}

export default MainContent