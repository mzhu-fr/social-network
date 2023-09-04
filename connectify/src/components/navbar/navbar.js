import { useContext } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../page/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

function Header() {

    const navigate = useNavigate();
    const logOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        }
        catch {
            alert("Can't log out, retry later");
        }
    }
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return (
            <div className="navbar">

                <Link to="/" className="logoNav">Connectify</Link >

                <div className="navbarContent">
                    <Link to="/" className="navName homeStyle">Home</Link>

                    <Link to="/login" className="navName">Log In</Link>

                    <Link to="/signup" onClick="" className="navName signBox">Sign Up</Link>
                </div>

            </div >
        )
    }


    return (
        <div className="navbar">

            <Link to="/" className="logoNav">Connectify</Link >

            <div className="navbarContent">
                <Link to="/profile/profile-wall" className="navName homeStyle">Profile</Link>

                <Link to="/" onClick={logOut} className="navName signBox">Log Out</Link>
            </div>

        </div>
    );
}


export default Header;