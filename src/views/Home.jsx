import React, { Component } from 'react';
import HomeView from '../components/HomeView';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            homeClass: 'landing-body',
            homeHeader: 'landing-header',
            homeText: 'landing-text',
            homeButton: 'landing-btn'
        }
    }
    render() {
        const { homeClass, homeHeader, homeText, homeButton } =this.state;
        return (
            <HomeView
                homeClass={homeClass}
                homeHeader={homeHeader}
                homeText={homeText}
                homeButton={homeButton}
            />
        );
    }
}

export default Home;