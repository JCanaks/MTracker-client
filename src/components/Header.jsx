import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loggedin: false,
            headerClass: 'header',
            logoClass: 'logo',
            menuClass: 'menubar'
        }
    }
    
    render() { 
        const { headerClass, logoClass, menuClass } =this.state;
        return (
            <NavBar
            headerClass={headerClass}
            logoClass={logoClass}
            menuClass={menuClass}
            />
          );
    }

}
 
export default Header;