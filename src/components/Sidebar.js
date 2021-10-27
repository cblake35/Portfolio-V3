import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BsEnvelopeOpenFill } from 'react-icons/bs';

function Sidebar() {


    return (
        <div className='home'>
            <Router>
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
                            <Link to='/'>
                                <div className='sidebarLinkWrapper'>
                                    <div className='homeBtn'><span>Home</span></div>
                                    <div className='homeSvg'><FaHome /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <div className='sidebarLinkWrapper'>
                                    <div className='aboutBtn'><span>About</span></div>
                                    <div className='aboutSvg'><BsFillPersonFill /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/work'>
                                <div className='sidebarLinkWrapper'>
                                    <div className='workBtn'><span>Work</span></div>
                                    <div className='workSvg'><BsBriefcaseFill /></div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <div className='sidebarLinkWrapper'>
                                    <div className='contactBtn'><span>Contact</span></div>
                                    <div className='contactSvg'><BsEnvelopeOpenFill /></div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    )
}

export default Sidebar