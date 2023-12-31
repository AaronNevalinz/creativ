import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import image1 from '../assets/image1.jpg';
import appStore from '../assets/available-on-the-app-store-1.svg';
import playStore from '../assets/Google_Play-Badge-Logo.wine.svg';
import { useState, useEffect } from "react";
import {motion} from 'framer-motion';


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [dropdownStates, setDropdownStates] = useState({
        link1:false,
        link2:false,
        link4:false,
        link3:false
    });
    const [bgWhite, setBgWhite] = useState(false)

    const handleHover = (link)=>{
        setDropdownStates((prev)=>({
            ...prev,
            [link]: true,
        }));
    }
    const handleLeave = (link)=>{
        setDropdownStates((prev)=>({
            ...prev,
            [link]:false
        }));
    }

    const handleScroll = ()=>{
        const offset = window.scrollY;
        setScrolled(offset > 20);
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    

  return (
    <div className="relative h-screen w-full font-open-sans">
        <div
            className="absolute top-0 left-0 h-full w-full z-0"
        >
            <img src={image1} alt="" className="h-full object-cover w-full"/>
        </div>
        <div className='absolute top-0 left-0 h-full w-full bg-half-transparent'/>
        {/* mobile navigation menu */}
        <nav className={`fixed w-full top-0 py-2 ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'} nav tablet:hidden`} >
            <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-2 mobile:gap-4">
                    <HiOutlineMenuAlt4 onClick={()=>setToggleMenu(true)} size={32} className={`${scrolled?`text-black`:`text-white`} cursor-pointer`}/>
                    <svg className={`w-8 mobile:w-12 ${scrolled ? 'fill-black': 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 42"><path fill="" d="M36.975 12.392c0 .312.021.627-.004.937-.03.361-.082.722-.149 1.08a22.535 22.535 0 0 1-.331 1.512 8.59 8.59 0 0 1-.359 1.084c-.313.767-.66 1.518-1.117 2.21-.282.427-.57.849-.864 1.266a4.12 4.12 0 0 1-.37.431c-.225.238-.442.483-.686.695a13.5 13.5 0 0 1-1.123.905c-.356.25-.756.431-1.12.674-.404.268-.866.384-1.296.587-.384.18-.795.24-1.186.38-.498.18-1.021.222-1.531.331-.544.117-1.097.203-1.643.315-.449.09-.894.198-1.34.298-.254.056-.51.098-.756.173-.304.093-.6.214-.896.324-.201.072-.412.126-.604.219-.28.14-.544.315-.823.464-.457.242-.838.585-1.184.96-.292.32-.546.681-.8 1.036-.418.587-.706 1.244-.964 1.916-.254.657-.487 1.322-.725 1.986-.221.625-.43 1.252-.655 1.875a63.989 63.989 0 0 1-.618 1.615 13.447 13.447 0 0 1-1.12 2.215c-.331.531-.685 1.049-1.142 1.478-.366.343-.72.704-1.17.944-.446.24-.906.448-1.4.557a6.635 6.635 0 0 1-1.807.129c-.229-.012-.455-.075-.684-.117-.137-.026-.276-.047-.409-.089-.112-.035-.215-.097-.322-.151-.302-.147-.624-.264-.9-.448a8.802 8.802 0 0 1-.96-.776c-.554-.492-.97-1.103-1.342-1.74a13.04 13.04 0 0 1-.681-1.319c-.192-.436-.336-.893-.492-1.345a24.916 24.916 0 0 1-.34-1.063c-.092-.317-.165-.641-.243-.963-.073-.298-.15-.594-.212-.895-.112-.536-.215-1.073-.32-1.609a35.827 35.827 0 0 1-.133-.68c-.06-.34-.114-.681-.171-1.022-.044-.254-.092-.506-.13-.76-.044-.28-.08-.56-.124-.839-.036-.242-.078-.483-.112-.725-.032-.226-.06-.452-.089-.678a70.008 70.008 0 0 1-.094-.73c-.03-.236-.055-.471-.082-.707l-.096-.818c-.011-.098-.023-.193-.03-.291-.034-.401-.068-.804-.1-1.208a20.67 20.67 0 0 1-.05-.75c-.021-.39-.042-.777-.05-1.166A94.453 94.453 0 0 1 1 18.18c0-.378.002-.755.027-1.13.026-.392.08-.784.122-1.176.034-.312.064-.622.105-.934.023-.175.064-.348.1-.52.092-.432.176-.863.281-1.292.076-.31.181-.61.266-.916.157-.571.393-1.11.624-1.653.105-.25.235-.49.367-.725.186-.329.366-.66.576-.97.259-.378.533-.744.823-1.098a12.9 12.9 0 0 1 .873-.965c.24-.24.512-.448.77-.665.254-.212.501-.433.77-.624.412-.296.835-.576 1.263-.849.249-.158.514-.294.774-.434.405-.219.81-.44 1.22-.648.26-.13.527-.244.794-.354.683-.277 1.364-.557 2.055-.816.46-.17.932-.303 1.399-.452.24-.077.475-.161.717-.229.2-.056.402-.086.604-.133.22-.05.434-.119.656-.16.299-.059.603-.1.907-.147.34-.052.679-.105 1.02-.152.139-.019.283-.02.425-.03.47-.026.944-.054 1.414-.077.188-.01.382-.051.565-.019.443.08.889.017 1.332.05.428.03.853.076 1.278.127.306.038.608.103.914.15.268.04.535.065.802.107.215.035.43.081.645.128.46.103.919.196 1.374.317.404.11.797.275 1.204.37.469.113.899.332 1.351.479.462.149.86.424 1.3.608.515.217.96.546 1.418.858.347.238.685.492 1 .77.467.41.92.836 1.356 1.28.258.26.478.564.713.85.38.464.658.993.928 1.523.215.424.393.874.537 1.329.12.373.156.774.245 1.156.098.42.096.844.073 1.27l-.012.008z"></path></svg>
                </div>
                <div className="flex items-center gap-3 mobile:gap-6">
                    <p className={`${scrolled?'text-black':'text-white'} mobile:text-xl`}>Log in</p>
                    <button className={`${scrolled?'text-white bg-black':'text-black bg-white'} px-4 py-3 rounded-xl mobile:text-xl`}>Get Started</button>
                </div>
            </div>
            <div className="px-4 relative mobile:mt-4">
                <IoMdSearch size={27} className={`absolute mt-4 mobile:mt-6 ml-4 ${scrolled?'text-[#333]':'text-white'}`}/>
                <input placeholder="Find a creator" type="text" className={`w-full pl-14 ${scrolled?`placeholder:text-[#333]`:'placeholder:text-white border-white'} mobile:text-xl  bg-transparent focus:border-none border border-1  rounded-full mt-2 py-2 mobile:py-4`} />
            </div>
        </nav>
        

        <div className="absolute bottom-0 laptop:bottom-7 pb-4 px-4 laptop:px-8  w-full">
            <div className="laptop:flex flex-row-reverse justify-between ">
                <div className="flex items-center text-white gap-4 mb-3">
                    <img src={image1} className="w-20 laptop:w-24 object-cover rounded-full" alt="" />
                    <p className="text-sm laptop:text-base">Jode Novah is fusing her loves of music, writing and comdey..</p>
                </div>
                <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.8}}
                >
                    <p className="text-4xl text-white font-light mobile:text-6xl laptop:text-[9rem]">Your  Wildest</p>
                </motion.div>
            </div>
            <p className="text-4xl text-right text-white font-light mobile:text-6xl laptop:text-[9rem]" data-aos='fade-up'>
                creative reality
            </p>
        </div>

        {
            toggleMenu && (
                <div className="fixed w-full h-screen bg-black toggleBg">
                    <div className="flex text-white justify-between px-5 pt-5">
                        <span></span>
                        <p className="text-3xl">Creativ</p>
                        <IoClose size={40} onClick={()=>setToggleMenu(false)} className="cursor-pointer"/>
                    </div>
                    <div className="ml-5 mt-10">
                        <ul className="flex flex-col gap-8">
                            <li className="flex items-center gap-5">
                                <p className="uppercase text-2xl text-white font-light">Creators</p>
                                <FaPlus color="#fff" size={20}/>
                            </li>
                            <li className="flex items-center gap-5">
                                <p className="uppercase text-2xl text-white font-light">Features</p>
                                <FaPlus color="#fff" size={20}/>
                            </li>
                            <li>
                                <p className="uppercase text-2xl text-white font-light">Pricing</p>
                            </li>
                            <li className="flex items-center gap-5">
                                <p className="uppercase text-2xl text-white font-light">Resources</p>
                                <FaPlus color="#fff" size={20}/>
                            </li>
                        </ul>
                    </div>

                    <div className="absolute bottom-5 w-full flex items-center justify-center">
                       
                            <div className="">
                                <button className="bg-white text-black py-4 text-lg rounded-full px-20">Get Started</button>
                                <div className="flex gap-2">
                                    <img className="w-28 cursor-pointer" src={appStore} alt="" />
                                    <img className="w-36 cursor-pointer" src={playStore}/>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }


        {/* tablet and desktop navigation */}
        <nav className={`invisible tablet:visible fixed flex items-center justify-between w-full px-6 text-sm laptop:text-base laptop:px8 py-4 ${scrolled?'backdrop-blur-md' : 'bg-transparents z-20'} ${bgWhite?'bg-white':'bg-transparent'} nav`}>
            {/* desktop navigation links */}
            <div>
                <ul className="flex gap-2 font-medium laptop:gap-4">
                    <li className="" onMouseEnter={()=>{handleHover('link1'); setBgWhite(true)}} onMouseLeave={()=>{handleLeave('link1'); setBgWhite(false)}}>
                        <a className={`${dropdownStates.link1?'bg-black text-white px-2 py-2 rounded-full':''}`} href="#">Creators</a>
                        {
                            dropdownStates.link1 && (
                                <div className="absolute top-10 mt-[15px] z-10 flex justify-between text-sm w-[100vw] left-0 bg-white py-12 px-8">
                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Podcasters
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Get to know your Listeners</li>
                                            <li className="hover:text-black cursor-pointer">Cut through the noise</li>
                                            <li className="hover:text-black cursor-pointer">More ways to get paid</li>
                                            <li className="hover:text-black cursor-pointer">Other podcasters on creativ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Video Creators
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Turn your viewers into your people</li>
                                            <li className="hover:text-black cursor-pointer">Reach every fan, every time</li>
                                            <li className="hover:text-black cursor-pointer">More ways to get paid</li>
                                            <li className="hover:text-black cursor-pointer">Other Video creators on Creativ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Musicians
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">From your mind to their ears</li>
                                            <li className="hover:text-black cursor-pointer">Share more than music</li>
                                            <li className="hover:text-black cursor-pointer">More ways to get paid</li>
                                            <li className="hover:text-black cursor-pointer">Other musicians on Creativ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Artists
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Earning made easy</li>
                                            <li className="hover:text-black cursor-pointer">Create what inspires you</li>
                                            <li className="hover:text-black cursor-pointer">Build a community around your art</li>
                                            <li className="hover:text-black cursor-pointer">Other artists on Creativ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Game devs
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]"> 
                                            <li className="hover:text-black cursor-pointer">A safe way to get paid</li>
                                            <li className="hover:text-black cursor-pointer">Selling made simple</li>
                                            <li className="hover:text-black cursor-pointer">Where real community thrives</li>
                                            <li className="hover:text-black cursor-pointer">Other game devs on Creativ</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </li>
                    
                    <li onMouseEnter={()=>{handleHover('link2'); setBgWhite(true)}} onMouseLeave={()=>{handleLeave('link2'); setBgWhite(false)}}>
                        <a className={`${dropdownStates.link2?'bg-black text-white px-2 py-2 rounded-full':''}`} href="#">Features</a>
                        {
                            dropdownStates.link2 && (
                                <div className="absolute top-10 mt-[15px] z-10 flex justify-between text-sm w-[100vw] left-0 bg-white py-12 px-8">
                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Create on your Teams
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Getting started on Creativ</li>
                                            <li className="hover:text-black cursor-pointer">Make it your Own</li>
                                            <li className="hover:text-black cursor-pointer">Reach every fan, every time</li>
                                            <li className="hover:text-black cursor-pointer">Showcase your work</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Build real Community
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Every post, every time</li>
                                            <li className="hover:text-black cursor-pointer">More ways to stay close</li>
                                            <li className="hover:text-black cursor-pointer">Get to know your fans</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Expand your reach
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Bring in new fans</li>
                                            <li className="hover:text-black cursor-pointer">Unlock growth</li>
                                            <li className="hover:text-black cursor-pointer">App integrations</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Get business support
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Help when you need it</li>
                                            <li className="hover:text-black cursor-pointer">Policies to protect you</li>
                                            <li className="hover:text-black cursor-pointer">Payments powered by Creativ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="mb-8 flex items-center gap-2">
                                            Earning Made easy
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Run a membership</li>
                                            <li className="hover:text-black cursor-pointer">Sell digital products</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }

                    </li>


                    <li onMouseEnter={()=>{handleHover('link3'); setBgWhite(true)}} onMouseLeave={()=>{handleLeave('link3'); setBgWhite(false)}}>
                        <a className={`${dropdownStates.link3?'bg-black text-white px-2 py-2 rounded-full':''}`} href="#">Pricing</a>
                        {
                            dropdownStates.link3 && (
                                <div className="absolute top-10 mt-[15px] z-10 flex justify-between text-sm w-[100vw] left-0 bg-white py-12 px-8">
                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Starting a Creativ is free
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Powerful core features</li>
                                            <li className="hover:text-black cursor-pointer">Earning made easy</li>
                                            <li className="hover:text-black cursor-pointer">Paid Membership</li>
                                            <li className="hover:text-black cursor-pointer">Commerce</li>
                                            <li className="hover:text-black cursor-pointer">Payments powered by Creativ</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </li>


                    <li className="transition-all duration-1000 ease-in-out" onMouseEnter={()=>{handleHover('link4'); setBgWhite(true)}} onMouseLeave={()=>{handleLeave('link4'); setBgWhite(false)}}>
                        <a className={`${dropdownStates.link4?'bg-black text-white px-2 py-2 rounded-full':''}`} href="#">Resources</a>
                        {
                            dropdownStates.link4 && (
                                <div className="absolute top-10 mt-[15px] z-10 flex justify-between text-sm w-[100vw] left-0 bg-white py-12 px-8">
                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Creator Hub
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Resources to get started</li>
                                            <li className="hover:text-black cursor-pointer">Grow your memebership</li>
                                            <li className="hover:text-black cursor-pointer">Connect with creators</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Newsroom
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Creativ HQ</li>
                                            <li className="hover:text-black cursor-pointer">Read latest policy updates</li>
                                            <li className="hover:text-black cursor-pointer">Explore product updates</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Help Center
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Gettinf Started</li>
                                            <li className="hover:text-black cursor-pointer">Creativ Payments</li>
                                            <li className="hover:text-black cursor-pointer">Membership Management</li>
                                            <li className="hover:text-black cursor-pointer">Content & Engagement</li>
                                        </ul>
                                    </div>                                 
                                    
                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Partners & Intergrations
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Featured Integrations</li>
                                            <li className="hover:text-black cursor-pointer">Full app directory</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='mb-8 flex items-center gap-2'>
                                            Mobile
                                            <IoMdArrowForward size={18}/>
                                        </h3>
                                        <ul className="flex flex-col gap-2 text-[#666]">
                                            <li className="hover:text-black cursor-pointer">Download the app</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </li>
                </ul>
            </div>
            
            <div className="font-black text-yellow-900 text-lg laptop:text-3xl">
                CREATIV
            </div>

            <div className="flex items-center">
                <div className="relative mr-2">
                    <IoMdSearch size={20} className={`absolute mt-3 ml-2 ${scrolled?'text-[#333]':'text-white'} ${bgWhite?'text-white':'text-[#333]'}`}/>
                    <input placeholder="Find a creator" type="text" className={`pl-7 py-2 ${scrolled?`placeholder:text-[#333]`:'placeholder:text-white border-white'} bg-transparent focus:border-none border border-1 text-xm rounded-full w-32 laptop:w-auto ${bgWhite?'placeholder:text-white border-white':'placeholder:text-[#333]'}`} />
                </div>

                <div className={`text-sm laptop:text-base font-medium flex gap-2 ${bgWhite?'hidden':'block'}`}>
                    <button className={`border border-1  py-1 px-2 laptop:px-3 rounded-full text-white`}>Login</button>
                    <button className="text-white bg-black py-1 px-2 laptop:px-3 rounded-full">Get Started</button>
                </div>
            </div>  
            
        </nav>


    </div>
  )
}

export default Navbar