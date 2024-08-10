import React from 'react'
import Actions from '../../assets/Actions.svg'
import Image from '../../assets/musicSmall.png'

const SavedMusicListing = () => {
    const len = [1, 1, 1, 1]

    return (
        <div className='mt-3'>
            {
                len?.map((_, index) => (

                    <div key={index} className='w-[100%] min-w-full h-[2.7rem] rounded-md hover:bg-[#262626] px-3 flex justify-between items-center mb-4 cursor-pointer'>
                        <div className='flex items-center gap-x-2 flex-1'>
                            <img src={Image} alt="" />
                            <div>
                                <h1>Music Title</h1>
                                <p className='text-sm text-[#A1A1A1]'>Artist Name</p>
                            </div>
                        </div>
                        <p className='flex-1 sm:block hidden'>20.12k Listeners</p>
                        <p className='flex-1 sm:block hidden'>2:23</p>
                        <img className='h-[1rem]' src={Actions} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default SavedMusicListing
