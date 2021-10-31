import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profileImg.jpg';

function About() {

    return (
        <Container>
            <Row className='aboutMeTitleWrapper'>
                <Col className='aboutMeTitle'>
                    <h1>About<span> Me</span></h1>
                </Col>
            </Row>
            <Row>
                <Col className='aboutMeImg'>
                    <img src={profileImg} alt='Im Chris'/>
                </Col>
                <Col className='aboutMeInfo'>
                    <h2>Personal Info</h2>
                    <p>Hello! My name is Chris and I enjoy solving problems and creating business solutions in the web.
                        I've always been curious and intrigued on how software can assist us in our daily lives. Technology nowadays is a 
                        huge part of our livelihood and as an avid nerd, I want to contribute to make the world
                        a better place, one web app at a time.
                    </p>
                </Col>
            </Row>
            <Row className='skillsTitleWrapper'>
                <Col className='skillsTitle'>
                    <h2>
                        My Skills
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col className='skillsList'>
                    list all relevant skills here
                </Col>
            </Row>
        </Container>
    )
}

export default About