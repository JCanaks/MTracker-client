import { shallow } from 'enzyme';
import React from 'react';
import AuthButtonComponent from '../../src/components/AuthButtonComponent';
import mockData from '../config/mockData';
const { buttonAttributes } = mockData;

describe('Testing the AuthButton Component', () => {
  it('should render without an error', () => {
    shallow(
    <AuthButtonComponent
    buttonAttributes={buttonAttributes} 
    />);
  });
});