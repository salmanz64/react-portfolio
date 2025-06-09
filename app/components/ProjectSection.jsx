"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'



const projectsData = [
    {id:1,
        title:"Canteen Management Website",
        description:"🍴 A full-stack web application to manage canteen operations — order placement, real-time menu updates, admin dashboard, and payment tracking",
        image:"./images/projects/1.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/salmanz64/Canteen_Website",
        previewUrl:"https://canteen-website-frontend-19fp.vercel.app/"
    },
    {id:2,
        title:"Advanced Habit Tracker",
        description:"📱 A Flutter habit tracker with smart delay logic — helps users build routines, track progress, and stay accountable through streak analytics, reminders, and adaptive scheduling.",
        image:"./images/projects/2.png",
        tag:["All","Mobile"],
        gitUrl:"https://github.com/salmanz64/Habit_Now",
        previewUrl:"https://habit-now-nu.vercel.app/"
    },
]

const ProjectSection = () => {

    const [ tag,setTag] = useState("All");

    const handleChange=(newTag)=>{
        setTag(newTag)
    }

    const filterProject = projectsData.filter((project)=>(project.tag.includes(tag)))
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 py-4'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        
        <ProjectTag onclick={handleChange} isSelected={tag=="All"} name={"All"}/>
        <ProjectTag onclick={handleChange} isSelected={tag=="Web"} name={"Web"}/>
        <ProjectTag onclick={handleChange} isSelected={tag=="Android"} name={"Mobile"}/>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            filterProject.map((project)=>(
                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    imgUrl={project.image}
                    tags={project.tag}
                    description={project.description}

                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}

                />
            ))
        }
      </div>
    </>
  )
}

export default ProjectSection
