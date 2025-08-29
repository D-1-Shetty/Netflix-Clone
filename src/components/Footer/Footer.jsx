import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='max-w-lvh m-auto py-10 px-[4%]'>
      <div className='flex gap-5 py-10 '>
        <img src={youtube_icon} alt="" className='w-8 cursor-pointer'/>
        <img src={instagram_icon} alt="" className='w-8 cursor-pointer'/>
        <img src={twitter_icon} alt="" className='w-8 cursor-pointer'/>
        <img src={facebook_icon} alt="" className='w-8 cursor-pointer'/>
      </div>
      <ul className='grid grid-cols-4 gap-4 mb-8 list-none'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>   
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Cooporate Information</li>
        <li>Contact Us</li> 
      </ul>
      <p className='text-gray-500 text-sm'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
