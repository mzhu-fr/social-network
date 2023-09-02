import '../style/connexion.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Connect from '../ressources/connection/fd_connexion.jpg';
import Articles from '../components/article/article';

function signUpForm() {
    return (
        <div className="signUpForm">

            <form>
                <div className="name">

                    <div className="famName">
                        <label>Last Name :</label>
                        <input type="text" placeholder='Input your last name' />
                        <p className="err-text"></p>
                    </div>

                    <div className="FirstName">
                        <label>FirstName :</label>
                        <input type="text" placeholder='Input your first name' />
                        <p className="err-text"></p>
                    </div>

                </div>

                <div>
                    <label>Email :</label>
                    <input type="email" placeholder="Enter your mail" />
                    <p className="err-text"></p>
                </div>

                <div className="genre-type">
                    <div className="female-genre">
                        <label>Female</label>
                        <input type="checkbox" />
                    </div>

                    <div className="male-genre">
                        <label>Male</label>
                        <input type="checkbox" />
                    </div>

                    <div className="nonbinary-genre">
                        <label>Non-binary</label>
                        <input type="checkbox" />
                    </div>

                    <p className="err-text"></p>
                </div>

                <div className="password-box">
                    <label>Password :</label>
                    <input type="password" />
                    <p className="err-text"></p>
                </div>

                <div className="password-check">
                    <label>Retype your password :</label>
                    <input type="password" />
                    <p className="err-text"></p>
                </div>

            </form>

        </div>
    )
}

class signUp extends Component {
    state = {
        signed: false,
    }
    render() {
        return (
            <div className="logIn-style">
                <img src={Connect} alt="mobile-ver" className="image-mobile" />
                <Articles image={Connect} side="right" title="Connexion">
                    {signUpForm()}
                    <p>Already have an account ? <Link to="/login" className="register-acc">Log In !</Link></p>
                </Articles>

            </div>
        );
    }
}

export default signUp;