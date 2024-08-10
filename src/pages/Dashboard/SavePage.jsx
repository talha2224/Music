import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import MusicListing from '../../components/listing/MusicListing'
import SavedMusicListing from '../../components/listing/SavedMusicListing'

const SavePage = ({setshowNav}) => {
    const [settingsPopup, setsettingsPopup] = useState(false)
    const [currentView, setcurrentView] = useState("songs")
    const nav = useNavigate()

    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
            {/* bg-[#262626]  */}
            {/* NAVBAR  */}
            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />

            <div className='flex items-center gap-x-3 mt-[2rem]'>
                <FaArrowLeft className='cursor-pointer' onClick={() => nav("/dashboard/library")} />
                <p className='text-lg'>Saved</p>
            </div>

            <div className="flex items-center gap-x-3 mt-5 mb-5">
                <button onClick={() => setcurrentView("songs")} className={`px-3 py-1 rounded-3xl  text-sm ${currentView !== "songs" ? "bg-[#262626]" : "bg-[#fff] text-black "}`}>Songs (10)</button>
                <button onClick={() => setcurrentView("videos")} className={`px-3 py-1 rounded-3xl text-sm  ${currentView !== "videos" ? "bg-[#262626]" : "bg-[#fff] text-black"}`}>Videos (20)</button>
            </div>


            {
                currentView=="songs" ?
                <SavedMusicListing  />:
                <MusicListing />
            }




        </div>
    )
}


export default SavePage
