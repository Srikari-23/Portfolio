const ProjectCard = ({ project }) => {
    return (
        <div className="bg-transparent shadow-[6px_6px_14px_rgba(0,0,0,0.2),-8px_-8px_18px_rgba(255,255,255,0.55)] rounded-xl p-2 min-h-[380px]">
            <div className="flex flex-col ">
                <img src={project.background_image} className="w-[100%] h-[75%] rounded-xl" />
                <p className="font-bold px-4 py-2 text-lg">{project.name}</p>
                <p className="px-4 pb-4 ">{project.description}</p>
                <div className="px-2 flex flex-wrap">{project.skills?.map(each => <div className="font-semibold shadow-[12px_12px_24px_rgba(0,0,0,0.2),-12px_-12px_24px_rgba(255,255,255,0.5)] text-base m-1 rounded-[40px] overflow-hidden py-2 px-6 text-[#B415FF]">{each}</div>)}</div>
            </div>
        </div>
    )
}
export default ProjectCard;