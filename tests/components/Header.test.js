import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../../src/components/Header';
import mockData from '../config/mockData';
const { logout, props } = mockData;


const shallowRender = () => (
    shallow(
        <Header
            logout={logout}
        />)
);

describe('Testing the logout function in the Header component', () => {
    it('it should set userData values from user signup form inputs', () => {
        const wrapper = shallow(
            <Header
                logout={props.logout}
            />
        );
        const output = wrapper.instance().logout();
        expect(output).toEqual('logged out');
    })
})
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const state = {
            auth: {
                token:'',
            }
        };
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                token: state.auth.token
            });
    })
})