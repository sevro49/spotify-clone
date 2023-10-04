import React from 'react'

// icons
import { BsDownload } from "react-icons/bs";


const JoinDownloadBtn = () => {
  return (
    <div>
        <div className='flex items-center  gap-2'>
        <button className='w-48 flex items-center justify-center gap-2 p-1.5 px-2 rounded-lg hover:scale-105 bg-[#1DB954]'>
          Download App
          <BsDownload />
        </button>
        <button className='w-48 flex items-center justify-center bg-white text-black gap-2 p-1.5 px-2 rounded-lg hover:scale-105' >
          Join Premium
        </button>
      </div>
    </div>
  )
}

export default JoinDownloadBtn