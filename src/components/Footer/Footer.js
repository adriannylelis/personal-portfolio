import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

function Footer() {
    const brand = "{AL}";

    return (
        <footer>
            <Container>
                <Row className="footer-row">
                    <Col className="footer-col col-md-4">
                        <ul className="footer-list">
                            <li>
                                <a href="mailto:adri@adriannylelis.co">
                                    <FontAwesomeIcon className="socials-icon" icon={faEnvelope} />
                                </a>
                            </li>
                            <li>
                                <a target="_blank"
                                href="https://github.com/adriannylelis">
                                    <FontAwesomeIcon className="socials-icon" icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a a target="_blank" 
                                href="https://linkedin.com/in/adriannylelis">
                                    <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-col footer-col-white col-md-4">{brand}</Col>
                    <Col className="footer-col footer-col-gray col-md-4">©2023 {brand}</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;