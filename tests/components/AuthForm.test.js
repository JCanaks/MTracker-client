import { shallow } from 'enzyme';
import React from 'react';
import AuthForm from '../../src/components/AuthForm';
import mockData from '../config/mockData';
const { props, signup, handleInput, buttonAttributes } = mockData;

describe('Testing the AuthForm Component', () => {
  it('should render without an error', () => {
    shallow(
    <AuthForm
    buttonAttributes={buttonAttributes}
    props={props}
    handleInput={handleInput} 
    signup={signup}
    inputTypes={props.inputTypes}
    />);
  });
});