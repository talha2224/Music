import React, { useState } from 'react'
import Slider from '../../assets/slider.png'
import MusicListing from '../../components/listing/MusicListing'
import AlbumsListing from '../../components/listing/AlbumsListing'
import LeftArrow from '../../assets/leftarrow.png'
import RightArrow from '../../assets/rightarrow.png'
import QuickPicksListing from '../../components/listing/QuickPicksListing'
import Navbar from '../../components/Navbar'


const HomePage = ({setshowNav}) => {
  const [settingsPopup, setsettingsPopup] = useState(false)

  return (
    <div className='h-[100vh] overflow-y-auto py-4 md:py-10 pl-6 pr-2'>

      {/* NAVBAR  */}
      <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />
      {/* FILTERS  */}
      <div className='flex gap-x-4 items-center  mt-4 w-[100%] overflow-x-auto'>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Relaxe</p>
        </div>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Sleep</p>
        </div>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Energise</p>
        </div>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Sad</p>
        </div>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Vibe</p>
        </div>
        <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
          <p className='text-white text-sm'>Part</p>
        </div>
      </div>

      {/* ARTIST LISTING  */}
      <div className='mt-6'>
        <h1 className='text-2xl font-semibold mb-4'>Best of artists</h1>
        <MusicListing />
      </div>

      <img src={Slider} alt="" className='mt-4' />


      {/* FOR YOU  */}
      <div className='mt-6'>
        <h1 className='text-2xl font-semibold mb-4'>For you</h1>
        <MusicListing />
      </div>

      <img src={Slider} alt="" className='mt-4' />


      {/* QUICKPICKS  */}

      <div className='flex justify-between items-center mt-6 mb-4'>
        <h1 className='text-2xl font-semibold'>Quick Picks</h1>
        <div className='flex items-center gap-x-4'>
          <button className='bg-[#262626] text-white py-2 px-3 rounded-xl text-sm'>Play all</button>
          <div className='w-[1.6rem] h-[1.6rem] bg-[#262626] rounded-md flex justify-center items-center cursor-pointer'>
            <img src={LeftArrow} alt="" />
          </div>
          <div className='w-[1.6rem] h-[1.6rem] bg-[#262626] rounded-md flex justify-center items-center cursor-pointer'>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
      <QuickPicksListing />
      <img src={Slider} alt="" className='mt-4' />



      {/* ALBUM LISTING  */}
      <div className='mt-6'>
        <h1 className='text-2xl font-semibold mb-4'>Recommended Albums</h1>
        <AlbumsListing />
      </div>

      <img src={Slider} alt="" className='mt-4' />





    </div>
  )
}

export default HomePage
