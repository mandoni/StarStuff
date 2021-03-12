import React from 'react';
import loginImg from '../../Media/login-logo.svg'
import './Login.css'


class Login extends React.Component {
    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Login
                    <div className="image">
                        <img src={loginImg} className="dim-img" alt="Imagen de Login"/>
                    </div>
                </div> 
                
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn-login">Login</button>
                </div>
            </div>
        )
    }
    
}

export default Login;