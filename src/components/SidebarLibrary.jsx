import React from 'react'

// icons
import { MdOutlineLibraryMusic, MdLibraryMusic } from "react-icons/md";



const SidebarLibrary = (props) => {

    const toggleSelect = () => {
        props.setLibrary(!props.isLibrary);
        props.toggleSideMenu(false);
    }

    return (
        <div>
            {props.isLibrary
                ?
                <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 bg-[#181818] hover:bg-[#212121] duration-150' onClick={toggleSelect}>
                    <MdLibraryMusic size={30} className='text-[#1DB954]' />
                    <span>Library</span>
                </a></li>

                :
                <li><a href="#" className='flex gap-3 text-2xl mb-2 p-1 hover:bg-[#212121] duration-150' onClick={toggleSelect}>
                    <MdOutlineLibraryMusic size={30} className='text-[#1DB954]' />
                    <span>Library</span>
                </a></li>}
        </div>
    )
}

export default SidebarLibrary