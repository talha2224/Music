import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import MusicListing from '../../components/listing/MusicListing'
import SavedMusicListing from '../../components/listing/SavedMusicListing'
import axios from 'axios'
import devConfig from '../../config'


const SavePage = ({ setshowNav }) => {
    const [settingsPopup, setsettingsPopup] = useState(false)
    const [currentView, setcurrentView] = useState("songs")
    const nav = useNavigate()
    const [music, setMusic] = useState([])


    const getMusicData = async (e) => {
        let res = await axios.get(`${devConfig.baseUrl}/save/all/${localStorage.getItem("userId")}`)
        setMusic(res?.data?.data)
    }

    useEffect(() => {
        getMusicData()
    }, [])

    console.log(music,'music')
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
                currentView == "songs" ?
                    <SavedMusicListing data={music} /> :
                    <MusicListing data={music} type={"saved"}/>
            }




        </div>
    )
}


export default SavePage
