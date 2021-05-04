import React from 'react'
import { Link } from "react-router-dom";
import "./App.css"

function NotFound() {
    return (
        <div>
            <div className="fondo-404">
                <div className="texto-404">
                    <h1 className="h1-404">EPIC 404 </h1>
                    <h3 className="h3-404">No es la estrella que buscabas</h3>
                </div>
            </div>


            <div className="footer-container">
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <a href="#inicio" className='social-logo'>
                                StarStuff
                                        <i class='fas fa-globe-americas' />
                            </a>
                        </div>
                        <small class='website-rights'>NorYu © 2021</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}

export default NotFound
