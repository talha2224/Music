

import React, { useState } from 'react'
import Slider from '../../assets/slider.png'
import MusicListing from '../../components/listing/MusicListing'
import AlbumsListing from '../../components/listing/AlbumsListing'
import LeftArrow from '../../assets/leftarrow.png'
import RightArrow from '../../assets/rightarrow.png'
import QuickPicksListing from '../../components/listing/QuickPicksListing'
import MoodListing from '../../components/listing/MoodListing'
import Navbar from '../../components/Navbar'

const ExplorePage = ({setshowNav}) => {
    const [settingsPopup, setsettingsPopup] = useState(false)

    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>

            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />


            {/* FILTERS  */}
            <div className='flex gap-x-4 items-center  mt-4'>
                <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
                    <p className='text-white text-sm'>New Release</p>
                </div>
                <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
                    <p className='text-white text-sm'>Charts</p>
                </div>
                <div className='bg-[#262626] py-2 px-3 rounded-3xl cursor-pointer'>
                    <p className='text-white text-sm'>Mood & genres</p>
                </div>
            </div>


            {/* ALBUM LISTING  */}
            <div className='mt-6'>
                <h1 className='text-2xl font-semibold mb-4'>New albums and singles</h1>
                <AlbumsListing />
                <img src={Slider} alt="" className='mt-4' />
            </div>

            {/* QUICKPICKS  */}

            <div className='flex justify-between items-center mt-6'>
                <h1 className='text-2xl font-semibold mb-4'>Quick Picks</h1>
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


            {/* MOOD AND GENRES  */}

            <div className='flex justify-between items-center mt-6'>
                <h1 className='text-2xl font-semibold mb-4'>Moods and genres</h1>
                <button className='bg-[#262626] text-white py-2 px-3 rounded-xl text-sm'>More</button>
            </div>

            <MoodListing />
            <img src={Slider} alt="" className='mt-4' />





            {/* ARTIST LISTING  */}
            <div className='mt-6'>
                <h1 className='text-2xl font-semibold mb-4'>Best of artists</h1>
                <MusicListing />
                <img src={Slider} alt="" className='mt-4' />
            </div>









        </div>
    )
}

export default ExplorePage
