import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
    const {token, logout, headerClass, logoClass, menuClass} = props;
    return (
        <div className={headerClass}>
            <div className={logoClass}>
                <div>
                    <img src="https://res.cloudinary.com/dgwphdxui/image/upload/v1538569660/Mtracker/Images/wheel-logo.png" />
                </div>
                <div>
                    <h6>Maintenance Tracker</h6>
                </div>
            </div>

            {
                !token ? (
                    <div className={menuClass}>
                        <Link to="/">Home</Link>
                        <Link to="/login">Sign In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )
                    : (
                        <div className={menuClass}>
                            <Link to="/">Home</Link>
                            <Link to="#"><span onClick={logout}>Logout</span></Link>
                        </div>
                    )
            }
        </div>
    );
}

export default NavBar;