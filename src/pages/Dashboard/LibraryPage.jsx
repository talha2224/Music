import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Like from '../../assets/Liked.svg'
import Saved from '../../assets/Saved.svg'
import { Link } from 'react-router-dom'

const LibraryPage = ({setshowNav}) => {
    const [settingsPopup, setsettingsPopup] = useState(false)
    const [currentView, setcurrentView] = useState("library")

    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
            {/* bg-[#262626]  */}
            {/* NAVBAR  */}
            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />

            <div className="flex items-center gap-x-3 mt-5">
                <button onClick={() => setcurrentView("library")} className={`px-3 py-1 rounded-3xl  text-sm ${currentView !== "library" ? "bg-[#262626]" : "bg-[#fff] text-black "}`}>Library</button>
                <button onClick={() => setcurrentView("download")} className={`px-3 py-1 rounded-3xl text-sm  ${currentView !== "download" ? "bg-[#262626]" : "bg-[#fff] text-black"}`}>Downloads</button>
                <button onClick={() => setcurrentView("activity")} className={`px-3 py-1 rounded-3xl text-sm  ${currentView !== "activity" ? "bg-[#262626]" : "bg-[#fff] text-black"}`}>Recent Activity</button>
            </div>


            <div className='mt-[3rem]'>
                <Link to={"/dashboard/library/save"} className='mb-2 border border-[#262626] w-[100%] sm:w-[40%] p-3 rounded-md flex items-center gap-x-4'>
                    <img src={Saved} alt="" />
                    <div>
                        <h1 className='text-lg font-semibold'>Saved</h1>
                        <p className='text-sm text-[#A1A1A1]'>20 songs - 3 videos</p>
                    </div>
                </Link>
                <Link to={"/dashboard/library/like"} className='mb-2 border border-[#262626] w-[100%] sm:w-[40%] p-3 rounded-md flex items-center gap-x-4'>
                    <img src={Like} alt="" />
                    <div>
                        <h1 className='text-lg font-semibold'>Liked</h1>
                        <p className='text-sm text-[#A1A1A1]'>20 songs</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default LibraryPage
