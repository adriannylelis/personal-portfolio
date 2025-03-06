import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./Projects.css";

function Projects({ projectsData }) {
    return (
        <Container fluid className="projects-wrapper">
            <h1 className="projects-title">Projetos</h1>
            <div className="projects-main-row">
                {projectsData.flat().map((item) => (
                    <Link
                        to={`/projects/${item.id}`}
                        key={item.id}
                        style={{ textDecoration: "none" }}
                    >
                        <ProjectItem
                            title={item.title}
                            shortDescription={item.shortDescription}
                            badges={item.badges}
                            imgUrl={item.imgUrl[0]}
                            height={item.height}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    );
}

export default Projects;
