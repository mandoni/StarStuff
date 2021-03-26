import React, { useState, useEffect } from 'react';
import { Avatar, Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import useStyles from './styles';
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

    useEffect(() => {
        showButton()
    }, [])

    const classes = useStyles();

    const user = null;


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
                            {user ? (
                                <div className={classes.profile}>
                                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                                    <Button variant="contained" className={classes.logout} color="secondary">Salir</Button>
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
