'use client'
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const BMWdata= [
    {
      "title": "The All-New BMW 3 Series Sedan",
      "description": "Experience the thrill of a refined sports sedan with the all-new BMW 3 Series. It delivers exceptional performance, a captivating design, and innovative technology that elevates your driving experience."
    },
    {
      "title": "The Powerful BMW X5 SUV",
      "description": "Command the road with the powerful and versatile BMW X5 SUV. It offers exceptional luxury, exhilarating performance, and advanced technology for an unforgettable driving experience."
    },
    {
      "title": "The Innovative BMW iX Electric SUV",
      "description": "Embrace the future with the innovative BMW iX electric SUV. It combines sustainable mobility with exhilarating performance, cutting-edge technology, and a luxurious interior."
    },
    {
      "title": "The Luxurious BMW 7 Series Sedan",
      "description": "Indulge in unparalleled luxury with the BMW 7 Series sedan. It offers exceptional comfort, advanced technology, and a powerful presence that leaves a lasting impression."
    }
  ]

function Section3() {
  return (
    <div className='mt-10 bg-black-900'>
        
       
       <StickyScroll content={BMWdata}/>

    </div>
  )
}

export default Section3