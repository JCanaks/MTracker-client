import { shallow, mount } from 'enzyme';
import React from 'react';
import mockData from '../config/mockData';
const { token } = mockData;
import { Router, Redirect } from 'react-router-dom';
import { PrivateRoute, mapStateToProps } from '../../src/components/routes/PrivateRoute';

const state = {
    auth: {
        token: 'token',
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

describe('Testing the PrivateRoute Component', () => {
    it('should render a passed in component if there is no token', () => {
        const Comp = () => (
            <p>A component</p>
        );
        const history = {
            location: {
                pathname: '/'
            },
            replace: () => { },
            listen: () => { }
        };

        const output = PrivateRoute({ token: state.auth.token, component: Comp });
        const wrapper = mount(<Router history={history}>{output}</Router>);
        expect(wrapper.contains(<p>A component</p>)).toEqual(true);
    });
});