import { Component } from 'react';
import './navbar.css'

class Header extends Component {
       render (){
        return (
            <div className="navbar">
                
                <a href="http://localhost:3000/" className="logoNav">Connectify</a>
                <navbar className="navbarContent">
                    <a href="http://localhost:3000/" className="homeStyle">Home</a>
                    <p>Log in</p>
                    <p className="signBox">Sign up</p>
                    {/* <p>Contact Us</p> */}
                </navbar>
            </div>
        );
    }
}

export default Header;