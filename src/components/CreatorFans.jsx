import React from 'react'
import vid from '../assets/1_Chelsea_1161fe215b.mp4';

function CreatorFans() {
  return (
    <div className='bg-color-primary font-open-sans mt-[252px] laptop:mt-[232px] tablet:mt-[170px] flex flex-col px-6 gap-4 pt-10 tablet:flex-row py-10 tablet:py-24'>
        <div className='flex-1 tablet:flex flex-col items-center'>
            <h1 className='text-5xl leading-snug mb-4 tablet:text-6xl laptop:text-7xl'>
              <span>Creators.Fans.</span> <br /> 
              <span>Nothing in</span><br />
              <span>between.</span>
            </h1>
            <div className='tablet:-translate-y-3 tablet:translate-x-24 tablet:max-w-96'>
              <p className='text-sm mb-4'>Creativ gives you a direct line of access to your fan community, with no ads or algorithms in the way.</p>
              <p className='text-sm'>
                  Through real-time group chats, comments, DMs and even directly over email, you can connect more deeply and directly with your community here than anywhere else.
              </p>
              <button className='bg-black text-white px-4 py-2 rounded-lg mt-4'>Build real community</button>
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <video src={vid} className='rounded-lg tablet:w-[20rem]' loop muted></video>
        </div>
    </div>
  )
}

export default CreatorFans;