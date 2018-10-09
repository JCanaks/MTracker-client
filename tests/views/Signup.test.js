import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps } from '../../src/views/Signup';
import mockData from '../config/mockData';
const { userData, event, 
    userData2, signup } = mockData;


const shallowRender = () => (
    shallow(<Signup
        userData={userData}
    />)
)
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const state = {
            auth: {
                signupInfo: '',
                errors: '',
            }
        };
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                signupInfo: state.auth.signupInfo,
                errors: state.auth.signupInfo,
            });
    })
})
describe('Testing componentWillReceiveProps', () => {
    it('it should set errorText with the appropriate message if there is a validation error', () => {
        const nextProps = {
            errors: {
                message: [
                    {
                        message: 'validation error message',
                    }
                ]
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps)
        expect(wrapper.instance().state.errorText).toEqual('validation error message');
    })
    it('it should set errorText with the appropriate message if there is a server error', () => {
        const nextProps = {
            errors: {
                message: 'server error message'
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps)
        expect(wrapper.instance().state.errorText).toEqual('server error message');
    })
})
describe('Testing the handleInput function in the Signup component', () => {
    it('it should set userData values from user signup form inputs', () => {
        const wrapper = shallowRender();
        wrapper.instance().handleInput(event);
        expect(wrapper.instance().state.userData).toEqual(userData);
    })
})
describe('Testing the signup function in the Signup component', () => {
    it('it should set userData values from the user signup form inputs', () => {
        const wrapper = shallow(
            <Signup
            userData={userData2}
            signup={signup}
            />);
        wrapper.instance().signup(event);
        expect(wrapper.instance().state.userData).toEqual(userData);
    })
})