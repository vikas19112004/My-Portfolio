import "./Projects.css"
import ProjectCard from "./ProjectCard";

function Projects() {
    let url = [
        "C:\Users\vdevi\OneDrive\Desktop\vikas\port-folio\portfolio\src\assets\project-img1.jpg",
        "C:\Users\vdevi\OneDrive\Desktop\vikas\port-folio\portfolio\src\assets\project-img2.png"
    ];
    let content = [
        "I have worked on hosting page of cloudafe.in. Which is the website of Cloudafe corporation.",
        "I have worked on SMM(social media marketing) page of cloudafe.in."
    ];
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="card">
                <ProjectCard url={url[0]} content={content[0]} />
                <ProjectCard url={url[1]} content={content[1]} />
            </div>
        </div>
    );
}

export default Projects;