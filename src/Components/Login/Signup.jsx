import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { registerUser } from "../../Actions/authActions";
import loginImg from '../../Media/register-logo.svg';
import { Grid, TextField } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import React, { Component } from "react";
import { Mail } from '@material-ui/icons'
import { connect } from 'react-redux';
import classnames from "classnames";
import PropTypes from "prop-types";
import './Login.css'

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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

        this.props.registerUser(newUser, this.props.history);
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
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <span className="red-text">{errors.name}</span>
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
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className="red-text">{errors.email}</span>
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
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className="red-text">{errors.password}</span>
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
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <span className="red-text">{errors.password2}</span>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="footer col s12" style={{ paddingLeft: "38px" }}>
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
}

//to define types in our constructor
Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

///alow us to call props.auth or props.erros within Signup component 
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Signup))