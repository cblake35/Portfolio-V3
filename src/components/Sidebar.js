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
                            <Link to='/' className='linkWrapper'>
                                <div className='homeSvg'>
                                    <div className='homeBtn'>Home</div>
                                    <FaHome />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className='linkWrapper'>
                                <div className='aboutSvg'>
                                    <div className='aboutBtn'>About</div>
                                    <BsFillPersonFill />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/work' className='linkWrapper'>
                                <div className='workSvg'>
                                    <div className='workBtn'>Work</div>
                                    <BsBriefcaseFill />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='linkWrapper'>
                                <div className='contactSvg'>
                                    <div className='contactBtn'>Contact</div>
                                    <BsEnvelopeOpenFill />
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