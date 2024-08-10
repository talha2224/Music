import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import HistoryListing from '../../components/listing/HistoryListing'

const HistoryPage = ({setshowNav}) => {
    const [settingsPopup, setsettingsPopup] = useState(false)
  return (
    <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
      <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav}/>

      <h1 className='text-xl font-semibold mt-4'>History</h1>

      <HistoryListing title={"Last Week"}/>
      <HistoryListing title={"July 2024"}/>
    </div>
  )
}

export default HistoryPage
