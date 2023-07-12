import { Button, Container, Row, Col } from "react-bootstrap";

import './Contact.css';

function Contact() {
    return (
        <div className="contact-wrapper">
            <h1>Vamos manter <span>contato</span></h1>
            <Container>
                <Row className="justify-content-center">
                    <Col className="contact-form-col" lg={6} md={10} sm={9}>
                        <form className="contact-form" action="https://formsubmit.co/adri@adriannylelis.co" method="POST">
                            <input className="form-control" type="hidden" name="_subject" value="Mail z portfolio"></input>
                            <input className="form-control" type="text" name="name" placeholder='Nome'  required></input>
                            <input className="form-control" type="email" name="email" placeholder='E-mail'  required></input>
                            <textarea className="form-control" type="text" name="message" placeholder='Mensagem...' required></textarea>
                            <Button className="contact-form-button" type='submit'>Enviar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;