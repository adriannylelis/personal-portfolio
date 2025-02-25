import { Col, Container, Row } from "react-bootstrap";
import SocialsWrapper from "../SocialsWrapper";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import "./About.css";

function About() {
    const aboutImage = "https://i.ibb.co/4RvvV3N/about.png";

    return (
        <>
            <Container fluid className="introduce-wrapper">
                <h1>adrianny.<span className="introduce-span">about()</span></h1>
                <Row className="description-container">
                    <Col lg={6} md={12} className="description-column">
                        <p>
                            Sou formada em Gestão de TI e, por um bom tempo, atuei com infraestrutura, sendo conhecida como a "Carinha do TI".
                            Minha paixão pelo desenvolvimento surgiu ao lecionar a disciplina de "Pensamento Computacional" em uma instituição de ensino.
                        </p>
                        <p>
                            Tenho interesse especial na construção de novas tecnologias e produtos web. Sempre que possível, exploro minha criatividade
                            no design, brincando com ferramentas da Adobe para criar experiências visuais cativantes.
                        </p>
                    </Col>
                    <Col lg={6} md={12} className="avatar-column">
                        <img className="avatar-image" src={aboutImage} alt="avatar" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="techstack-wrapper">
                <h1>adrianny.<span className="introduce-span">techstack()</span></h1>
                <p>Principais tecnologias com as quais trabalho:</p>
                <Techstack />
                <div className="toolstack-wrapper">
                    <p>Ferramentas que utilizo no dia a dia:</p>
                    <Toolstack />
                </div>
            </Container>

            <SocialsWrapper />
        </>
    );
}

export default About;
