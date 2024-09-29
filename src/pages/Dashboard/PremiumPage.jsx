import axios from 'axios'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import devConfig from '../../config'
import { loadStripe } from "@stripe/stripe-js";
import toast from 'react-hot-toast';

const public_stripe_key = devConfig.stripePublishKey;

const PremiumPage = ({ setshowNav }) => {


    const handleSubscription = async () => {
        try {
            const stripe = await loadStripe(public_stripe_key);
            let response = await axios.post(`${devConfig.baseUrl}/account/subscribe`, { id: localStorage.getItem("userId") });
            console.log(response, 'response');

            if (response.status === 409 && response.data.msg) {
                toast.error(response.data.msg)
            }
            else if (response.status === 200 && response.data.id) {
                await stripe.redirectToCheckout({ sessionId: response.data.id });
            }
        }
        catch (error) {
            console.log(error);
            if(error.status==409){
                toast.error(error.response.data.msg)
            }
        }
    };


    return (
        <div className='h-[100vh] overflow-y-auto py-10 pl-6 pr-2'>
            <GiHamburgerMenu onClick={() => setshowNav(true)} className='md:hidden block' />
            {/* SEARCH BAR  */}
            <div className='flex justify-end items-center'>
                <button className='text-black bg-white rounded-3xl h-[2.3rem] w-[5rem] font-semibold'>Sign in</button>
            </div>


            <h1 className='text-3xl text-white font-semibold'>Try Music Plugg Premium</h1>
            <h1 className='text-lg text-white  mt-2'>1 month free trial $30 per month</h1>
            <p className='text-[#A1A1A1] w-[100%] md:w-[40%] text-wrap text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis! Rerum obcaecati corporis sequi, </p>

            <button className='bg-[#262626] text-white rounded-3xl w-[13rem] h-[2.6rem] mt-4'>Try For Free</button>


            <div className='flex justify-start items-center gap-x-4 mt-10 flex-wrap'>
                <div className='w-[100%] sm:min-w-[20rem] md:max-w-[20rem] p-2 h-[13rem] bg-[#1F70F0] rounded-xl text-white mb-4'>
                    <div className='flex justify-between items-center mt-4'>
                        <h1>Premium</h1>
                        <p>$80 per month</p>
                    </div>
                    <div className='bg-white w-[100%] h-[0.1px] mt-2 mb-2'></div>
                    <p className='text-center text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.tium est! Error ad fuga quisquam natus ipsa odio?</p>
                    <button onClick={() => handleSubscription()} className='w-[100%] h-[2.5rem] bg-white text-black rounded-2xl mt-6 font-bold'>Go premium</button>
                </div>
                <div className='w-[100%] sm:min-w-[20rem] md:max-w-[20rem] p-2 h-[13rem] bg-[#FE3C30] rounded-xl text-white mb-4'>
                    <div className='flex justify-between items-center mt-4'>
                        <h1>Premium</h1>
                        <p>$80 per month</p>
                    </div>
                    <div className='bg-white w-[100%] h-[0.1px] mt-2 mb-2'></div>
                    <p className='text-center text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.tium est! Error ad fuga quisquam natus ipsa odio?</p>
                    <button  onClick={() => handleSubscription()} className='w-[100%] h-[2.5rem] bg-white text-black rounded-2xl mt-6 font-bold'>Go premium</button>
                </div>
                <div className='w-[100%] sm:min-w-[20rem] md:max-w-[20rem] p-2 h-[13rem] bg-[#4CD964] rounded-xl text-white mb-4'>
                    <div className='flex justify-between items-center mt-4'>
                        <h1>Premium</h1>
                        <p>$80 per month</p>
                    </div>
                    <div className='bg-white w-[100%] h-[0.1px] mt-2 mb-2'></div>
                    <p className='text-center text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.tium est! Error ad fuga quisquam natus ipsa odio?</p>
                    <button  onClick={() => handleSubscription()} className='w-[100%] h-[2.5rem] bg-white text-black rounded-2xl mt-6 font-bold'>Go premium</button>
                </div>
            </div>


        </div>
    )
}

export default PremiumPage
