import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import loginImg from '../../Media/login-logo.svg'
import LockIcon from '@material-ui/icons/Lock';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { Grid, TextField } from '@material-ui/core';



class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
    }

    render() {
        const { errors } = this.state;
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
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircleIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Nombre de usuario" name="name"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Contraseña" name="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className="btn-login"
                        >
                            Login
                </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;

