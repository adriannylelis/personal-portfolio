import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from "react-bootstrap";


const SocialsWrapper = () => {
    return (
        <div className="socials-wrapper">
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
                <a href="https://github.com/adriannylelis" target="_blank" rel="noreferrer">
                    <li className="socials-item">
                        <FontAwesomeIcon className="socials-icon" icon={faGithub} />
                    </li>
                </a>
                <a href="https://linkedin.com/in/adriannylelis" target="_blank" rel="noreferrer">
                    <li className="socials-item">
                        <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialsWrapper;