import React from 'react'
import gym from '../assets/gym_bad.jpg';
import apple from '../assets/apple_app_store_button_white_en_GB_9ff8efc2dc.png';
import google from '../assets/google_app_store_button_white_en_GB_422f51bc0b.png';
import waterMarkLogo from '../assets/logomark-animated.webp'

function Imagery() {
  return (
    <div className='relative h-screen w-full font-open-sans'>
        <div className=''>
            <img src={gym} className='w-full h-full absolute object-cover' alt="" />
        </div>
        <div className='bg-half-transparent absolute top-0 left-0 w-full h-full'/>

        <div className='w-full h-full absolute flex items-center justify-center'>
            <div className='bg-white text-center py-16 px-8 laptop:px-12 rounded-2xl'>
                <div className='flex items-center justify-center'>
                    <img src={waterMarkLogo} alt="" className='w-24' />
                </div>

                <h4 className='text-2xl font-semibold my-6'>Your World to Create</h4>
                <button className='bg-black text-white text-xl px-10 rounded-xl py-2'>Get Started</button>
                <p className='mt-6'>
                    <span className='text-[#333]'>Already have an account? </span>
                    <span className='underline cursor-pointer'>Log in</span>
                </p>

                <div className='flex justify-between mt-4'>
                    <img src={apple}  className='w-28 cursor-pointer' alt="" />
                    <img src={google} className='w-28 cursor-pointer' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagery;