import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/work'>Work</Link></li>
                        <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    )
}

export default Sidebar