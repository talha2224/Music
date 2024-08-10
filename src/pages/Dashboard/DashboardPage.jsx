import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import { navLinks } from '../../constants/navigation';
import { AiOutlinePlus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import Input from '../../components/Input'


const DashboardPage = ({ setshowNav, showNav }) => {
    const [isLogin] = useState(true)
    const [showPopup, setshowPopup] = useState(false)
    const [currentView, setcurrentView] = useState("private")
    const currentPath = useLocation().pathname.split("/")[2]
    const nav = useNavigate()

    return (
        <div className='flex items-start w-screen h-screen overflow-auto bg-[#121212]'>

            {/* RIGHT SIDEBAR  */}
            <div style={{ borderRight: "0.01px solid #262626" }} className="hidden md:block min-w-[250px] h-[100vh] p-5 bg-gradient-to-b from-#262626 via-red-700 to-red-900">

                <div className="flex justify-start items-center gap-x-2 mt-5">
                    <img src={Logo} alt="" className='h-[1.5rem]' />
                    <h1 className='text-white font-bold text-lg'>Music Plugg</h1>
                </div>
                {/* LINKS  */}
                <div className="mt-[4rem]">
                    {
                        navLinks?.map((i) => (

                            <div key={i.id} className='flex items-center mb-5'>
                                {
                                    currentPath == i.name.toLocaleLowerCase() && (
                                        <div className='h-[1rem] bg-[#FF2E00] w-[5px] rounded-md'></div>
                                    )
                                }
                                <Link to={i.link} className={`${currentPath == i.name.toLocaleLowerCase() && "bg-[#262626]"} flex-1 h-[2.3rem] rounded-md flex justify-start items-center gap-x-4 cursor-pointer px-4`}>
                                    <img src={i.icon} alt="" className='h-[1rem]' />
                                    <p className='text-white'>{i.name}</p>
                                </Link>

                            </div>
                        ))
                    }
                </div>

                {/* BORDER  */}
                <div className='w-[100%] h-[1px] bg-[#262626]'></div>

                {/* BUTTON */}
                {
                    isLogin ?
                        <button onClick={() => setshowPopup(true)} className='w-[100%] h-[2.5rem] bg-[#FF2E00] text-white rounded-3xl mt-8 flex items-center gap-x-2 justify-center'><AiOutlinePlus className='text-white' /> Create playlist</button>
                        :
                        <button onClick={() => nav("/")} className='w-[100%] h-[2.5rem] bg-[#262626] text-white rounded-3xl mt-8'>Sign in</button>

                }

            </div>

            {
                showNav && (
                    <div style={{ borderRight: "0.01px solid #262626" }} className="fixed top-0 left-0 block md:hidden min-w-[250px] h-[100vh] p-5 bg-[#000000] z-50 ">

                        <div className="flex justify-between items-center gap-x-2 mt-5">
                            <div className='flex justify-start items-center gap-x-2'>
                                <img src={Logo} alt="" className='h-[1.5rem]' />
                                <h1 className='text-white font-bold text-lg'>Music Plugg</h1>
                            </div>
                            <ImCross onClick={()=>setshowNav(false)} />
                        </div>
                        {/* LINKS  */}
                        <div className="mt-[4rem]">
                            {
                                navLinks?.map((i) => (

                                    <div key={i.id} className='flex items-center mb-5'>
                                        {
                                            currentPath == i.name.toLocaleLowerCase() && (
                                                <div className='h-[1rem] bg-[#FF2E00] w-[5px] rounded-md'></div>
                                            )
                                        }
                                        <Link to={i.link} className={`${currentPath == i.name.toLocaleLowerCase() && "bg-[#262626]"} flex-1 h-[2.3rem] rounded-md flex justify-start items-center gap-x-4 cursor-pointer px-4`}>
                                            <img src={i.icon} alt="" className='h-[1rem]' />
                                            <p className='text-white'>{i.name}</p>
                                        </Link>

                                    </div>
                                ))
                            }
                        </div>

                        {/* BORDER  */}
                        <div className='w-[100%] h-[1px] bg-[#262626]'></div>

                        {/* BUTTON */}
                        {
                            isLogin ?
                                <button onClick={() => setshowPopup(true)} className='w-[100%] h-[2.5rem] bg-[#FF2E00] text-white rounded-3xl mt-8 flex items-center gap-x-2 justify-center'><AiOutlinePlus className='text-white' /> Create playlist</button>
                                :
                                <button onClick={() => nav("/")} className='w-[100%] h-[2.5rem] bg-[#262626] text-white rounded-3xl mt-8'>Sign in</button>

                        }

                    </div>

                )
            }


            {/* LEFT BAR  */}
            <div className='flex-1 h-[100vh] overflow-hidden'>
                <Outlet />
            </div>


            {
                showPopup && (
                    <div className='z-50 fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'>

                        <div className='bg-[#121212] w-[80%] md:w-[50%] lg:w-[25%]   p-6 rounded-md'>

                            <div className="flex justify-between items-center">
                                <h1 className='text-lg font-semibold'>Create Playlist</h1>
                                <ImCross onClick={() => { setshowPopup(false) }} className='text-white cursor-pointer' />
                            </div>

                            <Input type={"text"} name={"name"} className={`bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Title"} />
                            <Input type={"text"} name={"name"} className={`bg-[#262626] w-[100%] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Description"} />
                            <div className="flex items-center gap-x-3 mt-5 mb-3">
                                <button onClick={() => setcurrentView("private")} className={`px-3 py-1 rounded-3xl  text-sm ${currentView !== "private" ? "bg-[#262626]" : "bg-[#fff] text-black "}`}>Private</button>
                                <button onClick={() => setcurrentView("public")} className={`px-3 py-1 rounded-3xl text-sm  ${currentView !== "public" ? "bg-[#262626]" : "bg-[#fff] text-black"}`}>Public</button>
                            </div>

                            <button onClick={() => {setshowPopup(false);nav("/dashboard/playlist")}} className='bg-white rounded-[2rem] w-[100%] h-[2.5rem] text-black mt-0 font-bold'>Create</button>
                            <button onClick={() => setshowPopup(false)} className='bg-[#262626] rounded-[2rem] w-[100%] h-[2.5rem] text-white mt-2 font-bold'>Cancel</button>




                        </div>

                    </div>
                )
            }


        </div>
    )
}

export default DashboardPage
