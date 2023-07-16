import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import SocialsWrapper from "../SocialsWrapper";

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

            <SocialsWrapper />
        </>

    );
}

export default Home;