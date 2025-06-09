"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'



const projectsData = [
    {id:1,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"./images/projects/2.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {id:2,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"./images/projects/3.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {id:3,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"./images/projects/4.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {id:4,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"./images/projects/5.png",
        tag:["All","Mobile"],
        gitUrl:"/",
        previewUrl:"/"
    },{id:5,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"./images/projects/6.png",
        tag:["All","Mobile"],
        gitUrl:"/",
        previewUrl:"/"
    }
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
