const ProjectCard = ({ project }) => {
    return (<div className="flip-card rounded-lg ">
        <div className="flip-card-inner">
            <div className="flex flex-col flip-card-front">
                <img src={project.background_image} className="w-[100%] h-[75%]" />
                <p>{project.name}</p>
                <p>{project.skills.join(",")}</p>
            </div>
            <div class="flex-col flip-card-back opacity-90">
                <p>{project.name}</p>
                <p>{project.skills.join(",")}</p>
            </div>
        </div>
    </div>
    )
}
export default ProjectCard;