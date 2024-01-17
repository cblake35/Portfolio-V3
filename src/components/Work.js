import React, { useState } from "react";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import neighborhub from '../assets/neighborhub.png';
import ecommerce from '../assets/ecommerce.png';
import bbo from '../assets/buybeeronline.png';
import drinkrunnr from '../assets/drinkrunnr.png';
import { VscGithub } from 'react-icons/vsc';

function Work() {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);

    const handleCloseOne = () => setShowOne(false);
    const handleShowOne = () => setShowOne(true);
    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);
    const handleCloseThree = () => setShowThree(false);
    const handleShowThree = () => setShowThree(true);
    const handleCloseFour = () => setShowFour(false);
    const handleShowFour = () => setShowFour(true);

    return (
        <Container className='workPageWrapper'>
            <Row className='workTitleWrapper'>
                <Col className='workTitle'>
                    <h1>Featured<span> Work</span></h1>
                </Col>
            </Row>
            <Row className='workListWrapper'>
                <Col sm={6} lg={4}  className='workList'>
                    <img src={bbo} alt='Buy Beer Online App' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowOne()}>
                        <p>Buy Beer Online</p>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='workList'>
                    <img src={neighborhub} alt='NeighborHub App' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowTwo()}>
                        <p>NeighborHUB</p>
                    </div>
                </Col>
                <Col sm={6} lg={4}  className='workList'>
                    <img src={drinkrunnr} alt='DrinkrunnrUS App' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowThree()}>
                        <p>DrinkrunnrUS</p>
                    </div>
                </Col>
                <Col sm={6} lg={4} className='workList'>
                    <img src={ecommerce} alt='Ecommerce Website' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowFour()}>
                        <p>Bedder Way</p>
                    </div>
                </Col>
            </Row>

            <MyModals
                showOne={showOne}
                showTwo={showTwo}
                showThree={showThree}
                showFour={showFour}

                handleCloseOne={handleCloseOne}
                handleShowOne={handleShowOne}
                handleCloseTwo={handleCloseTwo}
                handleShowTwo={handleShowTwo}
                handleCloseThree={handleCloseThree}
                handleShowThree={handleShowThree}
                handleCloseFour={handleCloseFour}
                handleShowFour={handleShowFour}
            />
        </Container>
    )
}

const MyModals = (props) => {

    return (
        <>  
            <Modal show={props.showOne} onHide={props.handleCloseOne}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>Buy Beer Online</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={bbo} alt='Buy Beer Online App' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>Buy Beer Online is a custom web platform built for Anheuser-Busch's craft brands to connect users to multiple retailers 
                                for the product they love. This allowed brands to customize their brand pages, update their products online, and build
                                unique campaigns.
                            </p>
                        </Col>
                    </Row>
                    <Row className='modalStackWrapper'>
                        <Col className='stackList'>
                            <h6>Stack:</h6>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>Mocha</li>
                                <li>AWS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Modal show={props.showTwo} onHide={props.handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>NeighborHUB</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={neighborhub} alt='NeighborHub App' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>A full-stack web app for residential communities. This app creates a localized social hub for residential communities to interact in. 
                                It also provides an intuitive ticketing system for residents and allows administrators to manage, track, and resolve each submitted ticket.
                                This app features full CRUD functionality and role-based access control.
                            </p>
                        </Col>
                    </Row>
                    <Row className='modalStackWrapper'>
                        <Col className='stackList'>
                            <h6>Stack:</h6>
                            <ul>
                                <li>React</li>
                                <li>PostgreSQL</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Heroku</li>
                                <li>Bootstrap</li>
                                <li>Ticketmaster API</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='livesiteWrapper'>
                        <Col>
                            <h6>Site: </h6>
                            <a className='livesite' href='https://neighborhub-client.herokuapp.com/' target='_blank' rel='noreferrer'> NeighborHUB</a>
                            <div className='demoLoginWrapper'>
                                <p>Demo Login(Tenant/Admin) -</p>
                                <p>Username: user-test@mail.com</p>
                                <p>Password: Password1!</p>
                            </div>
                            <a className='githubRepo' href='https://github.com/cblakedev/NeighborHUB-Client' target='_blank' rel='noreferrer'><VscGithub /></a>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Modal show={props.showThree} onHide={props.handleCloseThree}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>DrinkrunnrUS</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={drinkrunnr} alt='DrinkrunnrUS' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>DrinkrunnrUS is Anheuser-Busch's first legally 3-tier compliant eCommerce marketplace. The objective of this project is to 
                                acquire valuable insights from first-party consumer data, to extract detailed and nuanced information about the user journey.
                            </p>
                        </Col>
                    </Row>
                    <Row className='modalStackWrapper'>
                        <Col className='stackList'>
                            <h6>Stack:</h6>
                            <ul>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Flask</li>
                                <li>Mocha</li>
                                <li>AWS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Modal show={props.showFour} onHide={props.handleCloseFour}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>Bedder Way</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={ecommerce} alt='NeighborHub App' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>An ecommerce website for Murphy Beds. The site is built using the Shopify CMS and custom HTML, CSS, and JavaScript.
                                Multiple plugins are also utilized to optimize the site for a better customer experience.
                            </p>
                        </Col>
                    </Row>
                    <Row className='modalStackWrapper'>
                        <Col className='stackList'>
                            <h6>Stack:</h6>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Liquid</li>
                                <li>Shopify</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='livesiteWrapper'>
                        <Col>
                            <h6>Site: </h6>
                            <a className='livesite' href='https://bedderwayco.com/' target='_blank' rel='noreferrer'> Bedder Way</a>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Work