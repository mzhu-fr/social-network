import { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="navbar">

                <Link to="/" className="logoNav">Connectify</Link >

                <div className="navbarContent">
                    <Link to="/" className="navName homeStyle">Home</Link>

                    <Link to="/login" className="navName">Log In</Link>

                    <Link to="/signup" className="navName signBox">Sign Up</Link>
                </div>

            </div>
        );
    }
}

export default Header;