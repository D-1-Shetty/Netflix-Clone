import React from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'



const Navbar = () => {
    return (
        <div className='w-full py-5 px-[6%] flex justify-between fixed text-sm text-[#e5e5e5] bg-gradient-to-b from-[rgba(0,0,0,0.7)] from-10% to-transparent z-[1]'>
            <div className='flex items-center gap-[50px]'>
                <img src={logo} alt="logo" className='w-[90px]' />
                <ul className='flex gap-5 list-none cursor-pointer'>
                    <li className=''>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='flex items-center gap-5 cursor-pointer'>
                <img src={search_icon} alt="abc"className='w-5' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='w-5' />
                <div className='flex gap-2.5 items-center relative group'>
                    <img src={profile_icon} alt="profile" className='rounded-[4px] w-9'/>
                    <img src={caret_icon} alt="" />
                    <div className='absolute top-full right-0 w-max bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline hidden group-hover:block'>
                        <p>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
