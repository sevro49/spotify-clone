import React from 'react'

// icons
import { AiOutlineCompass, AiFillCompass } from "react-icons/ai";


const SidebarDiscover = (props) => {

    const toggleSelect = () => {
        props.setDiscover(!props.isDiscover);
    }

    return (
        <div>
            {props.isDiscover
                ?
                <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 bg-[#181818] hover:bg-[#212121] duration-150' onClick={toggleSelect}>
                    <AiFillCompass size={30} className='text-[#1DB954]' />
                    <span>Discover</span>
                </a></li>

                :
                <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 hover:bg-[#212121] duration-150' onClick={toggleSelect}>
                    <AiOutlineCompass size={30} className='text-[#1DB954]' />
                    <span>Discover</span>
                </a></li>}
        </div>
    )
}

export default SidebarDiscover