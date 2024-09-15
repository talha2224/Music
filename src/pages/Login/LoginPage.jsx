import React, { useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import toast from 'react-hot-toast'
import axios from 'axios'
import devConfig from '../../config'

const LoginPage = () => {
  const nav = useNavigate()
  const [data, setData] = useState({ email: "", password: "" })

  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data?.email.length === 0 || data?.password.length === 0) {
      toast.error("All Fields Are Required")
    }
    else {
      try {
        let res = await axios.post(`${devConfig.baseUrl}/account/login`, data)
        if (res) {
          console.log(res?.data?.data?._id,'res?.data?.data?._id')
          localStorage.setItem("userId", res?.data?.data?._id)
          toast.success("Account Login")
          nav("/dashboard/home")

        }
      }
      catch (error) {
        console.log(error)
        if (error.status == 403) {
          toast.error("Invalid Credentials")
        }
        else if (error.status == 404) {
          toast.error("User Not Found")
        }
      }
    }
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
      <div className='flex items-center gap-x-5 mb-[3rem]'>
        <img src={Logo} alt="" />
        <p>Music Plugg</p>
      </div>

      <h1 className='text-center mt-2 text-xl font-medium mb-[1rem]'>Sign in to continue to Music <br /> Plugg</h1>

      <Input onChangeFunc={(e) => onChangeInput(e)} type={"text"} name={"email"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Enter your email"} />
      <Input onChangeFunc={(e) => onChangeInput(e)} type={"password"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"Enter your password"} />
      <p className='text-[#A1A1A1] w-[18rem] text-end mt-3 cursor-pointer text-sm'>Forgot password?</p>
      <button onClick={handleSubmit} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Sign in</button>
      <p onClick={()=>nav("/register")} className='text-[#A1A1A1] w-[18rem] mt-4 cursor-pointer text-sm text-center'>Don't have an account? <Link to={"/register"} className='text-[#FF2E00] font-bold'>Sign up</Link></p>

    </div>
  )
}

export default LoginPage
