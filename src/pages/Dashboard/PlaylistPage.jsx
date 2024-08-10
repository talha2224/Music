import React, { useState } from 'react'
import Actions from '../../assets/actions.png'
import Suggest from '../../assets/suggest.png'
import playlistCover from '../../assets/playlistCover.png'
import HistoryListing from '../../components/listing/HistoryListing'
import Navbar from '../../components/Navbar'

const PlaylistPage = ({setshowNav}) => {
    const [settingsPopup, setsettingsPopup] = useState(false)

    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>

            {/* NAVBAR  */}
            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />


            <div className='flex justify-between items-center mb-[3rem] mt-5 flex-wrap md:flex-row flex-col'>
                <div className='mt-4'>
                    <img src={playlistCover} alt="" />
                    <div className='w-[20rem] flex justify-center items-center mt-5'>
                        <img src={Actions} alt="" className='h-[2rem]' />
                    </div>
                </div>
                <div>
                    <img src={Suggest} alt="" className='mt-4' />
                </div>
            </div>


            <HistoryListing type={"like"} />






        </div>
    )
}

export default PlaylistPage
