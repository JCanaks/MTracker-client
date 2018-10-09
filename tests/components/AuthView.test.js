import { shallow } from 'enzyme';
import React from 'react';
import AuthView from '../../src/components/AuthView';
import mockData from '../config/mockData';
const { props } = mockData;

describe('Testing the AuthView Component', () => {
  it('should render without an error', () => {
    shallow( 
    <AuthView
    props={props}
    />);
  });
});