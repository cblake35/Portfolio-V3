import React, { useState } from "react";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import neighborhub from '../assets/neighborhub.png';
import ecommerce from '../assets/ecommerce.png';
import flixdb from '../assets/flixdb.png';

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
                    <Modal.Title>NeighborHUB</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => props.handleCloseOne()}>
                        Close
                    </button>
                    <button onClick={(e) => props.handleCloseOne()}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal show={props.showTwo} onHide={props.handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title>Bedder Way Co</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => props.handleCloseTwo()}>
                        Close
                    </button>
                    <button onClick={(e) => props.handleCloseTwo()}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
            
            <Modal show={props.showThree} onHide={props.handleCloseThree}>
                <Modal.Header closeButton>
                    <Modal.Title>FlixDB</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => props.handleCloseThree()}>
                        Close
                    </button>
                    <button onClick={(e) => props.handleCloseThree()}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Work