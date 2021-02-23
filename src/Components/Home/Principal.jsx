import React from 'react';
import '../../App.css'
import {Button} from '../Button';
import './Home.css';
//<video src='../../Media/home-video.mp4' autoPlay loop muted />
const Principal = () => {
    return(
        <div className='hero-container'>
            <h1>STAR STUFF</h1>
            <p>Noticias científicas</p>
            <div className='hero-btns'>
                <button className='btns'>
                    EMPEZAR
                </button>
            </div>
        </div>
    )
}

export default Principal;