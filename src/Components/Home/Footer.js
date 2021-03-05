import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Recibe las noticias más relevantes personalmente
                </p>
                <p className='footer-subscription-text'>
                Suscribite a nuestro boletín diario
                </p>
                <div className='input-areas'>
                <form>
                    <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='email'
                    />
                    <button className="btns">Suscribete</button>
                </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/signup'>Nuestro trabajo</Link>
                    <Link to='/'>Testimonios</Link>
                    <Link to='/'>Carreras</Link>
                    <Link to='/'>Inversionistas</Link>
                    <Link to='/'>Terminos de sercicio</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contacto</Link>
                    <Link to='/'>Soporte</Link>
                    <Link to='/'>Destinos</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                </div>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Enviar Video</Link>
                    <Link to='/'>Escritores</Link>
                    <Link to='/'>Agencia</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                </div>
            </div>
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
    )
}

export default Footer
