import React, { useState } from 'react';
import { Offcanvas, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, NavLink, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { FaHome, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonFill, BsBriefcaseFill, BsEnvelopeOpenFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiGithub } from 'react-icons/fi';
import logoImage from '../assets/cblogo.png';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='home'>
            <Router>
                <div className='socialMediaLinks'>
                    <a href='https://www.linkedin.com/in/cblakedev/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                    <a href='https://github.com/cblakedev' target='_blank' rel='noreferrer'><FiGithub /></a>
                    <p></p>
                </div>
                <div className='routeWrapper'>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/about'><About /></Route>
                        <Route exact path='/work'><Work /></Route>
                        <Route exact path='/contact'><Contact /></Route>
                    </Switch>
                </div>
                <div className='sidebar'>
                    <ul>
                        <li>
                            <NavLink exact to='/' className='linkWrapper' activeClassName="active">
                                <div className='homeLink'>
                                    <div className='homeBtn'>Home</div>
                                    <div className='homeSvg'><FaHome /></div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='linkWrapper' activeClassName="active">
                                <div className='aboutLink'>
                                    <div className='aboutBtn'>About</div>
                                    <div className='aboutSvg'><BsFillPersonFill /></div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/work' className='linkWrapper' activeClassName="active">
                                <div className='workLink'>
                                    <div className='workBtn'>Work</div>
                                    <div className='workSvg'><BsBriefcaseFill /></div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='linkWrapper' activeClassName='active'>
                                <div className='contactLink'>
                                    <div className='contactBtn'>Contact</div>
                                    <div className='contactSvg'><BsEnvelopeOpenFill /></div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='mobileNav'>
                    <button onClick={(e) => handleShow()}>
                        <GiHamburgerMenu />
                    </button>

                    <Offcanvas id='navCanvas' show={show} onHide={(e) => handleClose()}>
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body className='navCanvasBody'>
                            <ul>
                                <li>
                                    <NavLink exact to='/' onClick={(e) => handleClose()} className='mobileLinkWrapper' activeClassName='activeNav'>
                                        <div className='mobileHomeLink'>
                                            <p><span><FaHome /></span>Home</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' onClick={(e) => handleClose()} className='mobileLinkWrapper' activeClassName='activeNav'>
                                        <div className='mobileAboutLink'>
                                            <p><span><BsFillPersonFill /></span>About</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/work' onClick={(e) => handleClose()} className='mobileLinkWrapper' activeClassName='activeNav'>
                                        <div className='mobileWorkLink'>
                                            <p><span><BsBriefcaseFill /></span>Work</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' onClick={(e) => handleClose()} className='mobileLinkWrapper' activeClassName='activeNav'>
                                        <div className='mobileContactLink'>
                                            <p><span><BsEnvelopeOpenFill /></span>Contact</p>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            <Row className='navMediaLinksRow'>
                                <Col>
                                    <a href='https://www.linkedin.com/in/cblakedev' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                                </Col>
                                <Col>
                                    <a href='https://github.com/cblakedev' target='_blank' rel='noreferrer'><FiGithub /></a>
                                </Col>
                            </Row>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='logoWrapper'>
                    <Link exact to='/'><img src={logoImage} alt='cb logo'></img></Link>
                </div>
            </Router>
        </div>
    )
}

export default Sidebar