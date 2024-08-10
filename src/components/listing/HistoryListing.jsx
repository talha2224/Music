import React, { useState } from 'react'
import Image from '../../assets/musicSmall.png'
import Heart from '../../assets/heart.svg'
import Dots from '../../assets/dots.png'
import { FaHeart } from 'react-icons/fa'


const HistoryListing = ({ title,type }) => {
    const [showIcons, setshowIcons] = useState({show:false,key:null})
    const len = [1, 1, 1, 1]

    return (
        <div className='mt-3'>
            <h1 className='text-lg font-semibold mb-3'>{title}</h1>
            {
                len?.map((_,index)=>(

                    <div onMouseLeave={()=>{setshowIcons({show:false,key:null})}} onMouseEnter={()=>{setshowIcons({show:true,key:index})}} key={index} className='w-[100%] min-w-full sm:h-[2.7rem] rounded-md hover:bg-[#262626] px-3 flex justify-between flex-wrap items-center mb-4 cursor-pointer'>
                        <div className='flex items-center gap-x-2 flex-1'>
                            <img src={Image} alt="" />
                            <div>
                                <h1 className='text-nowrap truncate'>Music Title</h1>
                                <p className='text-sm text-nowrap truncate'>Artist Name</p>
                            </div>
                        </div>
                        <p className='flex-1 text-nowrap truncate sm:block hidden'>20.12k Listeners</p>
                        <p className='flex-1 text-nowrap truncate sm:block hidden'>2:23</p>
                        {
                            showIcons.show && showIcons.key==index && type!="like" && (
                                <div className='flex items-center gap-x-3 justify-end '>
                                    <img src={Heart} alt="" className='h-[1rem]' />
                                    <img src={Dots} alt=""  className='h-[1rem]'/>
                                </div>
                            )
                        }
                        {
                            type=="like" && (
                                <FaHeart className='text-[#ff2e00] cursor-pointer' />

                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default HistoryListing
