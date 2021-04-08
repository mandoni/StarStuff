import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import * as actionType from '../../constants/actionTypes';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useStyles from './styles';
import './perfil.css'



const perfil = () => {
    const history = useHistory();
    const classes = useStyles();

    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        setUser(null);
        history.push('/');
    }

    return (
        <div>
            {(user && user.result) ? (
                <div className="front-con-cuenta">
                    <Grid className="perfil-css">
                        <Avatar id="av" className={classes.large} alt={(user && user.result.name)} src={user.result.imageUrl}>{user && user.result.name.charAt(0)}</Avatar>
                        <Typography
                            variant="h4"
                            align="center"
                        >
                            {user.result.name}
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                        >
                            {user.result.email}
                        </Typography>

                        <Link to="/addNews">
                            <button className="btn btn-add">Agregar noticia</button>
                        </Link><br /><br />

                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Salir</Button>

                    </Grid>
                </div>
            ) : (
                    <div className="front-sin-cuenta">
                        <Grid className="crear-cuenta">
                            <Typography
                                variant="h4"
                                align="center"
                            >
                                CREA UNA CUENTA
                        </Typography>
                            <Link to="/login">
                                <button className="btn">Crear cuenta</button>
                            </Link>
                        </Grid>
                    </div>
                )
            }
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

export default perfil
