import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
    const { token, logout, headerClass, logoClass,
        menuClass, role } = props;
    return (
        <div className={headerClass}>
            <div className={logoClass}>
                <div>
                <Link to="/"> <img src="https://res.cloudinary.com/dgwphdxui/image/upload/v1538569660/Mtracker/Images/wheel-logo.png" /></Link>
                </div>
                <div>
                <Link to="/"> <h6>Maintenance Tracker</h6></Link>
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
                    :  role == 'User'?(
                        <div className={menuClass}>
                            <Link to="/">Home</Link>
                            <Link to="/requests/user">Requests</Link>
                            <Link to="#"><span onClick={logout}>Logout</span></Link>
                        </div>
                    ):(
                        <div className={menuClass}>
                            <Link to="/">Home</Link>
                            <Link to="/requests/admin">Requests</Link>
                            <Link to="#"><span onClick={logout}>Logout</span></Link>
                        </div>
                    )
            }
        </div>
    );
}

export default NavBar;