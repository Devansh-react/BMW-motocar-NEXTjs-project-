'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Image from 'next/image';

const dummydata =[
    
        {
          "id": 1,
          "name": "Alice Smith",
          "designation": "Software Engineer",
         "image": "https://unsplash.com/photos/a-woman-with-curly-hair-wearing-a-tank-top-JXDFfSHarvY"
        },
        {
          "id": 2,
          "name": "Bob Johnson",
          "designation": "Marketing Manager",
          "image": "https://unsplash.com/photos/woman-in-red-cardigan-smiling-mpDV4xaFP8c"
        },
        {
          "id": 3,
          "name": "Charlie Williams",
          "designation": "Team Lead",
          "image": "https://unsplash.com/photos/woman-in-red-cardigan-smiling-mpDV4xaFP8c"
        },
        {
          "id": 3,
          "name": "Char Williams",
          "designation": "Team assistant  Lead",
          "image": "https://unsplash.com/photos/man-wearing-henley-top-portrait-7YVZYZeITc8"
        }
      
      

]

function Section6() {
    return (
        <div className='relative  overflow-hidden w-full h-[40rem]'>
           
           <WavyBackground>
           <div className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mix-blend-burn">
                        Designed to Lead. Engineered to Inspire.

                    </p>
                    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center mix-blend-difference">
                        BMW builds cutting-edge cars that aren't just machines, but experiences that thrill and inspire drivers.
                    </p> 

                    <div  className="flex flex-row items-center justify-center mb-10 w-full mt-5" >
                    <AnimatedTooltip items={dummydata} />

                    </div>
            </div>
           </WavyBackground>

        </div>
    )
}

export default Section6