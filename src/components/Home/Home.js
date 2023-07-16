import { Container, Row, Col } from "react-bootstrap";
import SocialsWrapper from "../SocialsWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Home.css";

function Home() {
    const programmerImage = "https://i.ibb.co/xgMTWR0/home-img.png";
    const avatarImage = "https://i.ibb.co/nL3VccP/avatar.png";

    return (
        <>
            <Container fluid className="home-wrapper h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <Row className="w-100">
                    <Col className="col-sm-12 col-md-6 left-col d-flex flex-column justify-content-center align-items-center text-light">
                        <div className="about-wrapper">
                            <h1 className="pl-3 header ">

                                <span className="function-span">{"{"} </span>

                                <span className="name-span">Adrianny </span>
                                <span className="funtion-span">Lelis</span>

                                <span className="function-span">{"}"} </span>
                            </h1>
                            <p className="full-name">Desenvolvedora FullStack</p>

                        </div>
                    </Col>
                    <Col className="img-col col-sm-12 col-md-6 d-flex justify-content-center">
                        <img className="programmer-image img-fluid" src={programmerImage} alt="programmer"></img>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="introduce-wrapper">
                <h1 text-sm-32>adrianny.<span className="introduce-span">introduce()</span></h1>
                <Row className="description-container">
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-10 description-column">
                        <p>Sou uma entusiasta em tecnologia, com habilidades tanto no Frontend quanto no backend. Além disso, sou fascinada por design e, de vez em quando, adoro explorar conceitos e criar experiências visuais cativantes.</p>
                        <br></br>
                        <br></br>

                        <p> Estou sempre buscando oportunidades para expandir meus conhecimentos e mergulhar em novas tecnologias. O aprendizado contínuo é essencial para mim, pois acredito que é a chave para o crescimento pessoal e profissional. </p>
                        <br></br>


                    </Col>
                    <Col className="col-xl-6 col-sm-6 avatar-column">
                        <img className="avatar-image" src={avatarImage} alt="avatar"></img>
                    </Col>
                </Row>
            </Container>
            <SocialsWrapper/>
        </>

    );
}

export default Home;