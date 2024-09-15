import Suggest from '../../assets/suggest.png'
import React, { useEffect, useState, useRef } from 'react';
import { FaDownload, FaPen, FaPlay, FaPause, FaRandom, FaEllipsisH } from 'react-icons/fa'; // Importing icons from react-icons
import axios from 'axios';
import Navbar from '../../components/Navbar';
import HistoryListing from '../../components/listing/HistoryListing';
import devConfig from '../../config';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const PlaylistPage = ({ setshowNav }) => {
    const location = useLocation().pathname.split("/")[4];
    const [settingsPopup, setsettingsPopup] = useState(false);
    const [music, setMusic] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(music?.music));

    const getMusicData = async () => {
        let res = await axios.get(`${devConfig.baseUrl}/music/single/${location}`);
        setMusic(res?.data?.data);
    };

    useEffect(() => {
        getMusicData();
    }, []);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = music?.music;
        }
    }, [music]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Pause the music
        } else {
            audioRef.current.play(); // Play the music
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
    };


    const saveMusic = async(musicId)=>{
        console.log(musicId)
        let res = await axios.post(`${devConfig.baseUrl}/save/create`, {userId:localStorage.getItem("userId"),musicId})
        if(res){
            console.log(res)
            toast.success("Music Saved")
        }
    }

    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
            <Navbar currentState={settingsPopup} setState={setsettingsPopup} setshowNav={setshowNav} />

            <div className='flex justify-between items-center mb-[3rem] mt-5 flex-wrap md:flex-row flex-col'>
                <div className='mt-4'>
                    <img src={music?.coverImage} alt="" className='w-[21rem]' />
                    <div className='w-[20rem] flex justify-center items-center mt-5'>
                        {/* Icon buttons */}
                        <FaDownload onClick={()=>saveMusic(music?._id)} className='mx-2 text-white cursor-pointer' />
                        <FaPen className='mx-2 text-white cursor-pointer' />
                        <div onClick={togglePlayPause}
                            className='mx-2 text-white cursor-pointer bg-white rounded-full p-3'>
                            {isPlaying ? <FaPause className='text-black' /> : <FaPlay className='text-black' />}
                        </div>
                        <FaRandom className='mx-2 text-white cursor-pointer' />
                        <FaEllipsisH className='mx-2 text-white cursor-pointer' />
                    </div>
                </div>
                <div>
                    <img src={Suggest} alt="" className='mt-4' />
                </div>
            </div>

            <HistoryListing type={"like"} />
        </div>
    );
};

export default PlaylistPage;
