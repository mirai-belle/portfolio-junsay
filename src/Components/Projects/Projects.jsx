import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
function Projects(
    {
        projects = [
        {
            title: "HARIBON",
            description: "AI red-tide detection and forecasting.",
            technologies: ["Streamlit", "Python", "FastAPI", "XGBoost"],
            link: "https://github.com",
            image: require("../../Assets/haribon.png"),
        },
        {
            title: "Space Exploration Website",
            description: "Final project for Web Development course.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            link: "https://github.com",
            image: require("../../Assets/space.png"),
        },
        {
            title: "CTRL+ALT+NSCI Website",
            description: "Final project for NSCI course",
            technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
            link: "https://github.com",
            image: require("../../Assets/nsci.png"),
        }
        ]
    }){
  return (
    <div className="projects">
      <h1 className='heading'>{"< Projects />"}</h1>
        <div className="projects-description">
            {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default Projects
