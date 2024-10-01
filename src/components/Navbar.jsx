import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import devConfig from '../config';
import toast from 'react-hot-toast';
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Upload from '../assets/upload.svg'
import History from '../assets/history.svg'
import Setting from '../assets/settings.svg'
import Privacy from '../assets/privacy.svg'
import Help from '../assets/about.svg'
import Logout from '../assets/logout.svg'
import SearchImage from '../assets/search.png'
import toggleOn from '../assets/toggleOn.png'
import toggleOff from '../assets/toggleOff.svg'

const Navbar = ({ currentState, setState, setshowNav }) => {
    const [isLogin] = useState(true);
    const [showPopup, setshowPopup] = useState(false);
    const [uploadMusicPopup, setuploadMusicPopup] = useState(false);
    const [uploadArtistPopup, setuploadArtistPopup] = useState(false);
    const [data, setData] = useState({ name: "", email: "" });
    const [musicData, setMusicData] = useState({ title: "", description: "", artist: "", category: "", listners: 90, image: "", song: "" });
    const [categories, setCategories] = useState([]);
    const [artist, setArtist] = useState([]);
    const [artistData, setArtistData] = useState({ name: "", image: "" });

    const getUserData = async () => {
        let res = await axios.get(`${devConfig.baseUrl}/account/single/${localStorage.getItem("userId")}`);
        setData({ name: res?.data?.data?.name, email: res?.data?.data?.email });
    };
    const getCategoriesData = async () => {
        let res = await axios.get(`${devConfig.baseUrl}/category/all`);
        setCategories(res?.data?.data);
    };
    const getArtistData = async () => {
        let res = await axios.get(`${devConfig.baseUrl}/prefference/all`);
        setArtist(res?.data?.data);
    };
    useEffect(() => {
        getUserData();
        getCategoriesData();
        getArtistData();
    }, []);

    const onChangeInput = (e) => {
        setMusicData({ ...musicData, [e.target.name]: e.target.value });
    };

    const onChangeArtistInput = (e) => {
        setArtistData({ ...artistData, [e.target.name]: e.target.value });
    };


    const onFileChange = (e) => {
        setMusicData({ ...musicData, [e.target.name]: e.target.files[0] });
    };

    const onArtistChange = (e) => {
        setArtistData({ ...artistData, [e.target.name]: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(musicData, 'musicData')
        let loader = toast.loading("Upload Music")
        if (musicData?.title.length === 0 || musicData?.description.length === 0 || musicData?.artist.length === 0 || musicData?.category.length === 0) {
            toast.error("All Fields Are Required");
            toast.dismiss(loader)
        }
        else {
            try {
                let formData = new FormData();
                formData.append("title", musicData.title);
                formData.append("description", musicData.description);
                formData.append("artist", musicData.artist);
                formData.append("category", musicData.category);
                formData.append("listners", musicData.listners);
                formData.append("image", musicData.image);
                formData.append("song", musicData.song);
                let res = await axios.post(`${devConfig.baseUrl}/music/create`, formData);
                if (res) {
                    toast.dismiss(loader)
                    toast.success("Music Created");
                    setuploadMusicPopup(false);
                }
            }
            catch (error) {
                console.log(error);
                toast.dismiss(loader)

            }
        }
    };

    const handleCreateArtist= async (e) => {
        e.preventDefault();
        let loader = toast.loading("Creating Artist")
        if (artistData?.name.length === 0) {
            toast.error("All Fields Are Required");
            toast.dismiss(loader)
        }
        else {
            try {
                let formData = new FormData();
                formData.append("name", artistData.name);
                formData.append("image", artistData.image);
                let res = await axios.post(`${devConfig.baseUrl}/prefference/create`, formData);
                if (res) {
                    toast.dismiss(loader)
                    toast.success("Artist Created");
                    setuploadArtistPopup(false);
                }
            }
            catch (error) {
                console.log(error);
                toast.dismiss(loader)

            }
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <GiHamburgerMenu className='cursor-pointer md:hidden block' onClick={() => setshowNav(true)} />

                {
                    isLogin && (
                        <h1 className='text-base lg:text-xl font-semibold'>Welcome, {data?.name}</h1>
                    )
                }

                <div className='bg-[#262626] min-w-fit lg:min-w-[30rem]   h-[2.6rem] rounded-3xl hidden sm:flex items-center gap-x-5 px-3'>
                    <img src={SearchImage} alt="" className='h-[1rem]' />
                    <Input type={"text"} name={"search"} placeholder={"What do you want to listen to"} className={`flex-1 outline-none border-none bg-transparent placeholder:text-[#A1A1A1] text-[#A1A1A1] truncate`} />
                </div>
                {
                    !localStorage.getItem("userId") ? (
                        <button className='text-black bg-white rounded-3xl h-[2.3rem] w-[5rem] font-semibold'>Sign in</button>
                    ) :
                        (
                            <div className='bg-[#FF2E00] cursor-pointer rounded-full flex justify-center items-center w-[2rem] h-[2rem] relative'>
                                <p onClick={() => setshowPopup(!showPopup)} className='text-lg font-semibold'>{data?.name[0]}</p>
                                {
                                    showPopup && (
                                        <div className="absolute top-[3rem] right-[0.1rem] bg-[#1C1C1C] z-10 w-[14rem] p-3 rounded-md shadow-lg">
                                            <div className='flex items-center gap-x-2'>
                                                {/* 262626 */}
                                                <div className='bg-[#FF2E00] rounded-full flex justify-center items-center w-[2rem] h-[2rem] relative'>
                                                    <p className='font-semibold'>{data?.name[0]}</p>
                                                </div>
                                                <div>
                                                    <p>{data?.name}</p>
                                                    <p className='text-[#606060]'>{data?.email}</p>
                                                </div>

                                            </div>
                                            <div className='w-[100%] mt-1 bg-[#606060] h-[0.1px]'></div>

                                            <div onClick={() => setuploadMusicPopup(true)} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Upload} alt="" />
                                                <p className='text-sm'>Upload Music</p>
                                            </div>
                                            <div onClick={() => setuploadArtistPopup(true)} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Upload} alt="" />
                                                <p className='text-sm'>Create Artist</p>
                                            </div>
                                            <Link to={"/dashboard/history"} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={History} alt="" />
                                                <p className='text-sm'>History</p>
                                            </Link>
                                            <div onClick={() => setState(true)} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Setting} alt="" />
                                                <p className='text-sm'>Settings</p>
                                            </div>
                                            <Link to={"/dashboard/history"} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Privacy} alt="" />
                                                <p className='text-sm'>Term & privacy policy</p>
                                            </Link>
                                            <Link to={"/dashboard/history"} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Help} alt="" />
                                                <p className='text-sm'>Help</p>
                                            </Link>
                                            <Link to={"/"} className='flex items-center w-[100%] h-[2rem] border px-3 rounded-md border-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Logout} alt="" />
                                                <p className='text-sm'>Logout</p>
                                            </Link>
                                        </div>

                                    )
                                }

                            </div>
                        )
                }

            </div>

            <div className='bg-[#262626]  w-[100%] h-[2.6rem] rounded-3xl flex sm:hidden items-center gap-x-5 px-3 mt-4'>
                <img src={SearchImage} alt="" className='h-[1rem]' />
                <Input type={"text"} name={"search"} placeholder={"What do you want to listen to"} className={`flex-1 outline-none border-none bg-transparent placeholder:text-[#A1A1A1] text-[#A1A1A1] truncate`} />
            </div>

            {
                currentState && (
                    <div className='z-50 fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'>

                        <div className='bg-[#121212] w-[90%] md:w-[60%] md:h-fit h-[50vh] overflow-y-auto   p-6 rounded-md'>

                            <div className="flex justify-between items-center">
                                <h1 className='text-lg font-semibold'>Settings</h1>
                                <ImCross onClick={() => { setState(false) }} className='text-white cursor-pointer' />
                            </div>

                            <div className='sm:flex items-start gap-x-4 mt-5'>


                                <div className='flex-1 md:border-r border-[#262626] pr-1'>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>General</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>Playback</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>Downloads</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>Theme</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>Privacy</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>Language & location</p>
                                    <p className='hover:bg-[#262626] px-2 py-1 rounded-md cursor-pointer mb-2'>About</p>
                                </div>



                                <div className='md:w-[70%]'>
                                    <div className='w-[100%]  p-3 rounded-md border border-[#262626]'>
                                        <div className='flex justify-between items-center'>
                                            <h1>Restrictions Mode</h1>
                                            <img src={toggleOn} alt="" className='h-[1rem] cursor-pointer' />
                                        </div>
                                        <p className='text-sm text-[#A1A1A1] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat adipisci autem unde dolore, quos, mollitia ab assumenda excepturi perspiciatis.</p>

                                    </div>

                                    <div className='w-[100%]  p-3 rounded-md border border-[#262626] mt-4'>
                                        <div className='flex justify-between items-center'>
                                            <h1>Rememmber most recently used playlist</h1>
                                            <img src={toggleOff} alt="" className='h-[1rem] cursor-pointer' />
                                        </div>
                                        <p className='text-sm text-[#A1A1A1] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat adipisci autem unde dolore, quos, mollitia ab assumenda excepturi perspiciatis.</p>

                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>
                )
            }



            {uploadMusicPopup && (
                <div className='z-50 fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='bg-[#121212] w-[90%] md:w-[40%] md:h-fit h-[50vh] overflow-y-auto p-6 rounded-md'>
                        <div className="flex justify-between items-center">
                            <h1 className='text-lg font-semibold'>Upload Music</h1>
                            <ImCross onClick={() => setuploadMusicPopup(false)} className='text-white cursor-pointer' />
                        </div>

                        <form onSubmit={handleSubmit} className="mt-5">
                            <input type="text" name="title" placeholder="Title" value={musicData.title} onChange={onChangeInput} className="bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none " />
                            <input type="text" name="description" placeholder="Description" value={musicData.description} onChange={onChangeInput} className="bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none " />

                            <select name="artist" value={musicData.artist} onChange={onChangeInput} className="bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none ">
                                <option value="">Select Artist</option>
                                {artist.map((a) => (
                                    <option key={a._id} value={a._id}>{a.name}</option>
                                ))}
                            </select>

                            <select name="category" value={musicData.category} onChange={onChangeInput} className="bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none ">
                                <option value="">Select Category</option>
                                {categories.map((c) => (
                                    <option key={c._id} value={c._id}>{c.title}</option>
                                ))}
                            </select>
                            <p className='mt-3 mb-1'>Upload Music Cover Image</p>
                            <input type="file" name="image" accept="image/*" onChange={onFileChange} className="block " />
                            <p className='mt-3 mb-1'>Upload Music Audio</p>
                            <input type="file" name="song" accept="audio/*" onChange={onFileChange} className="block " />

                            <button onClick={handleSubmit} className='bg-white rounded-[2rem] w-[100%] h-[2.5rem] text-black mt-3 font-bold'>Upload Music</button>
                            <button onClick={() => setuploadMusicPopup(false)} className='bg-[#262626] rounded-[2rem] w-[100%] h-[2.5rem] text-white mt-2 font-bold'>Cancel</button>                        </form>
                    </div>
                </div>
            )}


            {uploadArtistPopup && (
                <div className='z-50 fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='bg-[#121212] w-[90%] md:w-[40%] md:h-fit h-[50vh] overflow-y-auto p-6 rounded-md'>
                        <div className="flex justify-between items-center">
                            <h1 className='text-lg font-semibold'>Create Artist</h1>
                            <ImCross onClick={() => setuploadArtistPopup(false)} className='text-white cursor-pointer' />
                        </div>

                        <form onSubmit={handleCreateArtist} className="mt-5">
                            <input type="text" name="name" placeholder="Artist Name" value={artistData.name} onChange={(e)=>onChangeArtistInput(e)} className="bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none " />


                            <p className='mt-3 mb-1'>Upload Artist Image</p>
                            <input type="file" name="image" accept="image/*" onChange={(e)=>onArtistChange(e)} className="block " />
                            <button onClick={handleCreateArtist} className='bg-white rounded-[2rem] w-[100%] h-[2.5rem] text-black mt-3 font-bold'>Create Artist</button>
                            <button onClick={() => setuploadArtistPopup(false)} className='bg-[#262626] rounded-[2rem] w-[100%] h-[2.5rem] text-white mt-2 font-bold'>Cancel</button>                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
