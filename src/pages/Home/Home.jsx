import React from 'react'
import Navbar from '../../components/Navber/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='relative '>
        <Navbar/>
        <div className='relative'>
          <img src={hero_banner} alt="" className='w-full [mask-image:linear-gradient(to_right,transparent,black_75%)] [-weblit-mask-image:linear-gradient(to_right,transparent,black_75%)]' />
          <div className='absolute bottom-12 px-[6%] '>
            <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-8 ' />
            <p className='max-w-[700px] text-lg mb-5'>
              Discovering his ties to secret ancient  order,a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
            </p>
            <div className='flex gap-2.5 mb-12'>
              <button className='border-0 outline-0  h-12 w-36 inline-flex items-center justify-center gap-[10px] text-[15px] font-semibold bg-white text-black rounded-sm cursor-pointer hover:border-black hover:border-2'><img src={play_icon} alt="" className='bg-white w-6 '/> Play</button>
              <button className='border-0 outline-0 h-12 w-44 inline-flex items-center justify-center gap-[10px] text-[15px] font-semibold rounded-sm cursor-pointer text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'><img src={info_icon} alt="" className='w-6' /> More info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className='px-[6%] mt-4'>
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Only on Netflix"} category={"top_rated"}/>
        <TitleCards title={"Upcomming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
