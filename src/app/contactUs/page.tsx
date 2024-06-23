'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import React from 'react'


function Contact() {
    const placeholders = [
      "Can I get my BMW car serviced at any BMW dealership?",
      "What are the current lease options for a BMW car",
      "Do you offer any loaner cars while my BMW car is being serviced?",
      "Contact me Devansh"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };


    return (


        <div>
            <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
                <h2  className="mt-100 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 mb-20 text-center" >
                    Ask us anything....
                </h2>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
            </div>


            <BackgroundBeams />
        </div>

    )

}
export default Contact
