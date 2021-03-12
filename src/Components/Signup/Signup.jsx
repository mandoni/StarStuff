import React from 'react';
import loginImg from '../../Media/register-logo.svg'
import '../Login/Login.css'

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="base-container">
                <div className="header">
                    Registro
                    <div className="image">
                        <img src={loginImg} className="dim-img"/>
                    </div>
                </div> 
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" placeholder="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn-login">Registrar</button>
                </div>
            </div>
        )
    }
    
}

export default Signup;