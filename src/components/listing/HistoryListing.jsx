import React, { useState, useEffect } from 'react';
import Image from '../../assets/musicSmall.png';
import Heart from '../../assets/heart.svg';
import Dots from '../../assets/dots.png';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios'
import devConfig from '../../config'
import toast from 'react-hot-toast';

const HistoryListing = ({ title, type, data }) => {
    const [showIcons, setShowIcons] = useState({ show: false, key: null });
    const [durations, setDurations] = useState({}); // State to store durations of each track

    useEffect(() => {
        // Calculate the duration for each audio in the list
        data?.forEach((item, index) => {
            const audio = new Audio(item?.musicId?.music); // Create an audio element
            audio.addEventListener('loadedmetadata', () => {
                const duration = audio.duration;
                setDurations((prev) => ({
                    ...prev,
                    [index]: formatTime(duration), // Store the formatted duration
                }));
            });
        });
    }, [data]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const saveMusic = async(musicId)=>{
        let res = await axios.post(`${devConfig.baseUrl}/like/create`, {userId:localStorage.getItem("userId"),musicId})
        if(res){
            toast.success("Music Saved In Like")
        }
    }


    return (
        <div className='mt-3'>
            <h1 className='text-lg font-semibold mb-3'>{title}</h1>
            {data?.map((i, index) => (
                i?.musicId && (
                <div onMouseLeave={() => { setShowIcons({ show: false, key: null }); }} onMouseEnter={() => { setShowIcons({ show: true, key: index }); }} key={index} className='w-[100%] min-w-full sm:h-[3rem] rounded-md hover:bg-[#262626] px-3 flex justify-between flex-wrap items-center mb-4 cursor-pointer'>
                    <div className='flex items-center gap-x-2 flex-1'>
                        <img src={i?.musicId?.coverImage} alt="" className='h-[2rem]' />
                        <div>
                            <h1 className='text-nowrap truncate'>{i?.musicId?.title}</h1>
                            <p className='text-sm text-nowrap truncate'>{i?.musicId?.description}</p>
                        </div>
                    </div>
                    <p className='flex-1 text-nowrap truncate sm:block hidden'>{i?.musicId?.listners} Listeners</p>
                    <p className='flex-1 text-nowrap truncate sm:block hidden'>
                        {durations[index] ? durations[index] : 'Loading...'}
                    </p>
                    {showIcons.show && showIcons.key === index && type !== "like" && (
                        <div className='flex items-center gap-x-3 justify-end'>
                            <img onClick={()=>saveMusic(i?.musicId._id)} src={Heart} alt="" className='h-[1rem]' />
                            <img src={Dots} alt="" className='h-[1rem]' />
                        </div>
                    )}
                    {type === "like" && (<FaHeart className='text-[#ff2e00] cursor-pointer' />)}
                </div>

                )
            ))}
        </div>
    );
};

export default HistoryListing;
