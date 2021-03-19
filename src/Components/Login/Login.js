import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import loginImg from '../../Media/login-logo.svg'
import './Login.css'



export const Login = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="base-container">
            <div className="header">
                Login
                    <div className="image">
                    <img src={loginImg} className="dim-img" alt="Imagen de Login" />
                </div>
            </div>

            <div className="content">
                <div className="form-login">
                    <Grid fullWidth spacing={1}>
                        <div className="form-group">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="input-with-icon-grid" label="Nombre de usuario" />
                                </Grid>

                            </Grid>

                            <div className="form-group">
                                <FormControl >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn-login">Login</button>
            </div>
        </div>
    )
}

export default Login;

