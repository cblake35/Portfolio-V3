import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import neighborhub from '../assets/neighborhub.png';
import ecommerce from '../assets/ecommerce.png';
import flixdb from '../assets/flixdb.png';

function Work() {


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
                    <div className='projectTitleOverlay'>
                        <p>NeighborHUB</p>
                    </div>
                </Col>
                <Col md={4} className='workList'>
                    <img src={ecommerce} alt='Ecommerce Website' />
                    <div className='projectTitleOverlay'>
                        <p>Bedder Way Co</p>
                    </div>
                </Col>
                <Col md={4} className='workList'>
                    <img src={flixdb} alt='FlixDB App' />
                    <div className='projectTitleOverlay'>
                        <p>FlixDB</p>
                    </div>
                </Col>
            </Row>
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

export default Work