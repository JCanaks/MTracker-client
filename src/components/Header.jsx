import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import authAction from '../actions/authAction';

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            loggedin: false,
            headerClass: 'header',
            logoClass: 'logo',
            menuClass: 'menubar'
        }
        this.logout = this.logout.bind(this);
    }

    /**
   * logout function
   * @returns {null} null
   */
    logout() {
        const { logout } = this.props;
        return logout();
    }

    render() {
        const { headerClass, logoClass, menuClass } = this.state;
        const { token, role } = this.props;
        return (
            <NavBar
                headerClass={headerClass}
                logoClass={logoClass}
                menuClass={menuClass}
                logout={this.logout}
                token={token}
                role={role}
            />
        );
    }

}
export const mapStateToProps = (state) => {
    const { token, role } = state.auth;
    return {
        token,
        role
    };
};
export default connect(mapStateToProps, {
    logout: authAction.logout
})(Header);