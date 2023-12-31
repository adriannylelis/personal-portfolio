import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import ProjectItem from "./ProjectItem/ProjectItem"

import "./Projects.css";

function Projects({ projectsData }) {
    return (
        <Container fluid className="projects-wrapper">
            <h1 className="projects-title">Projetos</h1>
            <Row className="projects-main-row">
                <Col sm={12} md={6}>
                    {projectsData[0].map((item) => (
                        <Link to={`/projects/${item.id}`} style={{ textDecoration: 'none' }}>
                            <ProjectItem
                                title={item.title}
                                shortDescription={item.shortDescription}
                                badges={item.badges}
                                imgUrl={item.imgUrl[0]}
                                height={item.height}
                            />
                        </Link>
                    ))}
                </Col>
                <Col sm={12} md={6}>
                    {projectsData[1].map((item) => (
                        <Link to={`/projects/${item.id}`} style={{ textDecoration: 'none' }}>
                            <ProjectItem 
                                title={item.title}
                                shortDescription={item.shortDescription} 
                                badges={item.badges}
                                imgUrl={item.imgUrl[0]} 
                                height={item.height} 
                            />
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;