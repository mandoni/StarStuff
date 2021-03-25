import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid, TextField } from '@material-ui/core';
import loginImg from '../../Media/login-logo.svg'
import LockIcon from '@material-ui/icons/Lock';
import React from "react";
import './Login.css'


class Login extends React.Component {
    render() {
        return (
            <div className="base-container">
                <div className="header">
                    Login
                    <div className="image">
                        <img src={loginImg} className="dim-img" alt="Imagen de Login" />
                    </div>
                </div>

                <form noValidate onSubmit={this.onSubmit} className="content-log">
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end" className="contenedor-input">
                            <Grid item>
                                <AccountCircleIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Nombre de usuario" name="name"
                                    id="email"
                                    type="email"
                                />
                            </Grid>
                        </Grid>
                        <div className="contenedor-err">
                            <span className="red-text">
                                err
                                </span>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end" className="contenedor-input">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Contraseña" name="password"
                                    id="password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div className="contenedor-err">
                            <span className="red-text">
                                err
                            </span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "25px" }}>
                            <button
                                type="submit"
                                className="btn-login"
                            >
                                Login
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;