import Image from 'next/image'
import React from 'react'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'
import Link from 'next/link'
const EmailSection = () => {
  return (
    <section className='grid relative md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
    <div className='absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-xl'></div>
    <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            I'm currently looking for new oppurtunities my inbox is free and opened
            for any doubts and clearance
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href='github.com'>
                <Image src={GithubIcon} alt='Github Icon'/>
            </Link>
            <Link href='Linkedin.com'>
                <Image src={LinkedinIcon} alt='Github Icon'/>
            </Link>
        </div> 
    </div>
    <div>
        <form className='flex flex-col '>
            <div className='mb-6'>
                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                    Your email
                </label>
                <input type='email' id='email' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' placeholder='jacob@google.com'/>
            </div>

             <div className='mb-6'>
                 <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                    Subject
                             </label>
                             <input type='text' id='subject' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' placeholder='Just Saying hi...'/>
             </div>

             <div className='mb-6'>
                 <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                    Subject
                             </label>
                             <textarea id='message' name='message'  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' placeholder="Let's talk about..."/>

             </div>

            <button type='submit' className='bg-primary hover:bg-secondary text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>



             
        </form>
    </div>
      
    </section>
  )
}

export default EmailSection
