import React from 'react';
import '../../App.css'
import './Home.css';
import { Link } from "react-router-dom";
//<video src='../../Media/home-video.mp4' autoPlay loop muted />
const Principal = () => {
    return(
        <div className='hero-container'>
            <h1>STAR STUFF</h1>
            <p>Noticias científicas</p>
            <div className='hero-btns'>
                <Link to="/signup">
                    <button className='btns'>
                        EMPEZAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Principal;