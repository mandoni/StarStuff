import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import loginImg from '../../Media/register-logo.svg';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import './Login.css'
import { Grid, TextField } from '@material-ui/core';
import { Mail } from '@material-ui/icons';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);
    }
    render() {
        const { errors } = this.state;
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
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircleIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Nombre de usuario" name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Mail />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" name="email"
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
                    <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField label="Confirmaciòn" name="password2"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="footer col s12" style={{ paddingLeft: "11.250px" }}>
                        <button
                           className="btn-login"
                            type="submit"
                            className="btn-login"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
} export default Signup;