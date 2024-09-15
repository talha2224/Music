import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import HistoryListing from '../../components/listing/HistoryListing'
import axios from 'axios'
import devConfig from '../../config'


const HistoryPage = ({ setshowNav }) => {
  const [settingsPopup, setsettingsPopup] = useState(false)
  const [music, setMusic] = useState([])

  const getMusicData = async (e) => {
    let res = await axios.get(`${devConfig.baseUrl}/history/all/${localStorage.getItem("userId")}`)
    setMusic(res?.data?.data)
  }

  useEffect(() => {
    getMusicData()
  }, [])

  return (
    <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
      <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />

      <h1 className='text-xl font-semibold mt-4'>History</h1>

      <HistoryListing title={"Last Week"} data={music} />
      {/* <HistoryListing title={"July 2024"} /> */}
    </div>
  )
}

export default HistoryPage
