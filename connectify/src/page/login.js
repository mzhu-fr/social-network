import '../style/connexion.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Connect from '../ressources/connection/fd_connexion.jpg';
import Articles from '../components/article/article';


function logInForm() {
    return (
        <form className="logInForm">
            <div className="logInForm-content">
                <label>Email :</label>
                <input type="email" placeholder='enter your email' />
            </div>
            <div className="logInForm-content">
                <label>Password :</label>
                <input type="password" placeholder='enter your password' />
            </div>
            <button>Submit</button>
        </form>
    )
}

class logIn extends Component {
    state = {
        signed: false,
    }
    render() {
        return (
            <div className="logIn-style">
                <img src={Connect} alt="mobile-ver" className="image-mobile" />
                <Articles image={Connect} side="left" title="Connexion">
                    {logInForm()}
                    <p>Don't have an account ? <Link to="/signup" className="register-acc">Sign up !</Link></p>
                </Articles>

            </div>
        );
    }
}

export default logIn;