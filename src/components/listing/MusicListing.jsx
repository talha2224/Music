import React from 'react'
import Cover1 from '../../assets/cover1.png'
import Cover2 from '../../assets/cover2.png'


const MusicListing = () => {
  const len = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (

    <div className='flex justify-between items-start w-[100%] overflow-x-auto gap-x-4'>
      {
        len?.map((_, index) => (
          <div key={index} className='min-w-[175.53px]'>
            <img src={index % 2 == 0 ? Cover1 : Cover2} alt="" />
            <p className='mt-2'>Title</p>
            <p className='mt-0 text-[#888889] truncate w-[175px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab?</p>
          </div>
        ))
      }
    </div>
  )
}

export default MusicListing
