import { Col, Container, Row } from "react-bootstrap";
import avatarImage from "../../assets/avatar-ptfl-2.png";
import SocialsWrapper from "../SocialsWrapper";
import "./Home.css";

function Home() {

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
                    <Col className="img-col col-sm-10 col-md-6 d-flex justify-content-center">
                        <img className="programmer-image img-fluid" src={avatarImage} alt="programmer"></img>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="introduce-wrapper">
                <h1 text-sm-32>adrianny.<span className="introduce-span">introduce()</span></h1>
                <Row className="description-container">
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-10 description-column">
                        <p>Sou uma desenvolvedora apaixonada por tecnologia, com experiência tanto no Frontend quanto no Backend. Além de codificar, também me interesso por design e adoro transformar ideias em experiências visuais envolventes.</p>
                        <br></br>

                        <p> Curiosa por natureza, estou sempre explorando novas tecnologias e aprimorando minhas habilidades. Para mim, o aprendizado contínuo não é apenas um objetivo, mas uma filosofia — a chave para evoluir e criar soluções cada vez mais inovadoras. </p>
                        <br></br>

                    </Col>
                </Row>
            </Container>
            <SocialsWrapper />
        </>

    );
}

export default Home;