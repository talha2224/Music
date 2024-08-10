import React from 'react'
import Music1 from '../../assets/music1.png'
import Music2 from '../../assets/music2.png'
import Dots from '../../assets/dots.png'


const QuickPicksListing = () => {
    const len = [1, 1, 1, 1, 1, 1]
    return (

        <div className='flex justify-between items-start w-[100%] overflow-x-auto flex-wrap gap-x-2'>
            {
                len?.map((_, index) => (
                    <div key={index} className='min-w-[100%] sm:min-w-[49%] bg-[#262626] shadow-lg mb-4 rounded-md p-2 flex justify-between items-center'>
                        <div className='flex items-center gap-x-3'>
                            <img src={index % 2 == 0 ? Music1 : Music2} alt="" />
                            <div>
                                <p className='text-lg'>Title</p>
                                <p className='text-sm'>Artist Name - 2024</p>
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
