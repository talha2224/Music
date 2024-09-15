import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import devConfig from '../../config'

const MusicListing = ({data,type}) => {
  const nav = useNavigate()
  const updateHistory = async (musicId)=>{
    let res = await axios.post(`${devConfig.baseUrl}/history/create`, {userId:localStorage.getItem("userId"),musicId})
    if (res) {
      nav(`/dashboard/explore/playlist/${musicId}`)
    }
  }

  return (
    <div className='flex justify-start items-start w-[100%] overflow-x-auto gap-x-4 cursor-pointer'>
      {
        type !=="saved" ?
        data?.map((i, index) => (
          <div onClick={()=>updateHistory(i._id)} key={index} className='min-w-[175.53px]'>
            <img src={i?.coverImage} alt="" className='h-[10rem]' />
            <p className='mt-2'>{i?.title}</p>
            <p className='mt-0 text-[#888889] truncate w-[175px]'>{i?.description}</p>
          </div>
        )):
        data?.map((i, index) => (
          <div onClick={()=>updateHistory(i?.musicId?._id)} key={index} className='min-w-[175.53px]'>
            <img src={i?.musicId?.coverImage} alt="" className='h-[10rem]' />
            <p className='mt-2'>{i?.musicId?.title}</p>
            <p className='mt-0 text-[#888889] truncate w-[175px]'>{i?.musicId?.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MusicListing
