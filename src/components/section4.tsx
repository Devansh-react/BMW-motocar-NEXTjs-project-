"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function Section4() {
  return (
    <div className='className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden'>
        <h2 className="text-5xl font-bold text-center mt-20 mb-4 z-10 text-zinc-400 dark:blue-600 ">THE MORE U KNOW</h2>
        <div>
        <div className='m-10'>
      <InfiniteMovingCards
       items={cardets}
        direction="right"
        speed="fast"
      />
    </div>
        </div>
       
    </div>
  )
}

const cardets = [
    
        {
          "quote": "There is a reason why BMW's tagline is 'The Ultimate Driving Machine.' These German cars are known for their exceptional handling, performance, and luxurious interiors.",
          "name": "Car and Driver",
          "title": "The Ultimate Driving Machine"
        },
        {
          "quote": "BMWs are a perfect blend of power, precision, and innovation. They are truly engineering marvels that deliver an exhilarating driving experience.",
          "name": "Top Gear",
          "title": "Engineering Marvels"
        },
        {
          "quote": "BMWs offer a combination of luxury, performance, and technology that is unmatched in the industry. They are a status symbol for those who appreciate the finer things in life.",
          "name": "Edmunds",
          "title": "Luxury Perfected"
        }
      
      
      
]

export default Section4