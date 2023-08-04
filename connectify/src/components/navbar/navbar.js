import { Component } from 'react';
import './navbar.css'

class Header extends Component {
       render (){
        return (
            <navbar className="navbar">
                <a>About</a>
                <p>Pirouette</p>
                <a>Wow</a>
            </navbar>
        );
    }
}

export default Header;