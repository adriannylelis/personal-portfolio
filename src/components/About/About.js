import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./About.css";

function Home() {
    const aboutImage = "https://i.ibb.co/4RvvV3N/about.png";

    return (
        <>
            <Container fluid className="introduce-wrapper">
                <h1 text-sm-32>adrianny.<span className="introduce-span">about()</span></h1>
                <Row className="description-container">
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-10 description-column">
                        <p> Sou formada em Gestão de TI e por um bom tempo trabalhei com infraestrutura e fui a "Carinha do TI". Minha paixão por desenvolvimento inicou quando comecei a lecionar a disciplina de "Pensamento Computacional” em uma Instituição de Ensino.</p>
                        <br></br>
                        <br></br>

                        <p> Meus campos de interesse são construir novas Tecnologias e Produtos Web. Sempre que possível também aplico minha paixão por designer e adoro brincar com ferramentas ADOBE. </p>
                        <br></br>


                    </Col>
                    <Col className="col-xl-6 col-sm-6 avatar-column">
                        <img className="avatar-image" src={aboutImage} alt="avatar"></img>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="techstack-wrapper">
                <h1 text-sm-32>adrianny.<span className="introduce-span">techstack()</span></h1>
                <p>Algumas habilidades:</p>
                <Techstack />
                <div className="toolstack-wrapper">
                <p>Ferramentas que utilizo:</p>
                <Toolstack />
                </div>
            </Container>
            
            <div fluid className="socials-wrapper">
                <h1>adrianny.<span className="introduce-span">find()</span></h1>
                <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-4 introduce-column">
                    <p className="text-center">Conecte-se e saiba um pouco mais sobre o meu trabalho.</p>
                </Col>
                <ul className="socials-list">
                    <a href="mailto:adri@adriannylelis.co">
                        <li className="socials-item">
                            <FontAwesomeIcon className="socials-icon" icon={faEnvelope} />
                        </li>
                    </a>
                    <a a target="_blank"
                        href="https://github.com/adriannylelis">
                        <li className="socials-item">
                            <FontAwesomeIcon className="socials-icon" icon={faGithub} />
                        </li>
                    </a>
                    <a a target="_blank"
                        href="https://linkedin.com/in/adriannylelis">
                        <li className="socials-item">
                            <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
                        </li>
                    </a>
                </ul>
            </div>
        </>

    );
}

export default Home;