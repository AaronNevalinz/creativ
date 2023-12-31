import React from 'react'
import Amanda from '../assets/amanda Sandas.jpg'
function CreatorWord() {
  return (
    <div className='relative w-full h-screen'>
        <div className='absolute top-0 w-full h-full'>
            <img className='w-full h-full object-cover' src={Amanda} alt="" />
        </div>
        <div className='absolute h-full w-full top-0 left-0 bg-half-transparent'/>

        <div className='absolute bottom-10 text-white font-open-sans px-6 text-2xl font-medium w-full tablet:px-16'>
            <p className='tablet:max-w-[769px] tablet:text-4xl tablet:tracking-wider tablet:leading-normal tablet:text-white'>"My Creativ Community has created the space for me to build a brand with my own ideas as the north star."</p>

            <p className='mt-8 text-right tablet:text-4xl tablet:tracking-wider tablet:text-white'>Amanda Seales</p>
        </div>
    </div>
  )
}

export default CreatorWord;