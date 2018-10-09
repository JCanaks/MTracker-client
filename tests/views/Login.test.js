import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps } from '../../src/views/Login';
import mockData from '../config/mockData';
const { loginUserData, event, 
    loginUserData2, login } = mockData;


const shallowRender = () => (
    shallow(<Login
        userData={loginUserData}
    />)
)
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const state = {
            auth: {
                errors: '',
            }
        };
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                errors: state.auth.errors,
            });
    })
})
describe('Testing componentWillReceiveProps', () => {
    it('it should set errorText with the appropriate message if there is a server error', () => {
        const nextProps = {
            errors: {
                message: 'Authentication error message'
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps)
        expect(wrapper.instance().state.errorText).toEqual('Authentication error message');
    })
    it('it should have an errorText state value when no errors exist', () => {
        const nextProps = {
            errors: {
                message: ''
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps)
        expect(wrapper.instance().state.errorText).toEqual('');
    })
})
describe('Testing the handleInput function in the Login component', () => {
    it('it should set loginUserData values from user signup form inputs', () => {
        const wrapper = shallowRender();
        wrapper.instance().handleInput(event);
        expect(wrapper.instance().state.userData).toEqual(loginUserData);
    })
})
describe('Testing the login function in the Login component', () => {
    it('it should set loginUserDatavalues from the user signup form inputs', () => {
        const wrapper = shallow(
            <Login
            userData={loginUserData2}
            login={login}
            />);
        wrapper.instance().login(event);
        expect(wrapper.instance().state.userData).toEqual(loginUserData);
    })
})