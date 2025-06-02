"use client"

import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';


    
 

const HeroSection = () => {
  return (
    <section >
      <div className="grid grid-cols-1 min-h-screen lg:grid-cols-12 items-center">
          <div className="col-span-7 place-self-center" >
              <h1 className='text-white mb-4 text-4xl lg:text-6xl  font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary 	to-secondary'>Hello , I'm {" "}</span>
              <br></br>
              <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Salman T',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
              
              </h1>
                  <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl '>
I'm a passionate and curious developer with a strong interest in web development, Flutter, and AI. I love building projects that solve real-world problems and constantly strive to learn and grow as a programmer.                  </p>
                  <button className='rounded-full w-full sm:w-fit px-6 py-3 bg-gradient-to-br from-primary 	to-secondary bg-white hover:bg-slate-200 text-white sm:ml-4'>Hire Me</button>
                  <button className='rounded-full  w-full sm:w-fit px-1 py-1  bg-transparent border bg-gradient-to-br from-primary 	to-secondary  hover:bg-slate-800 sm:ml-4 mt-4'>
                  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV</span>
                 </button>
          </div>
          <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full bg-primary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image src='/images/coder1.jpg'
                className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                   alt='hero Image'
                   width={380}
                   height={380}
                />
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
