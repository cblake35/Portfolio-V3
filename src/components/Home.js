import React from "react";
import { MdArrowForward } from 'react-icons/md';
import {Link} from 'react-router-dom';

function Home() {


    return (
        <div>
            <div className='homeImage'></div>
            <div className='intro'>
                <h1>HI, I'M CHRIS!</h1>
                <h2>A Full-Stack Web Developer</h2>
                <Link to='/about'>
                    <span className='aboutMeSpan'>More about me</span>
                    <span className='aboutMeSvg'><MdArrowForward /></span>
                </Link>
            </div>
        </div>
    )
}

export default Home