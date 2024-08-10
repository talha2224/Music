import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Upload from '../assets/upload.svg'
import History from '../assets/history.svg'
import Setting from '../assets/settings.svg'
import Privacy from '../assets/privacy.svg'
import Help from '../assets/about.svg'
import Logout from '../assets/logout.svg'
import Input from '../components/Input'
import SearchImage from '../assets/search.png'
import toggleOn from '../assets/toggleOn.png'
import toggleOff from '../assets/toggleOff.svg'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ currentState, setState,setshowNav }) => {
    const [isLogin] = useState(true)
    const [showPopup, setshowPopup] = useState(false)
    return (
        <div>
            <div className='flex justify-between items-center'>
                <GiHamburgerMenu className='cursor-pointer md:hidden block' onClick={()=>setshowNav(true)} />

                {
                    isLogin && (
                        <h1 className='text-base lg:text-xl font-semibold'>Welcome, John</h1>
                    )
                }

                <div className='bg-[#262626]  max-w-[18rem] max-lg:w-[25rem] h-[2.6rem] rounded-3xl hidden sm:flex items-center gap-x-5 px-3'>
                    <img src={SearchImage} alt="" className='h-[1rem]' />
                    <Input type={"text"} name={"search"} placeholder={"What do you want to listen to"} className={`flex-1 outline-none border-none bg-transparent placeholder:text-[#A1A1A1] text-[#A1A1A1] truncate`} />
                </div>
                {
                    !isLogin ? (
                        <button className='text-black bg-white rounded-3xl h-[2.3rem] w-[5rem] font-semibold'>Sign in</button>
                    ) :
                        (
                            <div className='bg-[#FF2E00] cursor-pointer rounded-full flex justify-center items-center w-[2rem] h-[2rem] relative'>
                                <p onClick={() => setshowPopup(!showPopup)} className='text-lg font-semibold'>J</p>
                                {
                                    showPopup && (
                                        <div className="absolute top-[3rem] right-[0.1rem] bg-[#1C1C1C] z-10 w-[14rem] p-3 rounded-md shadow-lg">
                                            <div className='flex items-center gap-x-2'>
                                                {/* 262626 */}
                                                <div className='bg-[#FF2E00] rounded-full flex justify-center items-center w-[2rem] h-[2rem] relative'>
                                                    <p className='font-semibold'>J</p>
                                                </div>
                                                <div>
                                                    <p>John Doe</p>
                                                    <p className='text-[#606060]'>john@gmail.com</p>
                                                </div>

                                            </div>
                                            <div className='w-[100%] mt-1 bg-[#606060] h-[0.1px]'></div>

                                            <Link to={"/dashboard/history"} className='flex items-center w-[100%] h-[2rem] px-3 rounded-md hover:bg-[#606060] cursor-pointer mt-2 gap-x-3'>
                                                <img src={Upload} alt="" />
                                                <p className='text-sm'>Upload Music</p>
                                            </Link>
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
        </div>
    )
}

export default Navbar
