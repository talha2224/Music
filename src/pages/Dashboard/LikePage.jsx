import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import HistoryListing from '../../components/listing/HistoryListing'
import axios from 'axios'
import devConfig from '../../config'


const LikePage = ({ setshowNav }) => {
    const [settingsPopup, setsettingsPopup] = useState(false)
    const nav = useNavigate()
    const [music, setMusic] = useState([])



    const getMusicData = async (e) => {
        let res = await axios.get(`${devConfig.baseUrl}/like/all/${localStorage.getItem("userId")}`)
        setMusic(res?.data?.data)
    }

    useEffect(() => {
        getMusicData()
    }, [])


    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
            {/* bg-[#262626]  */}
            {/* NAVBAR  */}
            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />


            <div className='flex items-center gap-x-3 mt-[2rem]'>
                <FaArrowLeft className='cursor-pointer' onClick={() => nav("/dashboard/library")} />
                <p className='text-lg'>Like <span className='text-base text-[#A1A1A1]'>2 songs</span></p>
            </div>


            <HistoryListing type={"like"} data={music} />


        </div>
    )
}


export default LikePage
