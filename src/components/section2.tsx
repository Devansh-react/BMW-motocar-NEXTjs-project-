'use client'
//whenever we use these annimation or function make sure to write "user client " at the top 
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import coursedata from '../data/data.json'
import { BackgroundGradient } from './ui/background-gradient';
//defining the type of cource using fro typescript
interface Cource {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}



function Section2() {
    //from courcedata we select cources anf then apply filter property to select featured cources only cource is the parameter here  (cource : Cource) is the type script used 
    const featuredCourses = coursedata.courses.filter((cource: Cource) => cource.isFeatured)
    return (
        <div className=' p-10 bg-black-900 text-white'>
            <div>
                <div className='text-center'>
                    <h1 className="text-base text-zinc-400 font-semibold tracking-wide uppercase" >Section 2</h1>
                    <h4 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">This is the layout of Section2</h4>
                </div>
            </div >



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((cource: Cource) => (
                    <div key={cource.id} className="flex justify-center m-12 ">
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                           <div className=" text-center">
                          <h1 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{cource.title}</h1>
                          <p  className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow"> {cource.description}</p>
                          <Link href={`/course/${cource.slug}`}>
                          Learn More
                            </Link>
                           </div>

                        </BackgroundGradient>

                    </div>
                ))}



            </div>



            <div>
                <div className='text-center mt-5'>
                    <Link href="/section3">
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

export default Section2