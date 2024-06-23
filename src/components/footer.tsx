import React from 'react'

function Footer() {
  return (
    <footer className=" bg-black text-grey-500 py-10 px-5">
        <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pd-4 sm:pd-6 lg:pd-8 text-center'>
        <div>
        <h2 className="text-white text-lg font-semibold mb-4 ">About Us</h2>
            <p m-3 max-w-md text-white text-grey-600>
            Since 1916, BMW has been pushing the boundaries of automotive engineering. From the iconic 2002, a pioneer in sports sedans, to the revolutionary iX, leader in electric vehicles, BMW continues to deliver a legacy of performance, luxury, and innovation.
            </p>
        </div>
        <div >
            <ul className='flex flex-col gap-2 text-white text-bold mt-10'>
                <a href='@/components/herosection.tsx' className="hover:text-white transition-colors duration-300">
                HOME
                </a>
                <a href='@/components/section2.tsx' className="hover:text-white transition-colors duration-300">
                ABOUT
                </a>
                <a href='@/components/section3.tsx' className="hover:text-white transition-colors duration-300">
                SERVICES
                </a>
                <a href='@/components/section4.tsx' className="hover:text-white transition-colors duration-300">
                EXPLORE MORE
                </a>
            </ul>
        </div>
        <div mt-5>
            <ul  className='flex flex-col gap-2 text-white text-bold mt-10'>
               <a href='https://www.facebook.com/BMW/' className="hover:text-white transition-colors duration-300">
               Follow us on Facebook
               </a>
               <a href='https://twitter.com/bmw' className="hover:text-white transition-colors duration-300">
               Stay updated on Twitter
               </a>
               <a href='https://www.instagram.com/bmw/' className="hover:text-white transition-colors duration-300">
               Be inspired on Instagram
               </a>
            </ul>


        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: BMW@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        </div>
        <div className='text-center w-full h-10 border-t-2 border-white mt-10'>
          <h3 className='text-center text-gery-700 mt-7'>Made with 💞 by Devansh</h3>
        </div>
    </footer>
  )
}

export default Footer