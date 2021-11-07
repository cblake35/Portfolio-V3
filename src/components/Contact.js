import React from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';

function Contact() {


    return (
        <Container id='contactPageContainer'>
            <Row className='contactTitleWrapper'>
                <Col className='contactTitle'>
                    <h1>Get In<span> Touch</span></h1>
                </Col>
            </Row>
            <Row className='contactContentWrapper'>
                <Col md={3} className='contactInfo'>
                    <h3>Let's Connect</h3>
                    <p>I'm always looking for opportunities to work on new projects,
                        discuss creative ideas, or network. Feel free to get in touch
                        with me.
                    </p>
                    <p><RiMailSendLine /> cblake2335@gmail.com</p>
                </Col>
                <Col md={9} className='contactForm'>
                    <Form as={Row} action='https://formspree.io/f/mgerjrng' method='POST'>
                        <Form.Group md={6} as={Col} className='contactFormName mb-3' controlId='formcontrol1'>
                            <Form.Label>FULL NAME</Form.Label>
                            <Form.Control type='email' placeholder='First and Last' required />
                        </Form.Group>
                        <Form.Group md={6} as={Col} className='contactFormEmail mb-3' controlId='formcontrol2'>
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type='email' placeholder='youremail@example.com' required />
                        </Form.Group>
                        <Form.Group md={12} as={Col} className='contactFormMsg mb-3' controlId='formcontrol3'>
                            <Form.Label>MESSAGE</Form.Label>
                            <Form.Control as='textarea' rows={4} placeholder='Type message here' required />
                        </Form.Group>
                        <Form.Group md ={12} as={Col}>
                            <Col>
                                <button type='submit'>
                                    <span className='contactMeSpan'>Contact Me</span>
                                    <span className='contactMeSvg'><FiSend /></span>
                                </button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact