"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul>
                <li>Node.js</li>
                <li>Flutter</li>
                <li>Tailwind</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React.js</li>
                <li>PostegreSQL</li>
                
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul>
                <li>BTech College of Engineering Aranmula</li>
                <li>Computer Science</li>
                
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certification",
        content:(
            <ul>
                <li>Free Code Camp Responsive Design Certification</li>
                <li>Free Code Camp JavaScript and Data Structure Certification</li>
                <li>Free Code Camp Frontend Libraries Certification</li>
                <li>Free Code Camp BackendDevelopment Certification</li>
              
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab,setTab] = useState("skills")
    const [isPending,startTransition] = useTransition();
    const handleTabChange = (id)=>{
        startTransition(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
      <div className='md:grid-cols-2 md:grid gap-8 items-center py-8 px-4'>
    <Image src={"/images/profile.avif"} alt='an image' width={500} height={500}  className='rounded-md'/>
    <div className=''>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
            Hi, I'm a passionate and creative developer with a focus on building practical and impactful applications. I love solving real-world problems using technology and turning ideas into working products.
Currently, I'm developing a smart canteen management app that simplifies ordering, tracking, and managing food in educational institutions. My goal is to enhance the everyday dining experience with speed, convenience, and a touch of smart automation.
With experience in both Flutter and web development, I enjoy working across platforms and constantly learning new tools and technologies to improve my craft.
        </p>
        <div className='flex flex-row justify-start mt-8'>
        <TabButton selectTab={()=>handleTabChange("skills") } active={tab == "skills"} >{" "}Skills{" "}</TabButton>
        <TabButton selectTab={()=>handleTabChange("education") } active={tab == "education"} >{" "}education{" "}</TabButton>
        <TabButton selectTab={()=>handleTabChange("certification") } active={tab == "certification"} >{" "}certification{" "}</TabButton>
        
        </div>
        <div className='mt-8'>{TAB_DATA.find((t)=>t.id==tab).content}</div>
    </div>
      </div>
    </section>
  )
}

export default AboutSection
