import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import loginImg from '../../Media/register-logo.svg';
import { Grid, TextField } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import React, { Component } from "react";
import { Mail } from '@material-ui/icons'
import classnames from "classnames";
import './Login.css'

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" >
                <div className="header">
                    Registro
                    <div className="image">
                        <img src={loginImg} className="dim-img" />
                    </div>
                </div>

                <form noValidate onSubmit={this.onSubmit} className="content-reg">
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end" className="contenedor-input">
                            <Grid item>
                                <AccountCircleIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Nombre de usuario" name="name"
                                    id="name"
                                    type="text"
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
                                <Mail />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" name="email"
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
                    </div>
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end" className="contenedor-input">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Confirmaciòn" name="password2"
                                    id="password2"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div className="contenedor-err">
                            <span className="red-text">
                                err
                                </span>
                        </div>
                        <div className="footer col s12" style={{ paddingLeft: "38px" }}>
                            <button
                                className="btn-login"
                                type="submit">
                                Registrar
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Signup;