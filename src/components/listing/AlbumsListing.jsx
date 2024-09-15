import React from 'react'
import Cover1 from '../../assets/cover1.png'
import Cover2 from '../../assets/cover2.png'
import Album from '../../assets/album.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import devConfig from '../../config'

const AlbumsListing = ({data}) => {
  

  return (

    <div className='flex justify-between items-start w-[100%] overflow-x-auto gap-x-4'>
      {
        data?.map((i, index) => (
          <div  key={index} className='min-w-[175.53px] cursor-pointer'>
            <img src={i?.image} alt="" className='h-[10rem]' />
            <p className='mt-2'>{i?.title}</p>
            <div className='flex items-center gap-x-2'>
              <img src={Album} alt="" className='w-[1rem]' />
            <p className='mt-0 text-[#888889] truncate w-[175px]'>Album - {i?.artist?.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AlbumsListing
