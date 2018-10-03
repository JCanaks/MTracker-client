import React from 'react';
const HomeView = () => {
    return (
        <div className="landing-body">
            <img src="https://res.cloudinary.com/dgwphdxui/image/upload/v1538569661/Mtracker/Images/wheel1.png" />
            <h1 className="landing-header">Maintenance Tracker</h1>
            <h3 className="landing-text">Handle Repairs and Replacements with Maintenance Tracker</h3>
            <a href="signup.html">
                <button type="submit" class="landing-btn">Sign Up Now</button>
            </a>
        </div>
    );
}

export default HomeView;