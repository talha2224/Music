import React from 'react'
import Input from '../../components/Input'
import {useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Card from '../../assets/card.svg'


const SubscriptionFormPage = () => {
    const nav = useNavigate()
    return (
        <div className='flex justify-center items-center w-screen h-screen flex-col bg-[#121212]'>
            <div className='flex items-center gap-x-5 mb-[1rem]'>
                <img src={Logo} alt="" />
                <p>Music Plugg</p>
            </div>


            <div className='flex items-center gap-x-4'>
                <h1 className='text-center mt-2 text-xl font-medium'>Credit Card</h1>
                <img src={Card} alt="" />
            </div>

            <Input type={"text"} name={"name"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Name On Card"} />
            <Input type={"text"} name={"email"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none `} placeholder={"Card Number"} />
            <Input type={"text"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"MM/YYYY"} />
            <Input type={"password"} name={"password"} className={`bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-3 border-none outline-none `} placeholder={"CVV"} />
            <div className='flex items-center gap-x-2 mt-4 w-[18rem]'>
                <Input type={"checkbox"} name={"password"} className={`bg-[#2626267A] `} placeholder={"CVV"} />
                <p className='text-[#ffff] text-sm'>Saved card details for later?</p>
            </div>

            <p className='text-[#ffff] text-sm mt-3'>Your payment are saved and stored securely</p>



            <button onClick={() => nav("/confirmation")} className='bg-white rounded-[2rem] w-[18rem] h-[2.5rem] text-black mt-4 font-bold'>Pay Now</button>



        </div>
    )
}

export default SubscriptionFormPage
