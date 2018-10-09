import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../src/components/NavBar';
import mockData from '../config/mockData';
const { props, token, logout } = mockData;

describe('Testing the HomeView  Component', () => {
    it('should render without an error', () => {
        shallow(
            <NavBar
                props={props}
                token={token}
                logout={logout}
            />);
    });
});