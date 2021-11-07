import React from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { RiMailSendLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm('mgerjrng');

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
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group md={4} as={Col} className='contactFormName mb-3' controlId='formcontrol1'>
                                <Form.Label>FULL NAME</Form.Label>
                                <Form.Control name='fullname' placeholder='First and Last' required />
                                <ValidationError prefix='Full Name' field='fullname' errors={state.errors} />
                            </Form.Group>
                            <Form.Group md={4} as={Col} className='contactFormEmail mb-3' controlId='formcontrol2'>
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type='email' name='email' placeholder='youremail@example.com' required />
                                <ValidationError prefix='Email' field='email' errors={state.errors} />
                            </Form.Group>
                            <Form.Group md={4} as={Col} className='contactFormSubject mb-3' controlId='formcontrol3'>
                                <Form.Label>SUBJECT</Form.Label>
                                <Form.Control  name='subject' placeholder='Subject' required />
                                <ValidationError prefix='Subject' field='subject' errors={state.errors} />
                            </Form.Group>
                            <Form.Group md={12} as={Col} className='contactFormMsg mb-3' controlId='formcontrol4'>
                                <Form.Label>MESSAGE</Form.Label>
                                <Form.Control as='textarea' name='message' rows={4} placeholder='Type message here' required />
                                <ValidationError prefix='Message' field='message' errors={state.errors} />
                            </Form.Group>
                            <Form.Group md={12} as={Col}>
                                <Col>
                                    <button type='submit' disabled={state.submitting}>
                                        <span className='contactMeSpan'>Contact Me</span>
                                        <span className='contactMeSvg'><FiSend /></span>
                                    </button>
                                </Col>
                            </Form.Group>
                            {state.succeeded ?
                                <Col className='emailSuccess' md={12} >
                                    <p>Email Sent!</p>
                                </Col>
                                :
                                undefined
                            }
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact