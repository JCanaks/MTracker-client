import React from 'react';
const NavBar = () => {
    return (
        <div className="header">
            <div className="logo">
                {/* <div>
                    <img src="" />
                </div> */}
                <div>
                    <h6>Maintenance Tracker</h6>
                </div>
            </div>

            <div className="menubar">
                <a href="index.html">Home</a>
                <a href="signin.html">Sign In</a>
                <a href="signup.html">Sign Up</a>
            </div>
        </div>
    );
}

export default NavBar;