import React from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function Home() {


    return (
        <div>
            <div className='homeImage'></div>
            <div className='intro'>
                <h1>HI, I'M CHRIS!</h1>
                <h2>A Full-Stack Web Developer</h2>
                <button>More about me <BsFillArrowRightCircleFill /></button>
            </div>
        </div>
    )
}

export default Home