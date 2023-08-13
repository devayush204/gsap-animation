"use client"
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Home() {
  let ani = gsap.timeline()
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.p1, .p2  ', { opacity: 0, y: -20, duration: 2, stagger: 0.2 });
    tl.from('.btn', { opacity: 0, x: -20,duration:1, stagger: 0.5 });
    tl.from('.box', { opacity: 0,x:-400, duration: 2, stagger: 0.2 , ease: "elastic"});
    tl.from('.hdphn1', { opacity: 0, index:0, duration: 2, stagger: 0.2 });
  }, []);
  return (
    <>
      <section className="flex pl-20 h-full ">
        <div className="flex flex-col relative">
          <div className="flex flex-col gap-5 mt-10">
            <p className="p1 text-white font-semibold text-[50px] tracking-widest">LETS DIVE IN MUSIC WORLD</p>
            <p className=" p2 text-[20px]  text-white w-[50%]  h-[]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem rerum, distinctio eligendi nostrum, dolorum recusandae, cum illum aliquam eum commodi et itaque molestias accusantium obcaecati nam! Quis aliquid corrupti atque blanditiis optio, consequuntur, perspiciatis ab consectetur placeat expedita labore, amet alias. Omnis nostrum harum laudantium optio accusamus molestias voluptatum ipsum?</p>
          </div>
          <div className="btn flex items-center px-4 gap-8 mt-8 ">
            <button className=" bg-red-600 text-white font-semibold py-3 px-12 rounded-xl transition duration-300 transform hover:scale-105">SHOP NOW
              <span class="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-br from-red-500 to-transparent opacity-0 animate-glow transition-opacity duration-500"></span>
            </button>

            <button className=" flex border-2 border-red-600 items-center bg-transparent text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-red-600 hover:text-white transition duration-200"><img className='mr-2 w-[25px]  ' src={"/cart.svg"} alt="" /> ADD TO CART</button>

          </div>
          <img src={"/1.png"} className="img1 top-0 absolute right-0  h-[700px] w-[700px] " alt="" />
        </div>

        <div className="absolute bottom-0 flex gap-4 px-2 py-1 right-40 ">
          <div className="box relative rounded-xl pt-16 px-8 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-700 to-transparent ">
            <img className="hdphn1 absolute bottom-14 ml-4 w-[120px] h-[140px] "  src={"/2.png"} alt="" />
            <p className=" text-white font-semibold ">Wireless Headphones</p>
            <p className="text-sm text-red-400">$1200</p>
          </div>
          <div className="box relative rounded-xl pt-16 px-8 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-700 to-transparent ">
            <img className="hdphn1 absolute bottom-14 ml-4 w-[120px] h-[140px] "  src={"/2.png"} alt="" />
            <p className=" text-white font-semibold ">Wireless Headphones</p>
            <p className="text-sm text-red-400">$1200</p>
          </div>
          <div className="box relative rounded-xl pt-16 px-8 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-700  to-transparent ">
            <img className="hdphn1 absolute bottom-14 ml-4 w-[120px] h-[140px] "  src={"/2.png"} alt="" />
            <p className=" text-white font-semibold ">Wireless Headphones</p>
            <p className="text-sm text-red-400">$1200</p>
          </div>
        </div>
        
        
      </section>
    </>
  )
}
