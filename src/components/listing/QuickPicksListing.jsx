import React from 'react'
import Dots from '../../assets/dots.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import devConfig from '../../config'

const QuickPicksListing = ({ data }) => {
    const nav = useNavigate()
    const updateHistory = async (musicId) => {
        let res = await axios.post(`${devConfig.baseUrl}/history/create`, { userId: localStorage.getItem("userId"), musicId })
        if (res) {
            nav(`/dashboard/explore/playlist/${musicId}`)
        }
    }
    return (

        <div className='flex justify-between items-start w-[100%] overflow-x-auto flex-wrap gap-x-2'>
            {
                data?.map((i, index) => (
                    <div onClick={() => updateHistory(i._id)} key={index} className='min-w-[100%] sm:min-w-[49%] bg-[#262626] shadow-lg mb-4 rounded-md p-2 flex justify-between items-center cursor-pointer'>
                        <div className='flex items-center gap-x-3'>
                            <img src={i?.coverImage} alt="" className='h-[3rem]' />
                            <div>
                                <p className='text-lg'>{i?.title}</p>
                                <p className='text-sm'>{i?.artist?.name}</p>
                            </div>
                        </div>
                        <img src={Dots} alt="" className='cursor-pointer' />
                    </div>

                ))
            }
        </div>
    )
}

export default QuickPicksListing
