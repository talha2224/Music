import React from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Fb from '../../assets/fb.png'
import Insta from '../../assets/insta.png'
import Twitter from '../../assets/twitter.png'
import Icloud from '../../assets/icloud.png'
import Tktiok from '../../assets/tiktok.png'
import Youtube from '../../assets/youtube.png'
import { useState } from 'react'
import devConfig from '../../config'
import toast from 'react-hot-toast'
import axios from 'axios'
const RegisterPage = () => {
  const nav = useNavigate()
  const [data, setData] = useState({ name: "", email: "", password: "" })

  const onChangeInput = (e) => {
    console.log(e.target.name, 'e.target.name')
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data?.name.length === 0 || data?.email.length === 0 || data?.password.length === 0) {
      toast.error("All Fields Are Required")
    }
    else {
      try {
        let res = await axios.post(`${devConfig.baseUrl}/account/register`, data)
        console.log(res, 'res of register')
        if (res) {
          localStorage.setItem("userId", res?.data?.data?._id)
          toast.success("Account Created")
          nav("/dashboard/home")

        }
      }
      catch (error) {
        console.log(error)
        if (error.status == 403) {
          toast.error("Email Exits")
        }
      }
    }
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
      <div className='flex items-center gap-x-5 mb-[1rem]'>
        <img src={Logo} alt="" />
        <p>Music Plugg</p>
      </div>

      <h1 className='text-center mt-2 text-xl font-medium'>Join us and start your <br /> musical journey.</h1>

      <Input onChangeFunc={(e) => onChangeInput(e)} type={"text"} name={"name"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Enter your name"} />
      <Input onChangeFunc={(e) => onChangeInput(e)} type={"text"} name={"email"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Enter your email"} />
      <Input onChangeFunc={(e) => onChangeInput(e)} type={"password"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"Enter your password"} />
      <button onClick={handleSubmit} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Next</button>
      <div className='flex justify-between items-center w-[18rem] mt-4'>
        <div className='w-[7rem] h-[1px] bg-[#4B4B4B]'></div>
        <div className=' text-[#4B4B4B]'>Or</div>
        <div className='w-[7rem] h-[1px] bg-[#4B4B4B]'></div>
      </div>

      <div className='flex justify-center items-center gap-x-4 mt-4'>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Fb} alt="" />
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Insta} alt="" />
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Twitter} alt="" />
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Youtube} alt="" />
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Icloud} alt="" />
        </div>
        <div className='w-[2rem] h-[2rem] rounded-[8px] flex justify-center items-center cursor-pointer bg-[#1B1B1B]'>
          <img src={Tktiok} alt="" />
        </div>
      </div>
      <p className='text-[#A1A1A1] w-[18rem] mt-4 cursor-pointer text-sm text-center'>Already have an account? <Link to={"/"} className='text-[#FF2E00] font-bold'>Login</Link></p>

    </div>
  )
}

export default RegisterPage
