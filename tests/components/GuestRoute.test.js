import { shallow, mount } from 'enzyme';
import React from 'react';
import mockData from '../config/mockData';
const { userRole, token } = mockData;
import { Router, Redirect } from 'react-router-dom';
import { GuestRoute, mapStateToProps } from '../../src/components/routes/GuestRoute.jsx';

const state = {
    auth: {
        token: '',
    }
};
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                token: state.auth.token
            });
    })
});

describe('Testing the GuestRoute Component', () => {
    it('should render a passed in component if there is no token', () => {
        const Comp = () => (
            <p>A component</p>
        );
        const history = {
            location: {
                pathname: '/'
            },
            listen: () => { }
        };

        const output = GuestRoute({ token: state.auth.token, component: Comp });
        const wrapper = mount(<Router history={history}>{output}</Router>);
        expect(wrapper.contains(<p>A component</p>)).toEqual(true);
    });
});