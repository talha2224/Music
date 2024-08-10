import React from 'react'

const MoodListing = () => {
    const len = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (

        <div className='flex justify-between items-start w-[100%] flex-wrap gap-x-4 mt-3'>
            {
                len?.map((_, index) => (
                    <div key={index}>
                        <button className={`bg-[#262626] text-white py-2 px-3 rounded-xl text-sm mb-3 ${index%2==0 ? "border-b-2 border-[#4CD964]":"border-b border-[#2C77D4]"}`}>Mood</button>

                    </div>
                ))
            }
        </div>
    )
}

export default MoodListing
