import React from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
const LoginPage = () => {
  const nav = useNavigate()
  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
      <div className='flex items-center gap-x-5 mb-[3rem]'>
        <img src={Logo} alt="" />
        <p>Music Plugg</p>
      </div>

      <h1 className='text-center mt-2 text-xl font-medium mb-[1rem]'>Sign in to continue to Music <br /> Plugg</h1>

      <Input type={"text"} name={"email"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Enter your email"}/>
      <Input type={"password"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"Enter your password"}/>
      <p className='text-[#A1A1A1] w-[18rem] text-end mt-3 cursor-pointer text-sm'>Forgot password?</p>
      <button onClick={()=>nav("/dashboard/home")} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Sign in</button>
      <p className='text-[#A1A1A1] w-[18rem] mt-4 cursor-pointer text-sm text-center'>Don't have an account? <Link to={"/register"} className='text-[#FF2E00] font-bold'>Sign up</Link></p>

    </div>
  )
}

export default LoginPage
