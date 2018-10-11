import React from 'react';
import { Link } from 'react-router-dom';
const HomeView = () => {
    return (
        <div className="landing-body">
            <img src="https://res.cloudinary.com/dgwphdxui/image/upload/v1538569661/Mtracker/Images/wheel1.png" />
            <h1 className="landing-header">Maintenance Tracker</h1>
            <h3 className="landing-text">Handle Repairs and Replacements with Maintenance Tracker</h3>
            <Link to="/signup">
                <button type="submit" className="landing-btn">Sign Up Now</button>
            </Link>
        </div>
    );
}

export default HomeView;