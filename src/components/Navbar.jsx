"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap';

const Navbar = () => {
    useEffect(() => {
        let ani = gsap.timeline()
      ani.from('.main, .nav1, .nav2, .nav3, .li1, .li2, .li3, .btn1, .img1, .img2', { opacity: 0, y: -20, duration: 1, stagger: 0.3 });
    }, []);
  return (
    <>
    <div className='flex w-[100%]  justify-between px-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black'>

        {/* logo */}
            <img className='nav1 w-[200px] mix-blend-multiply' src={"/logo.gif"} alt="" />
        
        {/* list? */}
        <div className=' nav2 text-white font-semibold tracking-widest px-4 ml-[290px] items-center list-none flex  gap-16'>
            <li className='li1 border-b-[3px] border-b-red-700 '>HOME</li>
            <li className='li2 hover:border-b-[3px] hover:border-b-red-700'>EXPLORE</li>
            <li className='li3 hover:border-b-[3px] hover:border-b-red-700'>CONTACT US</li>
        </div>
        {/* toggle btn */}
        {/* <span>
            <button>

            </button>
        </span> */}

        <div className='nav3 flex items-center gap-7'>
            <span className='img1'>
                <img className='w-[30px]  ' src={"/search.svg"} alt="" />
            </span>
            <span>
                <img className='img2 w-[30px]  ' src={"/cart.svg"} alt="" />
            </span>
        </div>
        <div className='flex items-center'>
        <button className= 'btn1 px-4 py-2 border-2 border-red-700 rounded-lg text-red-700 hover:text-white hover:bg-black bg-transparent'>
            LOGIN
        </button>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
