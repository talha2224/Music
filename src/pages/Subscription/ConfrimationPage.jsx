import React from 'react'
import Confrim from '../../assets/confrim.svg'
import { useNavigate } from 'react-router-dom'
const ConfrimationPage = () => {

    const nav = useNavigate()

  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
        <img src={Confrim} alt="" />
        <h1 className='mt-4 text-xl font-semibold mb-3'>Payment sucessfull</h1>
        <p className='mt-3 text-sm text-[#A1A1A1] w-[18rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus accusantium ratione ex incidunt voluptatem officia nulla aliquid illo provident a.</p>
        <button onClick={() => nav("/dashboard/home")} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Continue</button>

    </div>
  )
}

export default ConfrimationPage
