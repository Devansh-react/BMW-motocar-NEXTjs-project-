'user client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'



function Section5() {
  return (
    <div>
        <h1 className="text-5xl font-bold text-center mt-20 mb-4 z-10 text-zinc-400 dark:blue-600 "> NEW LAUNCH </h1>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={cardemodata} />
    </div>
      

    </div>  
  )
}

const cardemodata = [
    {
        "title": "The All-New BMW 3 Series Sedan",
        "description": "Experience the thrill of a refined sports sedan with the all-new BMW 3 Series. It delivers exceptional performance, a captivating design, and innovative technology that elevates your driving experience.",
        "link": "https://www.bmwusa.com/vehicles/3-series/sedan/overview.html"
      },
      {
        "title": "The Powerful BMW X5 SUV",
        "description": "Command the road with the powerful and versatile BMW X5 SUV. It offers exceptional luxury, exhilarating performance, and advanced technology for an unforgettable driving experience.",
        "link": "https://www.bmwusa.com/vehicles/x-models/x5/suv/overview.html"
      },
      {
        "title": "The Innovative BMW iX Electric SUV",
        "description": "Embrace the future with the innovative BMW iX electric SUV. It combines sustainable mobility with exhilarating performance, cutting-edge technology, and a luxurious interior.",
        "link": "https://www.bmwusa.com/vehicles/all-electric/ix/suv/overview.html"
      },
      {
        "title": "The Luxurious BMW 7 Series Sedan",
        "description": "Indulge in unparalleled luxury with the BMW 7 Series sedan. It offers exceptional comfort, advanced technology, and a powerful presence that leaves a lasting impression.",
        "link": "https://www.bmwusa.com/vehicles/7-series/sedan/build-your-own.html"
      },
      {
        "title": "The Spirited BMW Z4 Roadster",
        "description": "Unleash your inner thrill-seeker with the exhilarating BMW Z4 Roadster. Experience open-air exhilaration with a powerful engine, sharp handling, and a sleek, sporty design.",
        "link": "https://www.bmwusa.com/vehicles/z-models/z4/roadster/overview.html"
      },
      {
        "title": "The Versatile BMW X3 SUV",
        "description": "Conquer any adventure with the versatile BMW X3 SUV. It offers a perfect blend of sporty performance, spacious comfort, and advanced technology for your everyday journeys and weekend escapes.",
        "link": "https://www.bmwusa.com/vehicles/x-models/x3/suv/overview.html"
      }
    ]


export default Section5