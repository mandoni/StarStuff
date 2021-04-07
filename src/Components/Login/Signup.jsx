import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import React, { useState } from "react";
import { AirlineSeatIndividualSuiteRounded, Mail } from '@material-ui/icons'
import loginImg from '../../Media/login-logo.svg'
import authImg from '../../Media/register-logo.svg'
import classnames from "classnames";
import Input from "./Input"
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import Ico from "./icon"
import { signin, signup } from "../../Actions/auth";

import useStyles from "./styles"
import './Login.css'

const initialState = {
    firstName: '',
    lastName: '',
    correo: '',
    password: '',
    confirmPassword: ''
}

export const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState)

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmmi = (e) => {
        e.preventDefault()
        //console.log(formData)

        if (isSignup) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword)

    const googleSuccess = async (res) => {
        const result = res && res.profileObj;
        const token = res && res.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleError = () => {
        console.log("Google error")
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <img src={isSignup ? loginImg : authImg} className="dim-img" alt="Imagen de Login" />
                    <Typography variant="h5">{isSignup ? 'Crear cuenta' : 'Iniciar sesión'}</Typography>
                    <form onSubmit={handleSubmmi} className={classes.form}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Input name="firstName" label="Nombre" handleChange={handleChange} autoFocus half />
                                        <Input name="lastName" label="Apellido" handleChange={handleChange} half />
                                    </>
                                )
                            }
                            <Input name="correo" label="Correo electrónico" handleChange={handleChange} type="email" />
                            <Input name="password" label="Contraseña" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {
                                isSignup && <Input name="confirmPassword" label="Confirmar " handleChange={handleChange} type="password" />
                            }
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? "Crear" : "Entrar"}
                        </Button>
                        <GoogleLogin
                            clientId="447319009478-a0bvu7re26u7c9bjgl3h7ufhg3ks9sod.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color="secondary"
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Ico />}
                                    variant="contained"> Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta? Registrate"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>

        </div>
    )
}

export default Signup;