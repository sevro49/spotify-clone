import React from 'react'

// components
import RecommendedPlaylist from './RecommendedPlaylist'
import OfficeRadio from './OfficeRadio';
import Discover from './Discover';

// icons
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";




const MainContent = () => {
  return (
    <div className='max-w-[1090px] m-auto'>

      <RecommendedPlaylist AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>

      <OfficeRadio AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>
      
      <Discover AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}/>

    </div>
  )
}

export default MainContent