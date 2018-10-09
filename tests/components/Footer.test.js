import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../src/components/Footer';

describe('Testing the Footer Component', () => {
  it('should render without an error', () => {
    shallow(
    <Footer/>);
  });
});