import { shallow } from 'enzyme';
import React from 'react';
import HomeView from '../../src/components/HomeView';
describe('Testing the HomeView  Component', () => {
  it('should render without an error', () => {
    shallow(
    <HomeView/>);
  });
});