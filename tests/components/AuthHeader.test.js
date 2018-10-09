import { shallow } from 'enzyme';
import React from 'react';
import AuthHeader from '../../src/components/AuthHeader';
import mockData from '../config/mockData';
const { headerText } = mockData;

describe('Testing the AuthHeader Component', () => {
  it('should render without an error', () => {
    shallow(
    <AuthHeader
    headerText={headerText}
    />);
  });
});