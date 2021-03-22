import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { loginUser } from "../../Actions/authActions";
import { Grid, TextField } from '@material-ui/core';
import loginImg from '../../Media/login-logo.svg'
import LockIcon from '@material-ui/icons/Lock';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import './Login.css'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
            // push user to dashboard when they login
        } if (nextProps.errors) {
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
        this.props.loginUser(userData);
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
                                    className={classnames("", {
                                        invalid: errors.email || errors.emailnotfound
                                    })}
                                />
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
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
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "25px", marginTop:"20px"  }}>
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

//to define types in our constructor
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

///alow us to call props.auth or props.erros within Signup component 
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);