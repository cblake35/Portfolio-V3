import React, { useState } from "react";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import neighborhub from '../assets/neighborhub.png';
import ecommerce from '../assets/ecommerce.png';
import flixdb from '../assets/flixdb.png';
import { VscGithub } from 'react-icons/vsc'

function Work() {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);

    const handleCloseOne = () => setShowOne(false);
    const handleShowOne = () => setShowOne(true);
    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);
    const handleCloseThree = () => setShowThree(false);
    const handleShowThree = () => setShowThree(true);

    return (
        <Container>
            <Row className='workTitleWrapper'>
                <Col className='workTitle'>
                    <h1>Featured<span> Work</span></h1>
                </Col>
            </Row>
            <Row className='workListWrapper'>
                <Col md={4} className='workList'>
                    <img src={neighborhub} alt='NeighborHub App' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowOne()}>
                        <p>NeighborHUB</p>
                    </div>
                </Col>
                <Col md={4} className='workList'>
                    <img src={ecommerce} alt='Ecommerce Website' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowTwo()}>
                        <p>Bedder Way Co</p>
                    </div>
                </Col>
                <Col md={4} className='workList'>
                    <img src={flixdb} alt='FlixDB App' />
                    <div className='projectTitleOverlay' onClick={(e) => handleShowThree()}>
                        <p>FlixDB</p>
                    </div>
                </Col>
            </Row>

            <MyModals
                showOne={showOne}
                showTwo={showTwo}
                showThree={showThree}

                handleCloseOne={handleCloseOne}
                handleShowOne={handleShowOne}
                handleCloseTwo={handleCloseTwo}
                handleShowTwo={handleShowTwo}
                handleCloseThree={handleCloseThree}
                handleShowThree={handleShowThree}
            />

            {/* <Row className='miniappTitleWrapper'>
                <Col className='miniappTitle'>
                    <h2>Mini<span> Apps</span></h2>
                </Col>
            </Row>
            <Row className='miniappWrapper'>
                <Col md={4} className='miniappList'>
                    mini app
                </Col>
                <Col md={4} className='miniappList'>
                    mini app
                </Col>
                <Col md={4} className='miniappList'>
                    mini app
                </Col>
            </Row> */}
        </Container>
    )
}

const MyModals = (props) => {

    return (
        <>
            <Modal show={props.showOne} onHide={props.handleCloseOne}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>NeighborHUB</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={neighborhub} alt='NeighborHub App' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>A full-stack web app for residential communities. The purpose of this app is to create
                                a localized social hub for communities to interact in. It also provides an intuitive
                                ticketing system for residents and allows administrators to manage, track, and resolve each submitted ticket.
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
                                <h6>Demo Login(Tenant/Admin)</h6>
                                <p>Username: test1</p>
                                <p>Password: Password1</p>
                            </div>
                            <a className='githubRepo' href='https://github.com/cblake35/NeighborHUB-Client' target='_blank' rel='noreferrer'><VscGithub /></a>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            </Modal>

            <Modal show={props.showTwo} onHide={props.handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>Bedder Way Co</Modal.Title>
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
                                <li>Shopify</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='livesiteWrapper'>
                        <Col>
                            <h6>Site: </h6>
                            <a className='livesite' href='https://bedderwayco.com/' target='_blank' rel='noreferrer'> Bedder Way Co</a>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            </Modal>

            <Modal show={props.showThree} onHide={props.handleCloseThree}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>FlixDB</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <img className='modalImg' src={flixdb} alt='NeighborHub App' />
                    <Row className='siteDescriptionWrapper'>
                        <Col className='siteDescription'>
                            <h6>Info:</h6>
                            <p>A full-stack web app for browsing and reviewing popular movie titles. The app utilizes a PostgreSQL database
                                to allow users to bookmark movies, search reviews from other users, and view their past reviews. This app feautures
                                full CRUD functionality.
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
                                <li>Movie Database API</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='livesiteWrapper'>
                        <Col>
                            <h6>Site: </h6>
                            <a className='livesite' href='https://flixdb-client.herokuapp.com/' target='_blank' rel='noreferrer'> FlixDB</a>
                            <div className='demoLoginWrapper'>
                                <h6>Demo Login</h6>
                                <p>Username: test1</p>
                                <p>Password: Password1</p>
                            </div>
                            <a className='githubRepo' href='https://github.com/cblake35/FlixDB-Client' target='_blank' rel='noreferrer'><VscGithub /></a>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            </Modal>
        </>
    )
}

export default Work