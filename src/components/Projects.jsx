import Project_Logo from './../assets/Projects.jpg';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import IPM_LOGO from './../assets/IPM-Cover-Page.jpg';
import Melody_LOGO from './../assets/Melody.jpg';
import IDM_LOGO from './../assets/IDM.jpg';
const Projects = () => {
    const [projects, setProjects] = useState([{
        name: "Intelligent Decision Management",
        skills: ["React.js", "Javascript", "Azure Package Management", "CI/CD Pipelines"],
        background_image: IDM_LOGO,
        description: "Developed a reusable React library for rule modeling and simulation, integrated with drag-and-drop features to streamline complex configurations. Delivered a standalone app enhancing efficiency in rule management across multiple projects."
    },
    {
        name: "Intelligent Pricing Management",
        skills: ["React.js", "SAP BTP", "SAP Cloud Deployment", "Redux"],
        background_image: IPM_LOGO,
        description: "Contributed to the pricing rule simulation and reporting modules of a real-time dynamic pricing platform. Ensured smooth deployment and integration into SAP Business Technology Platform (BTP)."
    },
    {
        name: "Melody - Pre Sales",
        skills: ["SAP UI5", "SAP Web IDE", "BAS", "Custom Controls", "Custom Library"],
        background_image: Melody_LOGO,
        description: "Built an SAP UI5 application to optimize pre-sales workflows. Led development of the activity registration module, enabling efficient logging and tracking of consultant engagements."
    }])
    return (
        <div id="projects" className="min-h-screen pt-[90px] pb-20 px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-center mb-12 gap-6">
                <img src={Project_Logo} alt="Projects" className="w-40 sm:w-56 lg:w-1/4 rounded-lg" />
                <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left">My Projects</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects;