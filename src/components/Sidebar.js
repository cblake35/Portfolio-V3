import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BsEnvelopeOpenFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='home'>
            <Router>
                <div className='socialMediaLinks'>
                    <a href='https://www.linkedin.com/in/cblake35/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                    <a href='https://github.com/cblake35' target='_blank' rel='noreferrer'><FiGithub /></a>
                    <a href='https://twitter.com/CBlakeDev' target='_blank' rel='noreferrer'><AiOutlineTwitter /></a>
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
                            <Link to='/' className='linkWrapper'>
                                <div className='homeLink'>
                                    <div className='homeBtn'>Home</div>
                                    <div className='homeSvg'><FaHome /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className='linkWrapper'>
                                <div className='aboutLink'>
                                    <div className='aboutBtn'>About</div>
                                    <div className='aboutSvg'><BsFillPersonFill /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/work' className='linkWrapper'>
                                <div className='workLink'>
                                    <div className='workBtn'>Work</div>
                                    <div className='workSvg'><BsBriefcaseFill /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='linkWrapper'>
                                <div className='contactLink'>
                                    <div className='contactBtn'>Contact</div>
                                    <div className='contactSvg'><BsEnvelopeOpenFill /></div>
                                </div>
                            </Link>
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
                                    <Link to='/' onClick={(e) => handleClose()} className='mobileLinkWrapper'>
                                        <div className='mobileHomeLink'>
                                            <p><span><FaHome /></span>Home</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' onClick={(e) => handleClose()} className='mobileLinkWrapper'>
                                        <div className='mobileAboutLink'>
                                            <p><span><BsFillPersonFill /></span>About</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/work' onClick={(e) => handleClose()} className='mobileLinkWrapper'>
                                        <div className='mobileWorkLink'>
                                            <p><span><BsBriefcaseFill /></span>Work</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' onClick={(e) => handleClose()} className='mobileLinkWrapper'>
                                        <div className='mobileContactLink'>
                                            <p><span><BsEnvelopeOpenFill /></span>Contact</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </Router>
        </div>
    )
}

export default Sidebar