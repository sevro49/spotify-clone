import React, { useState, useRef } from 'react'

// components
import RecommendedPlaylist from './RecommendedPlaylist'
import OfficeRadio from './OfficeRadio';
import Discover from './Discover';

// icons
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Test from './Test';




const MainContent = () => {

  const playlistsRef = useRef(null);

  return (
    <div className='min-[450px]:max-w-[420px] min-[660px]:max-w-[640px] min-[890px]:max-w-[860px] min-[1110px]:max-w-[1090px] m-auto'>

      <RecommendedPlaylist AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft}  playlistsRef={playlistsRef} />

      <OfficeRadio AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft} playlistsRef={playlistsRef} />

      <Discover AiOutlineRight={AiOutlineRight} AiOutlineLeft={AiOutlineLeft} />

      <Test />
    </div>
  )
}

export default MainContent