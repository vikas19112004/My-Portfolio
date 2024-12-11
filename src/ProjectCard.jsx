import "./ProjectCard.css";

function ProjectCard ({url, content}) {
    return (
        <div className="projectCard">
            <img src={url} alt="" />
            <p>{content}</p>
        </div>
    );
}

export default ProjectCard;