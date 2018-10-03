import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="header">
            <div className="logo">
                <div>
                    <img src="https://res.cloudinary.com/dgwphdxui/image/upload/v1538569660/Mtracker/Images/wheel-logo.png" />
                </div>
                <div>
                    <h6>Maintenance Tracker</h6>
                </div>
            </div>

            <div className="menubar">
            <Link to="/">Home</Link>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}

export default NavBar;