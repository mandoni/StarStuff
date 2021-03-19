import React, { Component } from "react";
import { Link } from "react-router-dom";
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

                <form className="formulario">
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                name
                            </div>
                            <div className="form-group">
                                mail
                            </div>
                            <div className="form-group">
                                ps
                            </div>
                            <div className="form-group">
                                pw2
                            </div>
                        </div>
                    </div>
                </form>
                <div className="footer">
                    <button type="button" className="btn-login">Registrar</button>
                </div>
            </div>
        )
    }
}


export default Signup;