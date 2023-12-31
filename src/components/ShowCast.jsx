import React from 'react'
import img1 from '../assets/group1.png';
import img2 from '../assets/Group 2.png';
import img3 from '../assets/Group 3.png';
import img4 from '../assets/Group 4.png';
import img5 from '../assets/Group.png';

function ShowCast() {
  return (
    <div className='bg-color-gray relative h-[85vh] tablet:h-screen w-full font-open-sans'>
      <img src={img1} className='absolute w-36 tablet:w-[200px] laptop:w-[350px] top-10 mt-10' alt="" />
      <img src={img4} alt="" className='absolute w-40 tablet:w-[250px] right-0 laptop:mr-56 rounded-lg top-10 mt-10' />
        <div className='w-full h-full flex justify-center items-center'>
          <h1 className='text-4xl text-center leading-snug tablet:text-6xl tablet:leading-normal laptop:text-8xl laptop:leading-snug laptop:font-extralight' >
            Complete <br/>
            Creative <br />
            Control
          </h1>
        </div>
        <img src={img2} className='absolute top-[300px] w-20 laptop:w-[300px] laptop:right-24 right-0' alt="" />
        <img src={img3} className='absolute top-[500px] w-36 laptop:w-[350px] laptop:top-[600px] right-0' alt="" />
        <img src={img5} className='absolute top-[300px] w-20 tablet:w-[200px] tablet:top-[400px] left-0 laptop:w-[300px] laptop:top-[450px]' alt="" />

        <div className='bg-color-gray px-6 py-10 laptop:pl-[400px]'>
          <p className='w-[200px] tablet:w-[500px] text-xs font-semibold leading-snug laptop:text-base'>
            Creativ is your space to create what excites you most, rough or polished, big or small. Hundreds of thousands of creators use Creativ to share videos, podcasts, writing, art, music, recipes and more with their most passionate fans.
          </p>
          <button className='bg-black text-white laptop:text-base laptop:px-6 laptop:py-2 text-xs py-1 px-2 rounded-xl mt-4'>Create your teams</button>
        </div>
    </div>
  )
}

export default ShowCast;