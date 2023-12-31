import React from 'react'
import insights from '../assets/Mobile_Insights_931320bfbd.png';

function TurnPassions() {
  return (
    <div className='bg-lightGray font-open-sans py-24 px-6 tablet:px-20  tablet:py-18 '>
        <div className='laptop:max-w-[1100px] mx-auto'>
            <div>
                <h1 className='text-5xl flex flex-col tablet:text-6xl laptop:text-8xl'>
                    <span>Turning passions into</span>
                    <span className='tablet:self-end'>Buinesses</span>
                </h1>
            </div>

            <div className='tablet:flex flex-row-reverse gap-4'>
                <div>
                    <div className='tablet:flex gap-4'>
                        <div>
                            <h4 className='font-semibold text-xl my-4 tablet:text-base laptop:text-lg'>More Ways to earn</h4>
                            <p className='text-sm tablet:text-xs laptop:leading-normal laptop:text-base'>
                                On Creativ, you can build a lasting business outside of the ad-based eco-system, with revenue streams ranging from membership for offering ongoing benefits, to online shops for selling individual videos, podcast episodes and more.
                            </p>
                        </div>

                        <div>
                            <h4 className='font-semibold text-xl my-4 tablet:text-base laptop:text-lg'>Unlock growth</h4>
                            <p className='text-sm tablet:text-xs laptop:leading-normal laptop:text-base'>
                                Creativ isn't just for creative growth, it's for professional growth too. Get in depth analytics about your fanbase, dig into powerful relationship management tools and tap into a growing creator community.
                            </p>
                            <button className='bg-black text-white px-6 py-2 rounded-lg my-4 text-sm font-semibold laptop:text-base'>Set up shop</button>
                        </div>
                    </div>
                </div>

                <div className='mt-4 tablet:-translate-y-12'>
                    <img src={insights} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TurnPassions