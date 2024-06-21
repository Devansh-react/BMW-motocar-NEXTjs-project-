import React from 'react'
import Link from "next/link";
import { Spotlight } from './ui/Spotlight';
import { HoverBorderGradient } from './ui/hover-border-gradient';


function Herosection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto'>
      <Spotlight
        className="-top-60 -left-60 md:-left-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className='p-4 text-center w-full relative z-10'>
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >DEVANSH-REACT</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet et, non unde a debitis magni magnam? Ducimus veritatis explicabo neque officiis nostrum quidem vitae dolorum debitis libero sint ut, omnis aspernatur aliquam consequuntu</p>
        <div className='mt-5'>
          <Link href={'/'}>

          <div className=" flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >        <span>Explore More</span>
              </HoverBorderGradient>
            </div>

          </Link>
        </div>

      </div>








    </div>
  )
}

export default Herosection