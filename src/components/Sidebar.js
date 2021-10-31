import React from 'react'
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
            </Router>
        </div>
    )
}

export default Sidebar