import React from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const PasswordPage = () => {
  const nav = useNavigate()
  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
      <div className='flex items-center gap-x-5 mb-[1.5rem]'>
        <img src={Logo} alt="" />
        <p>Music Plugg</p>
      </div>

      <h1 className='text-center mt-2 text-xl font-medium mb-[1rem]'>Create a password</h1>

      <Input type={"password1"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Create a password"}/>
      <Input type={"password"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"Confirm password"}/>
      <button onClick={()=>nav("/artist")} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Next</button>
      <p className='text-[#A1A1A1]  mt-4 cursor-pointer text-sm text-center'>By clicking sign up, you agree to our <span  className='text-[#FF2E00] underline'>Terms & <br /> Conditions </span> and <span className='text-[#FF2E00] underline'>Privacy Policy.</span></p>
      <p className='text-[#A1A1A1] w-[18rem] mt-4 cursor-pointer text-sm text-center'>Already have an account? <Link to={"/"} className='text-[#FF2E00] font-bold'>Login</Link></p>

    </div>
  )
}

export default PasswordPage
