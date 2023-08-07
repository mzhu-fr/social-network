import { Component } from 'react';
import './navbar.css'

class Header extends Component {
       render (){
        return (
            <navbar className="navbar">
                <p>About</p>
                <p>Wow</p>
            </navbar>
        );
    }
}

export default Header;