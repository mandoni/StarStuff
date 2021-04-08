import React, { useState, useEffect } from 'react';
import { Avatar, Button, Typography } from '@material-ui/core';
import * as actionType from '../../constants/actionTypes';
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import decode from 'jwt-decode';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        showButton()
    }, [])

    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user && user.token;

        //JWT

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    window.addEventListener('resize', showButton);

    return (
        <a name="inicio">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        StarStuff <i className="fas fa-globe-americas"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobilMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/home#secciones" className="nav-links" onClick={closeMobilMenu}>
                                Secciones
                                </a>
                        </li>
                        <li className="nav-item">
                            <a href="/home#nosotros" className="nav-links" onClick={closeMobilMenu}>
                                Sobre nosotros
                            </a>
                        </li>
                        <li className="nav-item-login">
                            {(user && user.result) ? (
                                <div>
                                    <Link to="/perfil" className="nav-links">
                                        <Typography className="espacio-usuario" variant="h6">{user && user.result.name}</Typography>
                                    </Link>
                                </div>
                            ) : (
                                    <Link to="/login" className="nav-links" onClick={closeMobilMenu}>
                                        Login
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </a>
    )
}

/*{button && 
                        <Link to="/signup" onClick={closeMobilMenu}>
                            <Button buttonStyle='btn--outline'>Sign Up</Button>
                        </Link>
                    }
*/

export default Navbar
