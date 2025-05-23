import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-center" >
              <h1 className='text-white mb-4 text-4xl lg:text-6xl  font-extrabold'>Hello , I'm Salman</h1>
                  <p className='text-[#ADB7BE] mb-4 text-lg lg:text-xl'>
                afhfshffhsafkjshfhjshj hfasjfsaj afsdfjkasfh sjfjhasfjksjkfh sfhjashfjkashfj
                fasjkfshfjsh.
                  </p>
                  <button className='rounded-full px-6 py-4 bg-white hover:bg-slate-200 text-black ml-4'>Hire Me</button>
                  <button className='rounded-full px-6 py-4 bg-transparent border border-white hover:bg-slate-800 ml-4'>Download CV</button>
          </div>
          <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image src='/images/coder.jpg'
                className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                   alt='hero Image'
                   width={300}
                   height={300}
                />
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
